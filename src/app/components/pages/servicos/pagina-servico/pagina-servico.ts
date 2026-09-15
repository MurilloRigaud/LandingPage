import { Component } from '@angular/core';
import { SERVICOS } from '../dados-servicos';
import { ActivatedRoute,RouterLink } from '@angular/router';



@Component({
  selector: 'app-pagina-servico',
  imports: [RouterLink],
  templateUrl: './pagina-servico.html',
  styleUrl: './pagina-servico.scss',
})
export class PaginaServico {


   servico: any;

  constructor(private route: ActivatedRoute) {

    const nomeServico = this.route.snapshot.paramMap.get('servico');

    this.servico = SERVICOS[nomeServico as keyof typeof SERVICOS];

  }
}


