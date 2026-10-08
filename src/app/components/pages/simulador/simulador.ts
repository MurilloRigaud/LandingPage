import { Component, OnDestroy, signal, effect, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

type Servico = 'pelicula' | 'plotagem' | null;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonToggleModule
  ],
  templateUrl: './simulador.html',
  styleUrl: './simulador.scss'
})
export class Simulador implements OnDestroy {

  @ViewChild('canvasCarroceria')
  canvasCarroceriaRef?: ElementRef<HTMLCanvasElement>;

  // ==========================================
  // ESCOLHAS DO USUÁRIO
  // ==========================================

  servicoSelecionado = signal<Servico>(null);
  corCarro = signal('#ffffff');
  peliculaSelecionada = signal<string | null>(null);

  // ==========================================
  // IMAGENS FIXAS (só existe carro agora)
  // ==========================================

  private readonly IMAGEM_CARROCERIA_VERDE = 'carro-plotagem-verde.png';
  readonly imagemMascaraVidro = 'carro-vidro-mask.png';

  // ==========================================
  // ESTADO INTERNO DO CANVAS (COR DO CARRO)
  // ==========================================

  private imagemBase: HTMLImageElement | null = null;
  private imagemCarregada = false;

  private readonly REFERENCIA_LUMINOSIDADE = 0.68;
  private readonly FATOR_MINIMO = 0.3;
  private readonly FATOR_MAXIMO = 1.6;

  constructor() {
    // Sempre que o serviço estiver escolhido e a cor mudar,
    // redesenha a carroceria com a cor selecionada
    effect(() => {
      const servico = this.servicoSelecionado();
      const cor = this.corCarro();

      if (servico) {
        this.carregarEColorirCarroceria(cor);
      }
    });
  }

  // ==========================================
  // SELECIONAR SERVIÇO
  // ==========================================

  selecionarServico(servico: Servico): void {
    this.servicoSelecionado.set(servico);
    this.peliculaSelecionada.set(null);
  }

  // ==========================================
  // SELECIONAR PELÍCULA
  // ==========================================

  selecionarPelicula(tipo: string): void {
    this.peliculaSelecionada.set(tipo);
  }

  // ==========================================
  // ALTERAR COR DO CARRO
  // ==========================================

  alterarCor(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.corCarro.set(input.value);
  }

  // ==========================================
  // OPÇÕES DE PELÍCULA
  // (agora só define o vidro — a cor da
  // carroceria é escolhida à parte, na etapa 2)
  // ==========================================

  peliculas = [
    { codigo: 'AG5',  nome: 'G5',  cor: '#111111', opacidade: 0.95 },
    { codigo: 'AG20', nome: 'G20', cor: '#333333', opacidade: 0.85 },
    { codigo: 'AG30', nome: 'G30', cor: '#777777', opacidade: 0.65 },
    { codigo: 'AG50', nome: 'G50', cor: '#bbbbbb', opacidade: 0.35 }
  ];

  get peliculaAtual() {
    return this.peliculas.find(
      pelicula => pelicula.codigo === this.peliculaSelecionada()
    );
  }

  // ==========================================
  // CARREGAMENTO DA IMAGEM VERDE (COR DA CARROCERIA)
  // ==========================================

  private carregarEColorirCarroceria(corHex: string): void {
    if (!this.imagemCarregada) {
      this.carregarImagem(this.IMAGEM_CARROCERIA_VERDE, () => {
        this.imagemCarregada = true;
        this.colorirCarroceria(corHex);
      });
    } else {
      this.colorirCarroceria(corHex);
    }
  }

  private carregarImagem(src: string, aoCarregar: () => void): void {
    const img = new Image();

    img.onload = () => {
      this.imagemBase = img;
      aoCarregar();
    };

    img.onerror = () => {
      console.error('Não consegui carregar a imagem da carroceria:', src);
    };

    img.src = src;
  }

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

        pixelsSaida[i]     = Math.round(r * (1 - pertence) + rTingido * pertence);
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
  // DETECTA SE O PIXEL É VERDE (croma key)
  // Retorna de 0 (não é) a 1 (com certeza é),
  // com transição suave na borda
  // ==========================================

  private calcularMascaraVerde(r: number, g: number, b: number): number {
    if (r + g + b < 30) return 0;

    const dominanciaVerde = g - Math.max(r, b);

    const LIMIAR_TOTAL = 40;
    const LIMIAR_ZERO = -10;

    if (dominanciaVerde >= LIMIAR_TOTAL) return 1;
    if (dominanciaVerde <= LIMIAR_ZERO) return 0;

    return (dominanciaVerde - LIMIAR_ZERO) / (LIMIAR_TOTAL - LIMIAR_ZERO);
  }

  // ==========================================
  // MÉTODOS AUXILIARES
  // ==========================================

  private lerPixels(imagem: HTMLImageElement, largura: number, altura: number): ImageData {
    const canvasTemp = document.createElement('canvas');
    canvasTemp.width = largura;
    canvasTemp.height = altura;
    const ctx = canvasTemp.getContext('2d')!;
    ctx.drawImage(imagem, 0, 0, largura, altura);
    return ctx.getImageData(0, 0, largura, altura);
  }

  private calcularFatorLuminosidade(r: number, g: number, b: number): number {
    const luminanciaRelativa = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    let fator = luminanciaRelativa / this.REFERENCIA_LUMINOSIDADE;

    if (fator < this.FATOR_MINIMO) fator = this.FATOR_MINIMO;
    if (fator > this.FATOR_MAXIMO) fator = this.FATOR_MAXIMO;

    return fator;
  }

  private converterHexParaRGB(hex: string): { r: number; g: number; b: number } {
    let valorHex = hex.trim().replace('#', '');
    if (valorHex.length === 3) {
      valorHex = valorHex.split('').map(c => c + c).join('');
    }
    return {
      r: parseInt(valorHex.substring(0, 2), 16),
      g: parseInt(valorHex.substring(2, 4), 16),
      b: parseInt(valorHex.substring(4, 6), 16),
    };
  }

  private clampCanal(valor: number): number {
    if (valor < 0) return 0;
    if (valor > 255) return 255;
    return Math.round(valor);
  }

  ngOnDestroy(): void {
    // reservado para futuras funcionalidades
  }
}
