import {
  Component,
  OnDestroy,
  OnInit,
  signal
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, OnDestroy {

  currentSlide = signal(0);

  private intervalId?: ReturnType<typeof setInterval>;

  slides = [
    {
      image: 'BannerPelicula.png',
      mobileImage: 'BannerPelicula-mobile.png',

      categoria: 'PELÍCULAS AUTOMOTIVAS',

      titulo: 'Mais conforto e proteção',
      tituloDestaque: 'para o seu veículo',

      descricao:
        'Películas de alta qualidade com aplicação profissional, mais segurança, privacidade e estilo.',

      alt: 'Aplicação de películas automotivas'
    },

    {
      image: 'BannerRastreadores.png',
      mobileImage: 'BannerRastreadores-mobile.png',

      categoria: 'RASTREAMENTO VEICULAR',

      titulo: 'Mais segurança e controle',
      tituloDestaque: 'para o seu veículo',

      descricao:
        'Acompanhe seu veículo e tenha mais tranquilidade com soluções de rastreamento automotivo.',

      alt: 'Instalação de rastreadores veiculares'
    },

    {
      image: 'BannerPlotagem.png',
      mobileImage: 'BannerPlotagem-mobile.png',

      categoria: 'PLOTAGEM AUTOMOTIVA',

      titulo: 'Personalize e transforme',
      tituloDestaque: 'o visual do seu carro',

      descricao:
        'Estilo, proteção e personalidade com aplicações profissionais e acabamento de qualidade.',

      alt: 'Plotagem e aplicação de PPF'
    }
  ];

  assetUrl(arquivo: string): string {
    return new URL(
      arquivo,
      document.baseURI
    ).href;
  }

  ngOnInit(): void {
    this.startCarrossel();
  }

  startCarrossel(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide(): void {
    this.currentSlide.update(
      atual =>
        (atual + 1) %
        this.slides.length
    );
  }

  previousSlide(): void {
    this.currentSlide.update(
      atual =>
        (
          atual -
          1 +
          this.slides.length
        ) %
        this.slides.length
    );
  }

  goToSlide(index: number): void {
    this.currentSlide.set(index);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
