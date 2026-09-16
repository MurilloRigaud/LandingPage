import { Plotagem } from "./plotagem/plotagem";

export const SERVICOS = {

  acessorios:{

    categoria: 'Tico Film',

    titulo: 'Acessórios',

    tituloDestaque: 'Automotivos',

    subtitulo:
      'Conforto, praticidade e segurança no seu dia a dia.',

    descricao:
      'Aqui você encontra os melhores acessórios automotivos para deixar seu carro ou moto ainda mais completo, funcional e seguro. Trabalhamos com marcas de qualidade e instalação profissional.',

    imagemHeader: '/ImagemMultimidia.png',

    destaques: [
      'Travas elétricas',
      'Câmeras de ré',
      'Sensores de estacionamento',
      'Centrais Multimídia',
      'E muito mais!'
    ],

    cardIntroducao: {
      titulo: 'PORQUE ESCOLHER?',
      subtitulo: 'Acessórios que fazem a diferença no seu dia a dia.'
    },

    opcoes: [
      {
        icone: 'beenhere',
        titulo: 'Mais segurança',
        descricao: 'Sistemas que ajudam a prevenir furtos e acidentes, protegendo você e seu veículo.'
      },
      {
        icone: 'settings',
        titulo: 'Mais praticidade',
        descricao: 'Facilite o seu dia a dia com tecnologia e funcionalidades modernas.'
      },
      {
        icone: 'star',
        titulo: 'Qualidade garantida',
        descricao: 'Trabalhamos com as melhores marcas do mercado e instalação especializada.'
      },
      {
        icone: 'headphones',
        titulo: 'Suporte e garantia',
        descricao: 'Você conta com nosso atendimento e garantia em todos os serviços.'
      }
    ],
    titulo1: 'NOSSOS ACESSÓRIOS EM AÇÃO',
    titulo2: 'Conheça alguns dos nossos serviços',

    itens: [
      {
        titulo: 'Trava Elétrica',
        descricao: 'Mais segurança e praticidade para o seu dia a dia',
        imagem: '/chave-de-carro.jpg'
      },
      {
        titulo: 'Câmera de ré',
        descricao: 'Facilita as manobras e evita imprevistos',
        imagem: '/camera-de-re.jpg'
      },
      {
        titulo: 'Farol de led',
        descricao: 'Ilumine o seu caminho com o máximo de segurança!',
        imagem: '/farol-de-led.jpg'
      },
      {
        titulo: 'Sensor de estacionamento',
        descricao: 'Mais segurança ao estacionar, com aviso sonoro e visual',
        imagem: '/sensor-de-estacionamento.jpg'
      }
    ]

  },


  peliculas:{

    categoria: 'Tico Film',

    titulo: 'Películas',

    tituloDestaque: 'Automotivas',

    subtitulo:
      'Proteção, conforto e estilo para o seu veiculo',

      descricao:
      'As peliculas automotivas são uma solução moderna que agregam mais segurança, conforto térmico e privacidade, além de valorizarem o visual do seu carro',

      destaques: [
      'Proteção conta raios solares',
      'Maior privacidade',
      'Redução de calor interno',
      'Conforto durante a condução',
      'Acabamento e estética'
    ],

    imagemHeader: '/AplicacaoPelicula.png',

    cardIntroducao: {
      titulo: 'POR QUE ESCOLHER?',
      subtitulo: 'Mais do que estética, é proteção.'
    },

    opcoes: [
      {
        icone: 'beenhere',
        titulo: 'Proteção Solar',
        descricao: 'Bloqueia até 99% dos raios UV, protegendo você e o interior do seu veiculo.'
      },
      {
        icone: 'sunny',
        titulo: 'Conforto Térmico',
        descricao: 'Mantém o ambiente mais fresco, mesmo nos dias mais quentes.'
      },
      {
        icone: 'visibility',
        titulo: 'Privacidade',
        descricao: 'Mais segurança e tranquilidade no seu dia a dia.'
      },
      {
        icone: 'diamond',
        titulo: 'Estilo e Valorização',
        descricao: 'Um visual moderno que destaca o seu veiculo e aumenta seu valor.'
      }
    ],
    titulo1: 'PELICULAS UTILIZADAS',
    titulo2: 'Conheça as Peliculas que utilizamos',

    itens: [
      {
        titulo: 'G5',
        descricao: 'Extremamente escura',
        imagem: '/PeliculaG5.jpg'
      },
      {
        titulo: 'G20',
        descricao: 'Escura, com bastante privacidade',
        imagem: '/PeliculaG20.jpg'
      },
      {
        titulo: 'G35',
        descricao: 'Equilíbrio entre visibilidade e privacidade',
        imagem: '/PeliculaG35.png'
      },
      {
        titulo: 'G50',
        descricao: 'Mais clara, mantendo proteção e conforto',
        imagem: '/PeliculaG50.png'
      }
    ]


  },

   rastreadores:{

    categoria: 'RASTREADORES VEICULARES',

    titulo: 'Segurança e tecnologia',

    tituloDestaque: 'para seu veículo',

    subtitulo:
      'Mais controle, mais tranquilidade, em todos os momentos',

      descricao:
      'Os rastreadores veiculares permitem que você acompanhe seu carro ou moto em tempo real, com tecnologia de ponta e alta precisão. Ideal para quem busca mais segurança e praticidade no dia a dia',

      destaques: [
      'Localização em tempo real',
      'Monitoramento 24h',
      'Maior segurança contra roubos e furtos',
      'Tecnologia de rastreamento avançada',
      'Instalação especializada'
    ],

    imagemHeader: '/Rastreadores.jpg',

    cardIntroducao: {
      titulo: 'POR QUE ESCOLHER?',
      subtitulo: 'Tecnologia que te coloca no controle.'
    },

    opcoes: [
      {
        icone: 'beenhere',
        titulo: 'Mais segurança',
        descricao: 'Evite roubos e recupere seu veiculo com mais agilidade.'
      },
      {
        icone: 'location_on',
        titulo: 'Monitoramento 24h',
        descricao: 'Acompanhe em tempo real, de onde estiver, pelo celular ou computador.'
      },
      {
        icone: 'save_clock',
        titulo: 'Praticidade',
        descricao: 'Tenha todas as informações na palma da sua mão de forma simples e rápida.'
      },
      {
        icone: 'headphones',
        titulo: 'Suporte Especializado',
        descricao: 'Nossa equipe está sempre disponpivel para te atender e tirar suas dúvidas.'
      }
    ],
    titulo1: 'NOSSOS RASTREADORES EM AÇÃO',
    titulo2: 'Tecnologia que te coloca no controle',

    itens: [
      {
        titulo: 'Localização em tempo real',
        descricao: 'Veja a posição do seu veiculo no mapa, a qualquer momento',
        imagem: '/CelularGps.jpg'
      },
      {
        titulo: 'Alerta de movimento',
        descricao: 'Receba notificações em casos de movimentações suspeitas',
        imagem: '/PessoaSuspeita.jpg'
      },
      {
        titulo: 'Para carros e motos',
        descricao: 'Proteção completa para todos os tipos de veiculos',
        imagem: '/Veiculos.png'
      }
    ]

 },

 plotagem:{


    categoria: 'Plotagem',

    titulo: 'Estilo e proteção',

    tituloDestaque: 'para seu veículo',

    subtitulo:
      'Mais controle, mais tranquilidade, em todos os momentos',

      descricao:
      'Os rastreadores veiculares permitem que você acompanhe seu carro ou moto em tempo real, com tecnologia de ponta e alta precisão. Ideal para quem busca mais segurança e praticidade no dia a dia',

      destaques: [
      'Localização em tempo real',
      'Monitoramento 24h',
      'Maior segurança contra roubos e furtos',
      'Tecnologia de rastreamento avançada',
      'Instalação especializada'
    ],

    imagemHeader: '/CarroPlotagem.jpg',

    cardIntroducao: {
      titulo: 'POR QUE ESCOLHER?',
      subtitulo: 'Tecnologia que te coloca no controle.'
    },

    opcoes: [
      {
        icone: 'beenhere',
        titulo: 'Mais segurança',
        descricao: 'Evite roubos e recupere seu veiculo com mais agilidade.'
      },
      {
        icone: 'location_on',
        titulo: 'Monitoramento 24h',
        descricao: 'Acompanhe em tempo real, de onde estiver, pelo celular ou computador.'
      },
      {
        icone: 'save_clock',
        titulo: 'Praticidade',
        descricao: 'Tenha todas as informações na palma da sua mão de forma simples e rápida.'
      },
      {
        icone: 'headphones',
        titulo: 'Suporte Especializado',
        descricao: 'Nossa equipe está sempre disponpivel para te atender e tirar suas dúvidas.'
      }
    ],
    titulo1: 'NOSSOS RASTREADORES EM AÇÃO',
    titulo2: 'Tecnologia que te coloca no controle',

    itens: [
      {
        titulo: 'Localização em tempo real',
        descricao: 'Veja a posição do seu veiculo no mapa, a qualquer momento',
        imagem: '/CelularGps.jpg'
      },
      {
        titulo: 'Alerta de movimento',
        descricao: 'Receba notificações em casos de movimentações suspeitas',
        imagem: '/PessoaSuspeita.jpg'
      },
      {
        titulo: 'Para carros e motos',
        descricao: 'Proteção completa para todos os tipos de veiculos',
        imagem: '/Veiculos.png'
      }
    ]

 },

 }
  

