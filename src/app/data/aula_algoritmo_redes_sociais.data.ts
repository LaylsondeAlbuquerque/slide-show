import { ISlide } from "../models/slide.model"; // Importando o molde que você definiu

/**
 * Dados da apresentação: O "Combo" do Celular e a Prateleira Viciada
 */
export const AULA_ALGORITMO_REDES_SOCIAIS: ISlide[] = [
  // ---
  // SLIDE 1: Título
  // ---
  {
    slideNumber: 1,
    title: 'O "Combo" Secreto do seu Celular',
    subtitle: '...e quem decide o que você vai ver hoje?',
    level: 1,
    blocks: [],
  },
  // ---
  // SLIDE 2: O Gancho (Pergunta Polêmica)
  // ---
  {
    slideNumber: 2,
    title: 'A Pergunta de Milhões...',
    subtitle: 'Vamos começar com a polêmica:',
    level: 2,
    blocks: [
      {
        type: 'quote',
        text: 'O celular escuta o que a gente fala?',
      },
    ],
  },
  // ---
  // SLIDE 3: O Gancho (Pergunta Real)
  // ---
  {
    slideNumber: 3,
    title: 'Mas... e se ele nem PRECISAR?',
    level: 2,
    blocks: [
      {
        type: 'text',
        content:
          'Como o TikTok (ou Insta) sabe EXATAMENTE o vídeo que você quer ver, na hora que você abre?',
      },
      {
        type: 'text',
        content: 'A resposta tem nome: o Algoritmo.',
      },
    ],
  },
  // ---
  // SLIDE 4: Conceito 1 (Título da Analogia)
  // ---
  {
    slideNumber: 4,
    title: 'O Algoritmo é o "Tio da Lanchonete"',
    subtitle: 'Pense no seu app (TikTok, Insta) como a Lanchonete do bairro.',
    level: 1,
    blocks: [
      {
        type: 'text',
        content:
          'E o algoritmo?',
      },{
        type: 'text',
        content:
          'É o Dono da lanchonete, que fica de olho em tudo.',
      },
    ],
  },
  // ---
  // SLIDE 5: Conceito 1 (O Trabalho do Algoritmo)
  // ---
  {
    slideNumber: 5,
    title: 'Qual o trabalho dele?',
    level: 2,
    blocks: [
      {
        type: 'text',
        content:
          'O trabalho do "Tio" (algoritmo) é fazer você ficar o máximo de tempo possível na lanchonete (no app) e sair satisfeito.',
      },
      {
        type: 'quote',
        text: 'Por que? Para você VOLTAR AMANHÃ e "comprar" mais.',
      },
    ],
  },
  // ---
  // SLIDE 6: Conceito 1 (Como ele "espiona")
  // ---
  {
    slideNumber: 6,
    title: 'Como o "Tio" sabe o que você gosta?',
    level: 2,
    blocks: [
      {
        type: 'text',
        content: 'Ele te observa no balcão. Ele anota TUDO o que você "consome":',
      },
      {
        type: 'complexList',
        items: [
          {
            title: 'Você COMPROU uma coxinha?',
            description: '(Equivale a dar LIKE num vídeo de futebol)',
          },
          {
            title: 'Você COMEU o pastel todo?',
            description: '(Equivale a ver um vídeo de dança ATÉ O FINAL)',
          },
          {
            title: 'Você OLHOU o bolo, mas não levou?',
            description: '(Equivale a passar RÁPIDO por um vídeo de receita)',
          },
          {
            title: 'Você LEVOU um Guaraná pra dividir?',
            description: '(Equivale a COMPARTILHAR um vídeo de comédia)',
          },
        ],
      },
    ],
  },
  // ---
  // SLIDE 7: Conceito 2 (Definição da Bolha)
  // ---
  {
    slideNumber: 7,
    title: 'A "Bolha" é a sua Prateleira Pessoal',
    subtitle: 'O "Tio" da lanchonete quer te agradar tanto que...',
    level: 1,
    blocks: [
      {
        type: 'text',
        content:
          'Ele cria uma prateleira especial, bem na sua frente, só com o que você já gosta: pastel, coxinha e Guaraná.',
      },
      {
        type: 'quote',
        text: 'Essa prateleira é a BOLHA SOCIAL.',
      },
    ],
  },
  // ---
  // SLIDE 8: Conceito 2 (O Problema da Bolha)
  // ---
  {
    slideNumber: 8,
    title: 'Parece perfeito... mas qual o problema?',
    level: 2,
    blocks: [
      {
        type: 'text',
        content: 'Se você só olhar para a sua prateleira...',
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Você vai lembrar que na lanchonete também vende suco de laranja?',
          'Você vai ver que chegou um sanduíche novo, diferente?',
          'O que acontece se você só comer pastel e coxinha todo dia? (Enjoa!)',
        ],
      },
    ],
  },
  // ---
  // SLIDE 9: Conceito 2 (Conclusão)
  // ---
  {
    slideNumber: 9,
    title: 'O que é a Bolha Social?',
    level: 3,
    blocks: [
      {
        type: 'quote',
        text: 'A bolha é isso: o algoritmo te mostra tanto o que você gosta, que você ESQUECE que existem pessoas diferentes de você.',
      },
      {
        type: 'text',
        content:
          'Você fica "viciado" na sua bolha e acha que todo mundo só gosta daquilo, ou que você sempre está certo. Você começa a achar "estranho" quem gosta de algo diferente de você.',
      },
    ],
  },
  // ---
  // SLIDE 10: Fechamento (Pergunta)
  // ---
  {
    slideNumber: 10,
    title: 'E agora? Quem Manda no Cardápio?',
    level: 1,
    blocks: [
      {
        type: 'quote',
        text: 'Se a "bolha" é a sua prateleira, quem tem o poder de pedir coisa nova? VOCÊS!',
      },
    ],
  },
  // ---
  // SLIDE 11: Fechamento (A Dica Final)
  // ---
  {
    slideNumber: 11,
    title: 'A Dica Final: Seja mais esperto que o algoritmo',
    level: 2,
    blocks: [
      {
        type: 'text',
        content:
          'Se você quer "furar a bolha", você precisa MOSTRAR pro Dono da Lanchonete que você quer provar coisa nova:',
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Procure de propósito um assunto DIFERENTE hoje.',
          'Siga uma pessoa que fala de coisa que você não entende.',
          'Dê "like" num vídeo de um assunto novo.',
        ],
      },
      {
        type: 'quote',
        text: 'Não deixe o Dono da Lanchonete escolher o que você come. Seja você o dono do seu cardápio.',
      },
    ],
  },
  // ---
  // SLIDE 12: Fim
  // ---
  {
    slideNumber: 12,
    title: 'Valeu, galera!',
    subtitle: 'Perguntas?',
    level: 1,
    blocks: [],
  },
];