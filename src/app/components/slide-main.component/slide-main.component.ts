import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importa apenas o tipo ContentBlock, que é o tipo união (union type)
// para todos os blocos de conteúdo.
import { ContentBlock } from '../../models/slide.model';

/**
 * Componente de Apresentação (Dumb Component) para o corpo principal do slide.
 *
 * É responsável por renderizar o conteúdo real do slide.
 * Ele recebe um array de 'ContentBlock' e usa a lógica `@switch`
 * em seu template (`slide-main.component.html`) para decidir
 * qual HTML renderizar (texto, lista, tabela, etc.).
 */
@Component({
  selector: 'app-slide-main-component',
  standalone: true, // Corrigido para standalone: true
  imports: [ CommonModule ],
  templateUrl: './slide-main.component.html',
  styleUrl: './slide-main.component.css',
})
export class SlideMainComponent {

  /**
   * O array de blocos de conteúdo (`ContentBlock`) que
   * compõem o corpo deste slide.
   *
   * É uma dependência obrigatória (`required: true`), fornecida
   * pelo componente pai (ex: `App`).
   */
  @Input({ required: true}) blocks!: ContentBlock[];
}