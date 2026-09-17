import { Component, OnInit, OnDestroy,ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quem-somos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quem-somos.html',
  styleUrl: './quem-somos.scss',
})
export class QuemSomos implements OnInit, OnDestroy {
  // Adicione aqui os caminhos das suas imagens
  imagens: string[] = [
    '/QuemSomos.jpeg',
    '/Faixada.jpg',
    '/QuemSomos3.png',
  ];

  indiceAtual = 0;
  private intervaloId?: ReturnType<typeof setInterval>;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.intervaloId = setInterval(() => {
      this.proximoSlide();
      this.cdr.markForCheck(); // força o Angular a atualizar a tela
    }, 4000);
  }

  ngOnDestroy(): void {
    if (this.intervaloId) {
      clearInterval(this.intervaloId);
    }
  }

  proximoSlide(): void {
    this.indiceAtual = (this.indiceAtual + 1) % this.imagens.length;
  }
}
