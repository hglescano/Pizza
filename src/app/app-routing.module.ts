import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaComponent } from './components/pizza/pizza.component';
import { IngredientesComponent } from './components/ingredientes/ingredientes.component';
import { PizzaIngredientesComponent } from './components/pizza-ingredientes/pizza-ingredientes.component';
const routes: Routes = [
  {path:'pizza',component:PizzaComponent},
   {path:'ingredientes',component:IngredientesComponent},
  {path:'pizza-ingredientes',component:PizzaIngredientesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
