import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlideHeaderComponent } from './components/slide-header.component/slide-header.component';
import { SlideMainComponent } from './components/slide-main.component/slide-main.component';

import { AULA_DOIS} from './data/aula-dois.data';
import { AULA_UM } from './data/aula-um.data';
import { AULA_ALGORITMO_REDES_SOCIAIS } from './data/aula_algoritmo_redes_sociais.data';

import { SwipeDirective } from './directives/swipe.directive';

/**
 * Componente raiz e principal da aplicação (App).
 *
 * Este componente atua como o "cérebro" da apresentação, gerenciando
 * o estado da aula e do slide atual usando Angular Signals. Ele é
 * responsável por:
 * - Carregar os dados das aulas.
 * - Controlar qual aula está selecionada.
 * - Controlar qual slide está visível.
 * - Fornecer os métodos de navegação (próximo, voltar, mudar aula)
 * para o template `app.html`.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    SlideHeaderComponent,
    SlideMainComponent,
    SwipeDirective
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  /**
   * Array que armazena os dados de todas as aulas disponíveis.
   * Usado para popular o `<select>` de aulas no template.
   */
  aulasDisponiveis = [
    { id: 'aula1', nome: 'Aula 1: A Semente da Ideia', data: AULA_UM },
    { id: 'aula2', nome: 'Aula 2: A Mágica da Câmera', data: AULA_DOIS },
    { id: 'aulaExtra1', nome: 'Aula Extra: O Algoritmo das Redes Sociais', data: AULA_ALGORITMO_REDES_SOCIAIS }
  ];

  // --- State Management com Signals ---

  /**
   * FONTE DA VERDADE (Signal): Armazena o *objeto* da aula
   * que está selecionada no momento.
   *
   * Inicia com a primeira aula da lista.
   * @example
   * { id: 'aula1', nome: 'Aula 1...', data: [...] }
   */
  aulaSelecionada = signal(this.aulasDisponiveis[0]);

  /**
   * FONTE DA VERDADE (Signal): Armazena o *índice* (base 0)
   * do slide atual dentro da aula selecionada.
   *
   * Inicia em 0 (o primeiro slide).
   */
  indiceSlide = signal(0);

  /**
   * VALOR DERIVADO (Computed): "Escuta" o signal `aulaSelecionada`.
   *
   * Retorna o array de `ISlide[]` da aula que está selecionada no momento.
   * Este valor é recalculado automaticamente sempre que `aulaSelecionada` muda.
   */
  slides = computed(() => this.aulaSelecionada().data);

  /**
   * VALOR DERIVADO (Computed): "Escuta" os signals `slides` e `indiceSlide`.
   *
   * Retorna o objeto `ISlide` do slide atual.
   * Este valor é recalculado automaticamente sempre que `slides` (e
   * consequentemente `aulaSelecionada`) ou `indiceSlide` mudam.
   */
  slideAtual = computed(() => this.slides()[this.indiceSlide()]);


  // --- Métodos de Navegação (Actions) ---

  /**
   * Avança para o próximo slide.
   *
   * Atualiza o `indiceSlide` somando 1, mas apenas se não
   * estiver no último slide.
   *
   * Chamado pelo `(click)` e `(swipeleft)` no template `app.html`.
   */
  proximoSlide() {
    // Lê o valor atual dos signals
    if (this.indiceSlide() < this.slides().length - 1) {
      // Atualiza o signal de índice
      this.indiceSlide.update(valorAtual => valorAtual + 1);
    }
  }

  /**
   * Retorna para o slide anterior.
   *
   * Atualiza o `indiceSlide` subtraindo 1, mas apenas se não
   * estiver no primeiro slide (índice 0).
   *
   * Chamado pelo `(click)` e `(swiperight)` no template `app.html`.
   */
  voltarSlide() {
    if (this.indiceSlide() > 0) {
      this.indiceSlide.update(valorAtual => valorAtual - 1);
    }
  }

  /**
   * Troca a aula inteira com base na seleção do usuário no `<select>`.
   *
   * Chamado pelo `(change)` no `<select>` do template `app.html`.
   *
   * @param event O evento DOM 'change' disparado pelo `<select>`.
   */
  mudarAula(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const aulaId = selectElement.value;
    const aulaEncontrada = this.aulasDisponiveis.find(aula => aula.id === aulaId);

    if (aulaEncontrada) {
      // 1. Atualiza o signal da aula selecionada.
      //    Isso automaticamente recalcula o `slides()` (computed).
      this.aulaSelecionada.set(aulaEncontrada);

      // 2. Reseta o índice do slide para 0, para começar a nova aula do início.
      //    Isso automaticamente recalcula o `slideAtual()` (computed).
      this.indiceSlide.set(0);
    }
  }
}