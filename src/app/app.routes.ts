import { Component } from '@angular/core';

import {Home} from './components/pages/home/home'
import { Routes } from '@angular/router';
import { Servicos } from './components/pages/servicos/servicos';
import { QuemSomos } from './components/pages/quem-somos/quem-somos';
import { Simulador } from './components/pages/simulador/simulador';
import { Avaliacoes } from './components/pages/avaliacoes/avaliacoes';
import { Contato } from './components/pages/contato/contato';
import { Acessorios } from './components/pages/servicos/acessorios/acessorios';
import { Plotagem } from './components/pages/servicos/plotagem/plotagem';
import { Rastreadores } from './components/pages/servicos/rastreadores/rastreadores';
import { AplicacaoPelicula } from './components/pages/servicos/aplicacao-pelicula/aplicacao-pelicula';
import { SomAutomotivo } from './components/pages/servicos/som-automotivo/som-automotivo';

export const routes: Routes =[
  {path: '', component: Home},
  {path: 'servicos', component:Servicos},
  {path: 'quem-somos', component:QuemSomos},
  {path: 'simulador', component:Simulador},
  {path: 'avaliacoes', component:Avaliacoes},
  {path: 'contato', component:Contato},
  {path: 'acessorios', component:Acessorios},
  {path: 'plotagem', component:Plotagem},
  {path: 'rastreadores', component:Rastreadores},
  {path: 'aplicaçao pelicula', component:AplicacaoPelicula},
  {path: 'som automotivo', component:SomAutomotivo}


];

