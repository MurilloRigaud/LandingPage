import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-simulador',
  imports: [MatButtonToggleModule],
  templateUrl: './simulador.html',
  styleUrl: './simulador.scss',
})
export class Simulador {
   peliculaSelecionada = 'AG5';
}
