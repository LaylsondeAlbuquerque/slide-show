/**
 * @fileoverview
 * Arquivo de dados estáticos (mock data) para o conteúdo da "Aula 1".
 *
 * Este arquivo exporta a constante AULA_UM, que é um array de
 * objetos ISlide, seguindo o contrato definido em `slide.model.ts`.
 */

import { ISlide } from '../models/slide.model';

/**
 * Constante contendo todos os slides da "Aula 1: A Semente da Ideia".
 *
 * Cada objeto no array representa um slide individual na apresentação.
 */
export const AULA_UM: ISlide[] = [
  // ---- Seção 1: Início (id="inicio") ----
  {
    slideNumber: 1,
    level: 1, // H1
    title: 'A Semente da Ideia',
    subtitle: 'Aula 1: O segredo para contar histórias incríveis.',
    blocks: [
      {
        type: 'text',
        content: 'Curso de Audiovisual com Celular',
      },
    ],
  },

  // ---- Seção 2: Conceito (id="conceito") ----
  {
    slideNumber: 2,
    level: 1, // H1
    title: 'O que é Storytelling?',
    blocks: [
      {
        type: 'text',
        content:
          'É a arte de contar uma boa história. Pense em um bom "causo" que um amigo contou. Ele te prendeu, certo? Na internet, é a mesma coisa, mas você tem apenas 3 segundos para fisgar a atenção de alguém.',
      },
    ],
  },

  {
    slideNumber: 3,
    level: 2, // H2
    title: 'Os três elementos essenciais do Storytelling',
    blocks: [
      {
        type: 'complexList',
        items: [
          {
            title: '1. O Personagem 👤',
            description:
              'Toda boa história é sobre alguém (ou algo). "Tu não sabe o que aconteceu com Fulano..."',
          },
          {
            title: '2. O Acontecimento ⚡️',
            description:
              'O que acontece com ele? Qual é o desafio ou a jornada? "...ele foi tentar fazer uma coisa..."',
          },
          {
            title: '3. A Virada 🤯',
            description:
              'O resultado! Pode ser engraçado, emocionante ou surpreendente. "...e no final deu tudo certo (ou errado)!"',
          },
        ],
      },
    ],
  },

  // ---- Seção 3: Estrutura (id="estrutura") ----
  {
    slideNumber: 4,
    level: 1, // H1
    title: 'A Estrutura Mágica de 3 Atos',
    blocks: [
      {
        type: 'text',
        content:
          'Todo filme, série e até vídeo do TikTok segue essa estrutura simples. É o famoso Começo, Meio e Fim.',
      },
    ],
  },
  {
    slideNumber: 5,
    level: 2, // H2 (Desdobramento da Aba "Ato 1")
    title: 'Ato 1: A Apresentação',
    subtitle: 'É aqui que você fisga a atenção. Mostramos quem é o personagem e onde ele está.',
    blocks: [
      {
        type: 'complexList',
        items: [
          {
            title: 'Exemplo (Ajudar o próximo):',
            description:
              'CENA: Uma jovem anda pela rua, mexendo no celular. À frente, uma senhora tropeça e deixa as sacolas de feira caírem no chão.',
          },
        ],
      },
    ],
  },
  {
    slideNumber: 6,
    level: 2, // H2 (Desdobramento da Aba "Ato 2")
    title: 'Ato 2: O Desafio',
    subtitle: 'É a ação acontecendo. É a tentativa, a dificuldade, o desenrolar da história.',
    blocks: [
      {
        type: 'complexList',
        items: [
          {
            title: 'Exemplo (Ajudar o próximo):',
            description:
              'CENA: A jovem vê a cena e para. Ela olha em volta, outras pessoas passam sem ajudar. A câmera foca no rosto dela, mostrando sua dúvida.',
          },
        ],
      },
    ],
  },
  {
    slideNumber: 7,
    level: 2, // H2 (Desdobramento da Aba "Ato 3")
    title: 'Ato 3: A Resolução',
    subtitle: 'O resultado final. Qual é a mensagem? É a grande virada ou a conclusão da jornada.',
    blocks: [
      {
        type: 'complexList',
        items: [
          {
            title: 'Exemplo (Ajudar o próximo):',
            description:
              'CENA: Ela decide guardar o celular, se aproxima e ajuda a senhora a juntar as frutas. A cena termina com as duas sorrindo uma para a outra.',
          },
        ],
      },
    ],
  },

  // ---- Seção 4: Roteiro (id="roteiro") ----
  {
    slideNumber: 8,
    level: 1, // H1
    title: 'Mão na Massa 1: O Roteiro de Bolso',
    subtitle:
      'Não precisa escrever um texto gigante. Um roteiro de bolso é uma lista de cenas no seu app de notas (Google Keep, Notas, etc.).',
    blocks: [
      {
        type: 'text',
        content: 'Ideia: A saga para acordar de manhã.',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'CENA 1: Close no despertador do celular tocando (07:00).',
          'CENA 2: Mão aparece e aperta "Soneca".',
          'CENA 3: Corte rápido. Despertador de novo (07:30).',
          'CENA 4: Rosto amassado no travesseiro, olho abre com dificuldade.',
          'CENA 5: Pessoa levanta da cama num pulo (em velocidade acelerada).',
          'CENA 6: Pessoa sai correndo já vestida, pegando uma maçã.',
        ],
      },
    ],
  },

  // ---- Seção 5: Storyboard (id="storyboard") ----
  {
    slideNumber: 9,
    level: 1, // H1
    title: 'Mão na Massa 2: O Storyboard Digital',
    subtitle:
      'É o mapa do tesouro do seu vídeo. É desenhar o seu roteiro. E NÃO precisa saber desenhar! Bonecos de palito no Canva ou no Google Keep funcionam perfeitamente.',
    blocks: [
      {
        type: 'complexList',
        items: [
          {
            title: '⏰',
            description: '1. Close no despertador',
          },
          {
            title: '🤚',
            description: '2. Mão aperta "soneca"',
          },
          {
            title: '😴',
            description: '4. Rosto amassado',
          },
          {
            title: '🏃💨',
            description: '6. Sai correndo',
          },
        ],
      },
      {
        type: 'text',
        content:
          'O Storyboard te ajuda a pensar: "A câmera vai estar perto ou longe? Vou filmar de cima ou de baixo?"',
      },
    ],
  },
];