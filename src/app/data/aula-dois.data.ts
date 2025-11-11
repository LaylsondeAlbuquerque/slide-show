/**
 * @fileoverview
 * Arquivo de dados estáticos (mock data) para o conteúdo da "Aula 2".
 *
 * Este arquivo exporta a constante AULA_DOIS, que é um array de
 * objetos ISlide, seguindo o contrato definido em `slide.model.ts`.
 */

import { ISlide } from '../models/slide.model';

/**
 * Constante contendo todos os slides da "Aula 2: A Mágica da Câmera".
 *
 * Cada objeto no array representa um slide individual na apresentação.
 */
export const AULA_DOIS: ISlide[] = [
  // ---- Seção 1: Início ----
  {
    slideNumber: 1,
    level: 1, // H1
    title: 'A Mágica da Câmera',
    subtitle: 'Seu Olho no Celular',
    blocks: [
      {
        type: 'text',
        content: 'Aula 2 - Criação Audiovisual com o celular',
      },
    ],
  },

  // ---- Seção 2: Quebra-Gelo ----
  {
    slideNumber: 2,
    level: 1, // H1
    title: 'Quebra-Gelo',
    subtitle: 'O que faz um vídeo parecer...',
    blocks: [
      {
        type: 'table',
        headers: ['AMADOR?', '"PRO"?'],
        rows: [
          ['Imagem tremida', 'Imagem limpa e estável'],
          ['Som ruim, com vento', 'Som claro e focado'],
          ['Muito escuro ou "estourado"', 'Luz bonita e intencional'],
        ],
      },
    ],
  },
  {
    slideNumber: 3,
    level: 2, // H2 (Sub-slide do Quebra-Gelo)
    title: 'A Grande Verdade',
    blocks: [
      {
        type: 'text',
        content: 'A diferença não é só a câmera. É como você usa a câmera.',
      },
    ],
  },

  // ---- Seção 3: Pilares ----
  {
    slideNumber: 4,
    level: 1, // H1
    title: 'Os 3 Pilares da Câmera',
    subtitle: 'Os 3 ingredientes para um vídeo incrível.',
    blocks: [], // Slide de abertura da seção, sem blocos de conteúdo
  },
  {
    slideNumber: 5,
    level: 2, // H2
    title: 'Pilar 1: LUZ É TUDO',
    blocks: [
      {
        type: 'text',
        content: 'A câmera do celular ama luz. Mas cuidado...',
      },
      {
        type: 'complexList',
        items: [
          {
            title: 'O INIMIGO: Filmar contra a luz',
            description:
              'Filmar alguém na frente de uma janela ou do sol. A pessoa vira uma silhueta escura.',
          },
          {
            title: 'O AMIGO: Filmar a favor da luz',
            description:
              'A luz (janela, sol) bate no rosto da pessoa. O resultado é um rosto bem iluminado.',
          },
        ],
      },
    ],
  },
  {
    slideNumber: 6,
    level: 3, // H3
    title: 'Dica de Ouro: Luz do Fim de Tarde',
    blocks: [
      {
        type: 'text',
        content:
          'O sol do fim de tarde (depois das 15h) é suave e deixa tudo mais bonito. Evite o sol forte do meio-dia, que cria sombras feias.',
      },
    ],
  },
  {
    slideNumber: 7,
    level: 2, // H2
    title: 'Pilar 2: ÂNGULOS & ENQUADRAMENTO',
    blocks: [
      {
        type: 'text',
        content: 'O ângulo da câmera muda o sentimento da cena.',
      },
      {
        type: 'complexList',
        items: [
          {
            title: 'De baixo para cima:',
            description: 'Faz a pessoa parecer GRANDE, poderosa, heroica.',
          },
          {
            title: 'De cima para baixo:',
            description:
              'Faz a pessoa parecer PEQUENA, frágil, ou mostra o que ela está vendo.',
          },
          {
            title: 'Nível dos Olhos:',
            description: 'Cria CONEXÃO, parece uma conversa.',
          },
        ],
      },
    ],
  },
  {
    slideNumber: 8,
    level: 3, // H3
    title: 'Dica de Ouro: A "GRADE" (Regra dos Terços)',
    blocks: [
      {
        type: 'text',
        content:
          'Vá em `Configurações > Câmera` e ative a "Grade". O segredo é NÃO centralizar tudo. Coloque as coisas importantes (olhos, pessoas) nas LINHAS ou nos CRUZAMENTOS.',
      },
    ],
  },
  {
    slideNumber: 9,
    level: 2, // H2
    title: 'Pilar 3: SOM & ESTABILIDADE',
    blocks: [
      {
        type: 'quote',
        text: 'Um vídeo bonito com som ruim... é um vídeo ruim.',
      },
      {
        type: 'complexList',
        items: [
          {
            title: 'Estabilidade',
            description:
              'Ninguém gosta de vídeo tremido. Use o "Tripé Humano": segure com as duas mãos e apoie os cotovelos no corpo ou encoste-se numa parede.',
          },
          {
            title: 'Som',
            description:
              'O som é METADE do seu vídeo. O microfone da câmera capta muito barulho de ambiente (vento, carros).',
          },
        ],
      },
    ],
  },
  {
    slideNumber: 10,
    level: 3, // H3
    title: 'Dica de Ouro: O Truque do Fone de Ouvido',
    blocks: [
      {
        type: 'text',
        content:
          'O microfone do seu fone de ouvido é 1000x melhor! Conecte o fone e use o microfone dele perto da sua boca (ou da pessoa falando). A voz fica clara e sem ruído.',
      },
    ],
  },

  // ---- Seção 4: Mão na Massa ----
  {
    slideNumber: 11,
    level: 1, // H1
    title: 'Mão na Massa!',
    subtitle: 'Hora de praticar.',
    blocks: [], // Slide de abertura da seção
  },
  {
    slideNumber: 12,
    level: 2, // H2
    title: '1. Conhecendo sua Câmera',
    subtitle: 'Atividade Rápida',
    blocks: [
      {
        type: 'list',
        ordered: false,
        items: [
          '"Ache a Grade": Todo mundo vai em `Configurações > Câmera` e ativa a "Grade".',
          '"Trave o Foco": Toque e SEGURE o dedo na tela (no rosto de um colega) até aparecer "Bloqueio AE/AF". Isso trava a luz e o foco!',
          '"O Perigo do Zoom": NÃO use o zoom de "pinça". Ele só piora a imagem. É melhor ANDAR para perto do que dar zoom.',
        ],
      },
    ],
  },
  {
    slideNumber: 13,
    level: 2, // H2
    title: '2. Caça ao Tesouro Visual',
    subtitle: 'Desafio: Checklist do Diretor',
    blocks: [
      {
        type: 'text',
        content:
          'Enquanto gravam, provem que aprenderam os 3 pilares gravando estes clipes extras:',
      },
      {
        type: 'list',
        ordered: false,
        items: [
          '[ ] LUZ: 1 cena CONTRA a luz (errado) e 1 A FAVOR (certo).',
          '[ ] ÂNGULO: 1 cena de baixo para cima (herói).',
          '[ ] ENQUADRAMENTO: 1 cena usando a GRADE (Regra dos Terços).',
          '[ ] SOM: 1 cena de vocês falando, usando o microfone do FONE.',
          '[ ] ESTABILIDADE: 1 cena parado (com "tripé humano").',
        ],
      },
    ],
  },

  // ---- Seção 5: Próximos Passos ----
  {
    slideNumber: 14,
    level: 1, // H1
    title: 'O que aprendemos hoje?',
    blocks: [
      {
        type: 'list',
        ordered: false,
        items: [
          '✅ Procurar a LUZ BOA (a favor, não contra).',
          '✅ Usar a GRADE e pensar nos ÂNGULOS.',
          '✅ Usar o "TRIPÉ HUMANO" para estabilizar.',
          '✅ Usar o microfone do FONE para um som limpo.',
        ],
      },
    ],
  },
  {
    slideNumber: 15,
    level: 2, // H2
    title: 'Próximos Passos!',
    subtitle: 'Vocês agora são oficialmente CINEGRAFISTAS!',
    blocks: [
      {
        type: 'text',
        content:
          'Na próxima aula, vamos ser os "Chefs de Cozinha": vamos aprender a CORTAR, juntar tudo, colocar MÚSICA e TEXTO para o nosso vídeo ficar pronto!',
      },
    ],
  },
];