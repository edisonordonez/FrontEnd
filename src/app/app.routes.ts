import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PruebatreeComponent } from './pruebatree/pruebatree.component'
import { EstructuraComponent } from './estructura/estructura.component';
import { VisualizacionComponent } from './visualizacion/visualizacion.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'pruebatree',
    component: PruebatreeComponent,
  },{
    path: '',
    component: MainComponent,
    children: [
      {
        component: HomeComponent,
        path: '',
      },
      {
        component: EstructuraComponent,
        path: 'estructura',        
      },
      {
        path: 'visualizacion',
        component: VisualizacionComponent,
      }, 
    ],
  },
];

export const appRoutes: any = RouterModule.forRoot(routes);
