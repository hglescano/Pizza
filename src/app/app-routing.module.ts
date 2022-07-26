import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientesComponent } from './components/ingredientes/ingredientes.component';

const routes: Routes = [{path:'Ingredientes',component:IngredientesComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
