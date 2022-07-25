import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PizzaIngredientesComponent}from './components/pizza-ingredientes/pizza-ingredientes.component';

const routes: Routes = [
  {path:'Pizza Ingredientes', component:PizzaIngredientesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
