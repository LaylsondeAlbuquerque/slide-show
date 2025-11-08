import { ISlide } from '../models/slide.model';

export const AULA_DOIS: ISlide[] = [
  // SLIDE 1
  {
    slideNumber: 1,
    title: 'Aula 2: A Mágica da Câmera',
    subtitle: 'Seu Olho no Celular',
    blocks: [
      {
        type: 'text',
        content: 'Curso: Criação Audiovisual para Adolescentes',
      },
    ],
  },
  // SLIDE 2
  {
    slideNumber: 2,
    title: 'Quebra-Gelo',
    subtitle: 'O que faz um vídeo parecer...',
    blocks: [
      {
        type: 'table',
        headers: ['AMADOR?', '"PRO"?'],
        rows: [
          ['Imagem tremida?', 'Imagem limpa?'],
          ['Som ruim, com vento?', 'Som claro?'],
          ['Muito escuro ou estourado?', 'Luz bonita?'],
        ],
      },
    ],
  },
  // SLIDE 3
  {
    slideNumber: 3,
    title: 'A Grande Verdade',
    blocks: [
      {
        type: 'text',
        content: 'A diferença NÃO é (só) a câmera.',
      },
      {
        type: 'text',
        content: 'É COMO você usa a câmera.',
      },
      {
        type: 'text',
        content:
          'Hoje vamos aprender os 3 segredos para videos com cara de "PRO".',
      },
    ],
  },
  // SLIDE 4
  {
    slideNumber: 4,
    title: 'Os 3 Pilares da Câmera',
    subtitle: 'Qualquer video incrível depende desses 3 ingredientes:',
    blocks: [
      {
        type: 'list',
        ordered: true,
        items: [
          'LUZ (O mais importante!)',
          'ÂNGULO (O que a câmera "sente")',
          'SOM (Metade do vídeo!)',
        ],
      },
    ],
  },
  // SLIDE 5
  {
    slideNumber: 5,
    title: 'Pilar 1: LUZ É TUDO',
    subtitle: 'A câmera do celular AMA luz. Mas cuidado...',
    blocks: [
      {
        type: 'complexList',
        items: [
          {
            title: 'O INIMIGO: Filmar CONTRA a luz',
            description:
              'O que é? Filmar alguém na frente de uma janela ou do sol. Resultado: A pessoa vira uma silhueta escura. A câmera não sabe o que focar.',
          },
          {
            title: 'O AMIGO: Filmar A FAVOR da luz',
            description:
              'O que é? A luz (janela, sol) bate no rosto da pessoa. Resultado: Rosto bem iluminado e imagem clara.',
          },
        ],
      },
    ],
  },
  // SLIDE 6
  {
    slideNumber: 6,
    title: 'Pilar 1: Dica de Ouro (Luz)',
    subtitle: 'A "Golden Hour" (Hora de Ouro)',
    blocks: [
      {
        type: 'text',
        content:
          'O sol do fim de tarde (depois das 15h) é suave, quente e deixa tudo mais bonito.',
      },
      {
        type: 'text',
        content:
          'Evite o sol forte do meio-dia (12h). Ele é "duro" e cria sombras feias debaixo do nariz e dos olhos.',
      },
    ],
  },
  // SLIDE 7
  {
    slideNumber: 7,
    title: 'Pilar 2: ÂNGULOS',
    subtitle: 'O ângulo da câmera muda o sentimento da cena.',
    blocks: [
      {
        type: 'complexList',
        items: [
          {
            title: 'De baixo para cima (Contra-Plongée):',
            description: 'Faz a pessoa parecer GRANDE, poderosa, heroica.',
          },
          {
            title: 'De cima para baixo (Plongée):',
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
  // SLIDE 8
  {
    slideNumber: 8,
    title: 'Pilar 2: Dica de Ouro (Enquadramento)',
    subtitle: 'A "GRADE" (Regra dos Terços)',
    blocks: [
      {
        type: 'text',
        content: 'Vá em Configurações > Câmera e ative a "Grade" (linhas de grade).',
      },
      {
        type: 'text',
        content: 'A Regra: NÃO centralize tudo.',
      },
      {
        type: 'text',
        content:
          'Como usar: Coloque as coisas importantes (olhos, pessoas, objetos) nas LINHAS ou nos CRUZAMENTOS.',
      },
      {
        type: 'text',
        content: 'Fica muito mais profissional!',
      },
    ],
  },
  // SLIDE 9
  {
    slideNumber: 9,
    title: 'Pilar 3: ESTABILIDADE',
    subtitle: 'Ninguém gosta de vídeo tremido.',
    blocks: [
      {
        type: 'text',
        content: 'Dica 1: Segure o celular com as DUAS mãos. Sempre!',
      },
      {
        type: 'complexList',
        items: [
          {
            title: 'Dica 2: Use o "Tripé Humano".',
            description:
              'Plante seus cotovelos na sua barriga ou quadril. Encoste-se em uma parede ou poste.',
          },
        ],
      },
      {
        type: 'text',
        content: 'Isso cria um apoio firme e a imagem fica estável.',
      },
    ],
  },
  // SLIDE 10
  {
    slideNumber: 10,
    title: 'Pilar 3: SOM',
    blocks: [
      {
        type: 'quote',
        text: '"Um vídeo bonito com som ruim... é um vídeo ruim."',
      },
      {
        type: 'text',
        content: 'O som é METADE do seu vídeo.',
      },
      {
        type: 'text',
        content:
          'A câmera do celular foi feita para captar o som de todo o ambiente (vento, carro, pessoas falando longe).',
      },
      {
        type: 'text',
        content: 'Nós NÃO queremos isso.',
      },
    ],
  },
];