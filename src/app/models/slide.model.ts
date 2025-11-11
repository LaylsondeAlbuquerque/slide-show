/* ******************************************************
 * ARQUIVO: src/app/models/slide.model.ts
 * (O MOLDE)
 * ****************************************************** */

/**
 * Define a estrutura principal de um único slide de apresentação.
 * É o "molde" para cada passo da aula.
 */
export interface ISlide {
  /** O número de ordem do slide, usado para navegação e referência. */
  slideNumber: number;

  /** O título principal do slide, exibido no cabeçalho. */
  title: string;

  /** O subtítulo opcional do slide, exibido abaixo do título principal. */
  subtitle?: string;

  /**
   * Define a hierarquia e o estilo do título do slide.
   * - `1`: Título de Seção Principal (Ex: "Os 3 Pilares")
   * - `2`: Sub-tópico (Ex: "Pilar 1: LUZ É TUDO")
   * - `3`: Dica ou Detalhe (Ex: "Dica de Ouro: Golden Hour")
   */
  level: 1 | 2 | 3;

  /** Um array de blocos de conteúdo que compõem o corpo do slide. */
  blocks: ContentBlock[];
}

/**
 * Tipo de união (union type) que representa qualquer um dos blocos de conteúdo possíveis.
 * O Angular usa a propriedade 'type' como um "discriminador" para saber qual
 * tipo de bloco renderizar no template.
 */
export type ContentBlock =
  | ITextBlock
  | IListBlock
  | IComplexListBlock
  | IQuoteBlock
  | ITableBlock;

/**
 * Bloco de conteúdo para um parágrafo de texto simples.
 * @example
 * { type: 'text', content: 'Isso é um parágrafo.' }
 */
export interface ITextBlock {
  /** Identificador do tipo de bloco. */
  type: 'text';
  /** O conteúdo de texto do parágrafo. */
  content: string;
}

/**
 * Bloco de conteúdo para listas simples (ordenadas ou não).
 * @example
 * { type: 'list', ordered: false, items: ['Item 1', 'Item 2'] }
 */
export interface IListBlock {
  /** Identificador do tipo de bloco. */
  type: 'list';
  /** Se `true`, a lista é ordenada (`<ol>`). Se `false`, é não ordenada (`<ul>`). */
  ordered: boolean;
  /** Um array de strings, onde cada string é um item da lista. */
  items: string[];
}

/**
 * Bloco de conteúdo para listas de definição (ou listas com título e descrição).
 * Renderizado como `<dl>` (Definition List).
 * @example
 * {
 * type: 'complexList',
 * items: [
 * { title: 'Item 1', description: 'Descrição do Item 1' }
 * ]
 * }
 */
export interface IComplexListBlock {
  /** Identificador do tipo de bloco. */
  type: 'complexList';
  /** Um array de itens, onde cada item possui um título (`<dt>`) e uma descrição (`<dd>`). */
  items: {
    title: string;
    description: string;
  }[];
}

/**
 * Bloco de conteúdo para uma citação (blockquote).
 * @example
 * { type: 'quote', text: 'Uma citação inspiradora.' }
 */
export interface IQuoteBlock {
  /** Identificador do tipo de bloco. */
  type: 'quote';
  /** O texto da citação. */
  text: string;
}

/**
 * Bloco de conteúdo para uma tabela de dados.
 * @example
 * {
 * type: 'table',
 * headers: ['Cabeçalho 1', 'Cabeçalho 2'],
 * rows: [
 * ['Dado 1A', 'Dado 1B'],
 * ['Dado 2A', 'Dado 2B']
 * ]
 * }
 */
export interface ITableBlock {
  /** Identificador do tipo de bloco. */
  type: 'table';
  /** Um array de strings para o cabeçalho da tabela (células `<th>`). */
  headers: string[];
  /** Um array de arrays de strings, onde cada array interno representa uma linha (`<tr>`) da tabela. */
  rows: string[][];
}