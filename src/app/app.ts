import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlideHeaderComponent } from './components/slide-header.component/slide-header.component';
import { SlideMainComponent } from './components/slide-main.component/slide-main.component';

import {AULA_DOIS} from './data/aula-dois.data';
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
  slides: ISlide[] = AULA_DOIS;
  
  indiceSlide = signal(0);

  slideAtual = computed(() => this.slides[this.indiceSlide()]);

  // Método para avançar para o próximo slide
  proximoSlide() {
    if (this.indiceSlide() < this.slides.length - 1) {
      this.indiceSlide.update(valorAtual => valorAtual + 1);
    }
  }
  voltarSlide() {
    if (this.indiceSlide() > 0) {
      this.indiceSlide.update(valorAtual => valorAtual - 1);
    }
  }
}
