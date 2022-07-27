import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PizzaComponent } from './components/pizza/pizza.component';
import { IngredientesComponent } from './components/ingredientes/ingredientes.component';
import { PizzaIngredientesComponent } from './components/pizza-ingredientes/pizza-ingredientes.component'; 

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    IngredientesComponent,
    PizzaIngredientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
