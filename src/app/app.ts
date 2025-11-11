import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlideHeaderComponent } from './components/slide-header.component/slide-header.component';
import { SlideMainComponent } from './components/slide-main.component/slide-main.component';

import { AULA_DOIS} from './data/aula-dois.data';
import { AULA_UM } from './data/aula-um.data';
import { ISlide } from './models/slide.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    SlideHeaderComponent,
    SlideMainComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  // (Assumindo que você importou AULA_UM e AULA_DOIS)
aulasDisponiveis = [
  { id: 'aula1', nome: 'Aula 1: A Semente da Ideia', data: AULA_UM },
  { id: 'aula2', nome: 'Aula 2: A Mágica da Câmera', data: AULA_DOIS }
];

// ----- FONTES DA VERDADE (Signals) -----
aulaSelecionada = signal(this.aulasDisponiveis[0]);
indiceSlide = signal(0);

// ----- VALORES DERIVADOS (Computed) -----

// CORRIGIDO: 'slides' agora é um COMPUTED, não um signal.
// Ele "escuta" o 'aulaSelecionada'
slides = computed(() => this.aulaSelecionada().data);

// Este 'computed' está perfeito
slideAtual = computed(() => this.slides()[this.indiceSlide()]);


// ----- MÉTODOS -----
proximoSlide() {
  // CORRIGIDO: lendo 'slides()' com parênteses
  if (this.indiceSlide() < this.slides().length - 1) {
    this.indiceSlide.update(valorAtual => valorAtual + 1);
  }
}

voltarSlide() {
  if (this.indiceSlide() > 0) {
    this.indiceSlide.update(valorAtual => valorAtual - 1);
  }
}

// Esta função estava correta.
mudarAula(event: Event) {
  const selectElement = event.target as HTMLSelectElement;
  const aulaId = selectElement.value;
  const aulaEncontrada = this.aulasDisponiveis.find(aula => aula.id === aulaId);
  if (aulaEncontrada) {
    this.aulaSelecionada.set(aulaEncontrada);
    this.indiceSlide.set(0);
  }
}
}
