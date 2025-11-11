import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ISlide } from '../../models/slide.model';

/**
 * Componente de Apresentação (Dumb Component) para o cabeçalho do slide.
 *
 * Responsável por receber um objeto `ISlide` e renderizar o
 * título e o subtítulo. A lógica de qual estilo aplicar (level 1, 2 ou 3)
 * está contida no seu template (`slide-header.component.html`).
 */
@Component({
  selector: 'app-slide-header-component',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './slide-header.component.html',
  styleUrl: './slide-header.component.css',
})
export class SlideHeaderComponent {

  /**
   * O objeto de slide completo (`ISlide`) que este componente
   * deve renderizar.
   *
   * É uma dependência obrigatória (`required: true`), fornecida
   * pelo componente pai (ex: `App`).
   */
  @Input({ required: true }) slide!: ISlide;
}