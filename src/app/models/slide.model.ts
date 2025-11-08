// Interface principal para um slide
export interface ISlide {
  slideNumber: number;
  title: string;
  subtitle?: string;
  blocks: ContentBlock[]; // Os blocos de conteúdo
}

// Uma União Discriminada: Um ContentBlock pode ser qualquer um desses tipos
export type ContentBlock =
  | ITextBlock
  | IListBlock
  | IComplexListBlock
  | IQuoteBlock
  | ITableBlock;

// Tipo 1: Bloco de texto simples (parágrafo)
export interface ITextBlock {
  type: 'text';
  content: string;
}

// Tipo 2: Bloco de lista (numerada ou bullet points)
export interface IListBlock {
  type: 'list';
  ordered: boolean; // true para numerada, false para bullets
  items: string[];
}

// Tipo 3: Bloco de lista complexa (título + descrição)
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

// Tipo 5: Bloco de tabela (genérico)
export interface ITableBlock {
  type: 'table';
  headers: string[];
  rows: string[][]; // Um array de arrays de strings
}