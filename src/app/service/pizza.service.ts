import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private http: HttpClient) { }
  public getPizza(){
    const url= `https://pizzaangular.herokuapp.com/pizza`
    return this.http.get(url)
  }

  public postCreatePizza(body:any){
    const url= `https://pizzaangular.herokuapp.com/pizza`
    return this.http.post(url,body)
  }

  public putUpdatePizza(body:any){
    const url= `https://pizzaangular.herokuapp.com/pizza`
    return this.http.put(url,body)
  }

  public deletePizza(piz_id:any){
    const url= `https://pizzaangular.herokuapp.com/pizza/${piz_id}`
    return this.http.delete(url)
  }
}



