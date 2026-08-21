import { Component } from '@angular/core';
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
    { src: '/Faixada.jpeg', legenda: 'Legenda aqui' },
    { src: '/Pelicula.jpeg', legenda: 'Legenda aqui' },
    { src: '/Plotagem.jpeg', legenda: 'Legenda aqui' },
    { src: '/Som.jpeg',  legenda: 'Legenda aqui' },
  ];
  indiceAtual = 0;

  proximaFoto(): void {
    this.indiceAtual = (this.indiceAtual + 1) % this.fotos.length;
  }

  fotoAnterior(): void {
    this.indiceAtual =
      (this.indiceAtual - 1 + this.fotos.length) % this.fotos.length;
  }

  irParaFoto(index: number): void {
    this.indiceAtual = index;
  }
}
