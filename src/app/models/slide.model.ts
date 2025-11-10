/* ******************************************************
 * ARQUIVO: src/app/models/slide.model.ts
 * (O MOLDE)
 * ****************************************************** */

// Interface principal para um slide (com a nova propriedade 'level')
export interface ISlide {
  slideNumber: number;
  title: string;
  subtitle?: string;
  
  /**
   * Define a hierarquia do slide, como você sugeriu.
   * level: 1 (H1) -> Título de Seção Principal (ex: "Os 3 Pilares")
   * level: 2 (H2) -> Sub-tópico (ex: "Pilar 1: LUZ É TUDO")
   * level: 3 (H3) -> Dica ou Detalhe (ex: "Dica de Ouro: Golden Hour")
   */
  level: 1 | 2 | 3; 
  
  blocks: ContentBlock[]; // O conteúdo (parágrafos, listas, etc.)
}

// O "Apelido de Grupo"
export type ContentBlock =
  | ITextBlock
  | IListBlock
  | IComplexListBlock
  | IQuoteBlock
  | ITableBlock;

// Tipo 1: Bloco de texto simples
export interface ITextBlock {
  type: 'text';
  content: string;
}

// Tipo 2: Bloco de lista
export interface IListBlock {
  type: 'list';
  ordered: boolean;
  items: string[];
}

// Tipo 3: Bloco de lista complexa
export interface IComplexListBlock {
  type: 'complexList';
  items: {
    title: string;
    description: string;
  }[];
}

// Tipo 4: Bloco de citação
export interface IQuoteBlock {
  type: 'quote';
  text: string;
}

// Tipo 5: Bloco de tabela
export interface ITableBlock {
  type: 'table';
  headers: string[];
  rows: string[][];
}