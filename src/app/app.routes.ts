import { Component } from '@angular/core';

import {Home} from './components/pages/home/home'
import { Routes } from '@angular/router';
import { Servicos } from './components/pages/servicos/servicos';
import { QuemSomos } from './components/pages/quem-somos/quem-somos';
import { Galeria } from './components/pages/galeria/galeria';
import { Avaliacoes } from './components/pages/avaliacoes/avaliacoes';
import { Contato } from './components/pages/contato/contato';

export const routes: Routes =[
  {path: '', component: Home},
  {path: 'servicos', component:Servicos},
  {path: 'quem-somos', component:QuemSomos},
  {path: 'galeria', component:Galeria},
  {path: 'avaliacoes', component:Avaliacoes},
  {path: 'contato', component:Contato}

];

