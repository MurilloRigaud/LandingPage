import { Component } from '@angular/core';

import {Home} from './components/pages/home/home'
import { Routes } from '@angular/router';
import { Servicos } from './components/pages/servicos/servicos';
import { QuemSomos } from './components/pages/quem-somos/quem-somos';
import { Simulador } from './components/pages/simulador/simulador';
import { Avaliacoes } from './components/pages/avaliacoes/avaliacoes';
import { Contato } from './components/pages/contato/contato';
import { PaginaServico } from './components/pages/servicos/pagina-servico/pagina-servico';

export const routes: Routes =[
  {path: '', component: Home},
  {path: 'servicos', component:Servicos},
  {path: 'quem-somos', component:QuemSomos},
  {path: 'simulador', component:Simulador},
  {path: 'avaliacoes', component:Avaliacoes},
  {path: 'contato', component:Contato},
  {path: 'servicos/:servico', component:PaginaServico}

];

