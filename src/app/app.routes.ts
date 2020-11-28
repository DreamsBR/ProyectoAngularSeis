import { Route } from '@angular/compiler/src/core';
import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  NewformComponent } from "../app/newform/newform.component";
import {  ListarComponent } from "../app/listar/listar.component";

const app_routes:Routes=[
  {path: 'newform', component:NewformComponent},
  {path: 'listar', component:ListarComponent},
  {path: '**',pathMatch:'full', redirectTo:'home'}

];

export const app_routing = RouterModule.forRoot(app_routes);
