import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  menuAberto = signal(false);

  alternarMenu() {
    this.menuAberto.update((valor) => !valor);
  }

  fecharMenu() {
    this.menuAberto.set(false);
  }
}
