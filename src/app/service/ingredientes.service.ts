import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IngredientesService {

  
  constructor(private http: HttpClient) { }
  public getIngredientes(){
    const url= `https://pizzaangular.herokuapp.com/ingredientes`
    return this.http.get(url)
  }

  public postCreateIngredientes(body:any){
    const url= `https://pizzaangular.herokuapp.com/ingredientes`
    return this.http.post(url,body)
  }

  public putUpdateIngredientes(body:any){
    const url= `https://pizzaangular.herokuapp.com/ingredientes`
    return this.http.put(url,body)
  }

  public deleteIngredientes(ing_id:any){
    const url= `https://pizzaangular.herokuapp.com/ingredientes/${ing_id}`
    return this.http.delete(url)
  }

}
