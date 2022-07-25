import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'; 
import { ActivatedRoute } from '@angular/router';
import { ModelPizza } from 'src/app/Model/model.pizza';
import { PizzaService } from 'src/app/service/pizza.service';
@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  pizza: ModelPizza[]=[];


  public form! : FormGroup
  public idPizza!: number;
  public informacionPizza={
 
   piz_id:-1, 
   piz_name:"", 
   piz_description:"", 
   piz_estado:true
   }
 
   constructor(private PizzaService:PizzaService, private formBuilder:FormBuilder,
    private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      params=>{
        this.idPizza=parseInt(params['piz_id'])
      }
    )
    this.cargarPizza();
  
    this.form=this.formBuilder.group({
      txtpiz_name:[''], 
      txtpiz_description:[''], 
      txtpiz_estado:[true]
      
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

  public crearPizza(){
    this.PizzaService.postCreatePizza({
      piz_name:this.form.value.txtpiz_name,
      piz_description:this.form.value.txtpiz_description,
      piz_estado:this.form.value.txtpiz_estado,
    
      
    }).subscribe(
      respuesta=>{
        console.log('Pizza creada correctamente');
        this.form.reset()
        this.cargarPizza();
      }
    )
  }


  public eliminarPizza(piz_id:any){   
    this.PizzaService.deletePizza(piz_id).subscribe(
      respuesta=>{
        console.log('Pizza eliminada correctamente');
        this.cargarPizza()
      }
    )
  }
  public infoUpdatePizza(piz_id:any, piz_name:any, piz_description:any,piz_estado:any){
    this.informacionPizza.piz_id=piz_id,
    this.informacionPizza.piz_name=piz_name;
    this.informacionPizza.piz_description=piz_description;
    this.informacionPizza.piz_estado=piz_estado;
    

    
  }
  
  public actualizarPizza(piz_id:any){
    this.PizzaService.putUpdatePizza({
      piz_id:piz_id,
      piz_name:this.form.value.txtpiz_name,
      piz_description:this.form.value.txtpiz_description,
      piz_estado:this.form.value.txtpiz_estado,

    }).subscribe(
      respuesta=>{
        console.log('Pizza actualizada correctamente');
        this.form.reset()
        this.cargarPizza()
      }
    )
  }


}
