import {
  Component,
  OnDestroy,
  OnInit,
  signal
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  RouterLink
} from '@angular/router';


@Component({
  selector: 'app-home',

  imports: [
    CommonModule,
    RouterLink
  ],

  templateUrl: './home.html',

  styleUrl: './home.scss',
})
export class Home
implements OnDestroy, OnInit {

  currentSlide = signal(0);


  private intervalId?:
    ReturnType<typeof setInterval>;


  slides = [

    {
      image:
        'BannerPelicula.webp',

      mobileImage:
        'BannerPelicula-mobile.webp',

      alt:
        'Aplicação de películas automotivas'
    },

    {
      image:
        'BannerRastreadores.webp',

      mobileImage:
        'BannerRastreadores-mobile.webp',

      alt:
        'Instalação de rastreadores veiculares'
    },

    {
      image:
        'BannerPlotagem.webp',

      mobileImage:
        'BannerPlotagem-mobile.webp',

      alt:
        'Plotagem e aplicação de PPF'
    }

  ];


  assetUrl(
    arquivo: string
  ): string {

    return new URL(
      arquivo,
      document.baseURI
    ).href;

  }


  ngOnInit(): void {

    this.startCarrossel();

  }


  startCarrossel(): void {

    this.intervalId =
      setInterval(
        () => {

          this.nextSlide();

        },
        5000
      );

  }


  nextSlide(): void {

    this.currentSlide.update(
      current =>
        (
          current + 1
        ) %
        this.slides.length
    );

  }


  previousSlide(): void {

    this.currentSlide.update(
      current =>
        (
          current -
          1 +
          this.slides.length
        ) %
        this.slides.length
    );

  }


  goToSlide(
    index: number
  ): void {

    this.currentSlide.set(
      index
    );

  }


  ngOnDestroy(): void {

    if (
      this.intervalId
    ) {

      clearInterval(
        this.intervalId
      );

    }

  }

}
