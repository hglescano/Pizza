import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'; 
import { ActivatedRoute } from '@angular/router';
import { ModelPizzaIngredientes } from 'src/app/Model/model.piza-ingredientes';
import { PizzaIngredientesService } from 'src/app/service/pizza-ingredientes.service';

@Component({
  selector: 'app-pizza-ingredientes',
  templateUrl: './pizza-ingredientes.component.html',
  styleUrls: ['./pizza-ingredientes.component.css']
})
export class PizzaIngredientesComponent implements OnInit {
  pizzaIngredientes: ModelPizzaIngredientes[]=[];

  
 public form! : FormGroup
 public idPizzaIngredientes!: number;
 public informacionPizza={

  piz_ing_id: -1,
  piz_id: -1,
   ing_id: -1,
   piz_ing_count: -1, 
   piz_ing_estado: true

}

  constructor(private PizzaIngredientesService:PizzaIngredientesService, private formBuilder:FormBuilder,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params=>{
        this.idPizzaIngredientes=parseInt(params['piz_ing_id'])
      })
      this.cargarPizzaingredientes();
  
    this.form=this.formBuilder.group({
      txtpiz_ing_id:[''], 
      txtpiz_id:[''], 
      txting_id:[''],
      txtpiz_ing_count:[''],
      txtpiz_ing_estado:[true]
      
    })
  }
  cargarPizzaingredientes(){
    this.PizzaIngredientesService.getPizzaIngredientes().subscribe(
      (pizzaIngredientes:any)=>{
        this.pizzaIngredientes=pizzaIngredientes
        console.log(this.pizzaIngredientes)
      },(error)=>console.log(error)
    )
  }
  public crearPizzaIngredientes(){
    this.PizzaIngredientesService.postCreatePizzaIngredientes({
      piz_ing_id:this.form.value.txtpiz_ing_id,
      piz_id:this.form.value.txtpiz_id,
      ing_id:this.form.value.txting_id,
      piz_ing_count:this.form.value.txtpiz_ing_count,
      piz_ing_estado:this.form.value.txtpiz_ing_estado

      
    }).subscribe(
      respuesta=>{
        console.log('Pizza Ingredientes creada correctamente');
        this.form.reset()
        this.cargarPizzaingredientes();
      }
    )
  }


  
}
