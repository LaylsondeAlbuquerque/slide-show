import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AULA_DOIS} from '../../data/aula-dois.data';
import { ISlide } from '../../models/slide.model';

@Component({
  selector: 'app-slide-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.css',
})
export class SlideComponent {
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
