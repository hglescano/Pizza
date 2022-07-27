import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'; 
import { ActivatedRoute } from '@angular/router';
import { ModelPizzaIngredientes } from 'src/app/Model/model.piza-ingredientes';
import { PizzaIngredientesService } from 'src/app/service/pizza-ingredientes.service';
import { ModelPizza } from 'src/app/Model/model.pizza';
import { ModelIngredientes } from 'src/app/Model/model.ingredientes';
import { PizzaService } from 'src/app/service/pizza.service';
import { IngredientesService } from 'src/app/service/ingredientes.service'; 


@Component({
  selector: 'app-pizza-ingredientes',
  templateUrl: './pizza-ingredientes.component.html',
  styleUrls: ['./pizza-ingredientes.component.css']
})
export class PizzaIngredientesComponent implements OnInit {
  pizza: ModelPizza[]=[];
  ingredientes: ModelIngredientes[]=[];
  pizzaIngredientes: ModelPizzaIngredientes[]=[];

  
 public form! : FormGroup
 public idPizzaIngredientes!: number;
 public idPizza!: number;
 public idIngredientes!: number;

 public informacionPizza={

  piz_ing_id: -1,
  piz_id: -1,
   ing_id: -1,
   piz_ing_count: -1, 
   piz_ing_estado: true,
   piz_name:"",
   ing_description:""

}

  constructor(private PizzaIngredientesService:PizzaIngredientesService,private PizzaService:PizzaService,
     private IngredientesService:IngredientesService, private formBuilder:FormBuilder,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params=>{
        this.idPizza=parseInt(params['piz_id'])
        this.idIngredientes=parseInt(params['ing_id'])
        
      })
      this.cargarPizza();
      this.cargarIngredientes();
      this.cargarPizzaingredientes();
  
    this.form=this.formBuilder.group({
      txtpiz_ing_id:[''], 
      pizzaSelected:[''], 
      ingredientesSelected:[''],
      txtpiz_ing_count:[''],
      txtpiz_ing_estado:[true]
      
    })
  }

  public cargarPizza(){
    this.PizzaService.getPizza().subscribe(
      (pizza:any)=>{
        this.pizza=pizza
        console.log(this.pizza)
      },(error)=>console.log(error)
    )
  }


  public cargarIngredientes() {
    this.IngredientesService.getIngredientes().subscribe(
      (ingredientes: any) => {
        this.ingredientes = ingredientes
        console.log(this.ingredientes)
      }, (error) => console.log(error)
    )
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
      piz_id:this.form.value.pizzaSelected,
      ing_id:this.form.value.ingredientesSelected,
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
  public eliminarPizzaIngredientes(piz_ing_id:any){   
    this.PizzaIngredientesService.deletePizzaIngredientes(piz_ing_id).subscribe(
      respuesta=>{
        console.log('Pizza Ingredientes eliminada correctamente');
        this.cargarPizzaingredientes()
      }
    )
  }
  public infoUpdatePizzaIngredientes(piz_ing_id:any,piz_id:any,ing_id:any,piz_ing_count:any,piz_ing_estado:any){
    this.informacionPizza.piz_ing_id=piz_ing_id,
    this.informacionPizza.piz_id=piz_id,
    this.informacionPizza.ing_id=ing_id,
    this.informacionPizza.piz_ing_count=piz_ing_count,
    this.informacionPizza.piz_ing_estado=piz_ing_estado;
    
  }

  public actualizarPizzaIngredientes(piz_ing_id:any){
    this.PizzaIngredientesService.putUpdatePizzaIngredientes({
      piz_ing_id:piz_ing_id,
      piz_id:this.form.value.pizzaSelected,
      ing_id:this.form.value.ingredientesSelected,
      piz_inn_count:this.form.value.txtpiz_ing_count,
      piz_ing_estado:this.form.value.txtpiz_ing_estado,

    }).subscribe(
      respuesta=>{
        console.log('Pizza Ingredientes actualizada correctamente');
        this.form.reset()
        this.cargarPizzaingredientes()
      }
    )
  }
}
