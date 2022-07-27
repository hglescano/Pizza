import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PizzaIngredientesService {

  constructor(private http: HttpClient) { }
  public getPizzaIngredientes(){
    const url= `https://pizzaangular.herokuapp.com/pizzaIngredientes`
    return this.http.get(url)
  }

  public postCreatePizzaIngredientes(body:any){
    const url= `https://pizzaangular.herokuapp.com/pizzaIngredientes`
    return this.http.post(url,body)
  }

  public putUpdatePizzaIngredientes(body:any){
    const url= `https://pizzaangular.herokuapp.com/pizzaIngredientes`
    return this.http.put(url,body)
  }

  public deletePizzaIngredientes(piz_ing_id:any){
    const url= `https://pizzaangular.herokuapp.com/pizzaIngredientes/`+piz_ing_id
    return this.http.delete(url)
  }
}
