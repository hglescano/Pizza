import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private http: HttpClient) { }
  public getPizza(){
    const url= `http://localhost:4000/pizza`
    return this.http.get(url)
  }

  public postCreatePizza(body:any){
    const url= `http://localhost:4000/pizza`
    return this.http.post(url,body)
  }

  public putUpdatePizza(body:any){
    const url= `http://localhost:4000/pizza`
    return this.http.put(url,body)
  }

  public deletePizza(piz_id:any){
    const url= `http://localhost:4000/pizza/?piz_id=`+piz_id
    return this.http.delete(url)
  }
}



