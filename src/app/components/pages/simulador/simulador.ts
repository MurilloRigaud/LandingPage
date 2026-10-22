import { Component, ElementRef, OnDestroy, ViewChild, effect, signal } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { MatButtonToggleModule } from '@angular/material/button-toggle';

type Servico = 'pelicula' | 'plotagem' | null;

type TipoVeiculo = 'hatch' | 'sedan' | 'suv' | 'pickup';

interface Veiculo {
  codigo: TipoVeiculo;

  nome: string;

  imagemCarroceria: string;

  mascaraVidro: string;

  /*
    Proporção visual da imagem.

    A imagem-base e sua máscara devem,
    preferencialmente, possuir exatamente
    as mesmas dimensões.
  */
  proporcao: string;

  /*
    Enquanto ainda não tivermos as imagens
    do veículo, deixe false.

    Depois de adicionar a imagem e a máscara
    em /public, altere para true.
  */
  disponivel: boolean;
}

@Component({
  selector: 'app-home',

  standalone: true,

  imports: [FormsModule, MatButtonToggleModule],

  templateUrl: './simulador.html',

  styleUrl: './simulador.scss',
})
export class Simulador implements OnDestroy {
  @ViewChild('canvasCarroceria')
  canvasCarroceriaRef?: ElementRef<HTMLCanvasElement>;

  // ==========================================
  // ESCOLHAS DO USUÁRIO
  // ==========================================

  servicoSelecionado = signal<Servico>(null);

  /*
    Começamos no Hatch porque é o veículo
    que já existe atualmente.
  */
  veiculoSelecionado = signal<TipoVeiculo>('hatch');

  corCarro = signal('#ffffff');

  peliculaSelecionada = signal<string | null>(null);

  // ==========================================
  // VEÍCULOS
  // ==========================================

  readonly veiculos: Veiculo[] = [
    /* ========================================
       HATCH

       Este é o veículo que já existe.
    ======================================== */

    {
      codigo: 'hatch',

      nome: 'Hatch',

      imagemCarroceria: 'carro-plotagem-verde.png',

      mascaraVidro: 'carro-vidro-mask.png',

      proporcao: '1689 / 931',

      disponivel: true,
    },

    /* ========================================
       SEDAN

       FUTURAMENTE:

       1. Coloque a imagem-base dentro de:

          public/sedan-plotagem-verde.png

       2. Coloque a máscara dos vidros:

          public/sedan-vidro-mask.png

       3. Altere:

          disponivel: false

          para:

          disponivel: true

       IMPORTANTE:
       A imagem-base e a máscara precisam
       possuir exatamente o mesmo tamanho
       e enquadramento.
    ======================================== */

    {
      codigo: 'sedan',

      nome: 'Sedan',

      imagemCarroceria: 'sedan-plotagem-verde.png',

      mascaraVidro: 'sedan-vidro-mask.png',

      /*
        ALTERAR se a imagem do Sedan tiver
        outra proporção.
      */
      proporcao: '1689 / 949',

      disponivel: true,
    },

    /* ========================================
       SUV

       FUTURAMENTE:

       Imagem-base:
       public/suv-plotagem-verde.png

       Máscara:
       public/suv-vidro-mask.png

       Depois:

       disponivel: true
    ======================================== */

    {
      codigo: 'suv',

      nome: 'SUV',

      imagemCarroceria: 'suv-plotagem-verde.png',

      mascaraVidro: 'suv-vidro-mask.png',

      /*
        ALTERAR caso necessário.
      */
      proporcao: '1685 / 949',

      disponivel: true,
    },

    /* ========================================
       PICKUP

       FUTURAMENTE:

       Imagem-base:
       public/pickup-plotagem-verde.png

       Máscara:
       public/pickup-vidro-mask.png

       Depois:

       disponivel: true
    ======================================== */

    {
      codigo: 'pickup',

      nome: 'Pickup',

      imagemCarroceria: 'pickup-plotagem-verde.png',

      mascaraVidro: 'pickup-vidro-mask.png',

      /*
        ALTERAR caso necessário.
      */
      proporcao: '1689 / 931',

      disponivel: true,
    },
  ];

  // ==========================================
  // VEÍCULO ATUAL
  // ==========================================

  get veiculoAtual(): Veiculo {
    return (
      this.veiculos.find((veiculo) => veiculo.codigo === this.veiculoSelecionado()) ??
      this.veiculos[0]
    );
  }

  /*
    Retorna a URL correta da máscara tanto
    no localhost quanto no GitHub Pages.
  */
  get imagemMascaraVidroAtual(): string {
    return this.assetUrl(this.veiculoAtual.mascaraVidro);
  }

  // ==========================================
  // ESTADO INTERNO DO CANVAS
  // ==========================================

  private imagemBase: HTMLImageElement | null = null;

  /*
    Guarda qual imagem está atualmente
    carregada.

    Isso é importante porque agora podemos
    trocar entre vários carros.
  */
  private imagemBaseSrc: string | null = null;

  private readonly REFERENCIA_LUMINOSIDADE = 0.68;

  private readonly FATOR_MINIMO = 0.3;

  private readonly FATOR_MAXIMO = 1.6;

  // ==========================================
  // CONSTRUTOR
  // ==========================================

  constructor() {
    /*
      Sempre que:

      - o serviço mudar;
      - a cor mudar;
      - o veículo mudar;

      redesenhamos o veículo.
    */

    effect(() => {
      const servico = this.servicoSelecionado();

      const cor = this.corCarro();

      const tipoVeiculo = this.veiculoSelecionado();

      const veiculo = this.veiculos.find((item) => item.codigo === tipoVeiculo);

      if (servico && veiculo && veiculo.disponivel) {
        this.carregarEColorirCarroceria(veiculo.imagemCarroceria, cor);
      }
    });
  }

  // ==========================================
  // URL DOS ASSETS
  // ==========================================

  assetUrl(arquivo: string): string {
    /*
      Essa estratégia funciona tanto:

      localhost:4200

      quanto:

      github.io/LandingPage/
    */

    return new URL(arquivo, document.baseURI).href;
  }

  // ==========================================
  // SELECIONAR SERVIÇO
  // ==========================================

  selecionarServico(servico: Servico): void {
    this.servicoSelecionado.set(servico);

    this.peliculaSelecionada.set(null);
  }

  // ==========================================
  // SELECIONAR VEÍCULO
  // ==========================================

  selecionarVeiculo(tipo: TipoVeiculo): void {
    const veiculo = this.veiculos.find((item) => item.codigo === tipo);

    /*
      Enquanto não tivermos os arquivos
      do Sedan, SUV ou Pickup,
      não permitimos selecionar.
    */

    if (!veiculo || !veiculo.disponivel) {
      return;
    }

    if (this.veiculoSelecionado() === tipo) {
      return;
    }

    /*
      Limpa a imagem atual para que
      o canvas carregue a carroceria
      do novo veículo.
    */

    this.imagemBase = null;

    this.imagemBaseSrc = null;

    this.veiculoSelecionado.set(tipo);
  }

  // ==========================================
  // SELECIONAR PELÍCULA
  // ==========================================

  selecionarPelicula(tipo: string): void {
    this.peliculaSelecionada.set(tipo);
  }

  // ==========================================
  // ALTERAR COR
  // ==========================================

  alterarCor(event: Event): void {
    const input = event.target as HTMLInputElement;

    this.corCarro.set(input.value);
  }

  // ==========================================
  // OPÇÕES DE PELÍCULA
  // ==========================================

  readonly peliculas = [
    {
      codigo: 'AG5',

      nome: 'G5',

      cor: '#111111',

      opacidade: 0.95,
    },

    {
      codigo: 'AG20',

      nome: 'G20',

      cor: '#333333',

      opacidade: 0.85,
    },

    {
      codigo: 'AG30',

      nome: 'G30',

      cor: '#777777',

      opacidade: 0.65,
    },

    {
      codigo: 'AG50',

      nome: 'G50',

      cor: '#bbbbbb',

      opacidade: 0.35,
    },
  ];

  get peliculaAtual() {
    return this.peliculas.find((pelicula) => pelicula.codigo === this.peliculaSelecionada());
  }

  // ==========================================
  // CARREGAR E COLORIR CARROCERIA
  // ==========================================

  private carregarEColorirCarroceria(imagemSrc: string, corHex: string): void {
    /*
      Se a imagem do veículo selecionado
      já está carregada, não precisamos
      carregar novamente.
    */

    if (this.imagemBase && this.imagemBaseSrc === imagemSrc) {
      this.colorirCarroceria(corHex);

      return;
    }

    this.carregarImagem(imagemSrc, () => {
      this.colorirCarroceria(corHex);
    });
  }

  // ==========================================
  // CARREGAMENTO DA IMAGEM
  // ==========================================

  private carregarImagem(src: string, aoCarregar: () => void): void {
    const img = new Image();

    img.onload = () => {
      this.imagemBase = img;

      this.imagemBaseSrc = src;

      aoCarregar();
    };

    img.onerror = () => {
      console.error('Não consegui carregar a imagem da carroceria:', src);
    };

    /*
      Usa assetUrl para funcionar no
      GitHub Pages.
    */

    img.src = this.assetUrl(src);
  }

  // ==========================================
  // COLORAÇÃO DA CARROCERIA
  // ==========================================

  private colorirCarroceria(corHex: string, tentativas = 0): void {
    const canvas = this.canvasCarroceriaRef?.nativeElement;

    if (!canvas) {
      if (tentativas < 10) {
        requestAnimationFrame(() => this.colorirCarroceria(corHex, tentativas + 1));
      } else {
        console.error('Canvas #canvasCarroceria nunca apareceu no HTML.');
      }

      return;
    }

    if (!this.imagemBase) {
      return;
    }

    const largura = this.imagemBase.naturalWidth;

    const altura = this.imagemBase.naturalHeight;

    canvas.width = largura;

    canvas.height = altura;

    const contexto = canvas.getContext('2d');

    if (!contexto) {
      return;
    }

    const dadosBase = this.lerPixels(this.imagemBase, largura, altura);

    const corAlvo = this.converterHexParaRGB(corHex);

    const pixels = dadosBase.data;

    const pixelsSaida = new Uint8ClampedArray(pixels.length);

    for (let i = 0; i < pixels.length; i += 4) {
      const r = pixels[i];

      const g = pixels[i + 1];

      const b = pixels[i + 2];

      const a = pixels[i + 3];

      const pertence = this.calcularMascaraVerde(r, g, b);

      if (pertence > 0) {
        const fator = this.calcularFatorLuminosidade(r, g, b);

        const rTingido = this.clampCanal(corAlvo.r * fator);

        const gTingido = this.clampCanal(corAlvo.g * fator);

        const bTingido = this.clampCanal(corAlvo.b * fator);

        pixelsSaida[i] = Math.round(r * (1 - pertence) + rTingido * pertence);

        pixelsSaida[i + 1] = Math.round(g * (1 - pertence) + gTingido * pertence);

        pixelsSaida[i + 2] = Math.round(b * (1 - pertence) + bTingido * pertence);

        pixelsSaida[i + 3] = a;
      } else {
        pixelsSaida[i] = r;

        pixelsSaida[i + 1] = g;

        pixelsSaida[i + 2] = b;

        pixelsSaida[i + 3] = a;
      }
    }

    contexto.putImageData(new ImageData(pixelsSaida, largura, altura), 0, 0);
  }

  // ==========================================
  // DETECTA O VERDE
  // ==========================================

  private calcularMascaraVerde(r: number, g: number, b: number): number {
    if (r + g + b < 30) {
      return 0;
    }

    const dominanciaVerde = g - Math.max(r, b);

    const LIMIAR_TOTAL = 40;

    const LIMIAR_ZERO = -10;

    if (dominanciaVerde >= LIMIAR_TOTAL) {
      return 1;
    }

    if (dominanciaVerde <= LIMIAR_ZERO) {
      return 0;
    }

    return (dominanciaVerde - LIMIAR_ZERO) / (LIMIAR_TOTAL - LIMIAR_ZERO);
  }

  // ==========================================
  // LEITURA DOS PIXELS
  // ==========================================

  private lerPixels(imagem: HTMLImageElement, largura: number, altura: number): ImageData {
    const canvasTemp = document.createElement('canvas');

    canvasTemp.width = largura;

    canvasTemp.height = altura;

    const contexto = canvasTemp.getContext('2d')!;

    contexto.drawImage(imagem, 0, 0, largura, altura);

    return contexto.getImageData(0, 0, largura, altura);
  }

  // ==========================================
  // LUMINOSIDADE
  // ==========================================

  private calcularFatorLuminosidade(r: number, g: number, b: number): number {
    const luminanciaRelativa = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    let fator = luminanciaRelativa / this.REFERENCIA_LUMINOSIDADE;

    if (fator < this.FATOR_MINIMO) {
      fator = this.FATOR_MINIMO;
    }

    if (fator > this.FATOR_MAXIMO) {
      fator = this.FATOR_MAXIMO;
    }

    return fator;
  }

  // ==========================================
  // HEX -> RGB
  // ==========================================

  private converterHexParaRGB(hex: string): {
    r: number;
    g: number;
    b: number;
  } {
    let valorHex = hex.trim().replace('#', '');

    if (valorHex.length === 3) {
      valorHex = valorHex
        .split('')
        .map((caractere) => caractere + caractere)
        .join('');
    }

    return {
      r: parseInt(valorHex.substring(0, 2), 16),

      g: parseInt(valorHex.substring(2, 4), 16),

      b: parseInt(valorHex.substring(4, 6), 16),
    };
  }

  // ==========================================
  // LIMITAR RGB
  // ==========================================

  private clampCanal(valor: number): number {
    if (valor < 0) {
      return 0;
    }

    if (valor > 255) {
      return 255;
    }

    return Math.round(valor);
  }

  // ==========================================
  // DESTROY
  // ==========================================

  ngOnDestroy(): void {
    /*
      Reservado para funcionalidades futuras.
    */
  }
}
