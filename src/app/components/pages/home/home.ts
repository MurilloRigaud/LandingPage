import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnDestroy, OnInit {
   currentSlide = signal(0);

  private intervalId?: ReturnType<typeof setInterval>;

  slides = [

    {
      image: '/BannerPelicula.png',
      alt: 'Aplicação de películas automotivas'
    },

    {
      image: '/BannerRastreadores.png',
      alt: 'Instalação de rastreadores veiculares'
    },

    {
      image: '/BannerPlotagem.png',
      alt: 'Plotagem e aplicação de PPF'
    }

  ];

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
      current => (current + 1) % this.slides.length
    );

  }


  previousSlide(): void {

    this.currentSlide.update(
      current =>
        (current - 1 + this.slides.length) % this.slides.length
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
