import { Component, signal } from '@angular/core';

interface FotoGaleria {
  src: string;
  legenda: string;
}

@Component({
  selector: 'app-galeria',
  imports: [],
  templateUrl: './galeria.html',
  styleUrl: './galeria.scss',
})
export class Galeria {
  fotos: FotoGaleria[] = [
    { src: '/Faixada.jpeg', legenda: 'Aplicação de película nano cerâmica' },
    { src: '/Pelicula.jpeg', legenda: 'Aplicação de película de nano cerâmica transparente' },
    { src: '/Plotagem.jpeg', legenda: 'Plotagem com material PPF' },
    { src: '/Som.jpeg', legenda: 'Som interno de carro' },
  ];

   indiceAtual = signal(0);
  transicionando = signal(false);

  private trocarSlide(novoIndice: number): void {
    this.transicionando.set(true);

    setTimeout(() => {
      this.indiceAtual.set(novoIndice);
      this.transicionando.set(false);
    }, 300);
  }

  proximaFoto(): void {
    const novo = (this.indiceAtual() + 1) % this.fotos.length;
    this.trocarSlide(novo);
  }

  fotoAnterior(): void {
    const novo = (this.indiceAtual() - 1 + this.fotos.length) % this.fotos.length;
    this.trocarSlide(novo);
  }

  irParaFoto(index: number): void {
    this.trocarSlide(index);
  }
}
