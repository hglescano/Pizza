import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModelIngredientes } from 'src/app/Model/model.ingredientes';
import { IngredientesService } from 'src/app/service/ingredientes.service';

@Component({
  selector: 'app-ingredientes',
  templateUrl: './ingredientes.component.html',
  styleUrls: ['./ingredientes.component.css']
})
export class IngredientesComponent implements OnInit {
  ingredientes: ModelIngredientes[] = [];
  public form!: FormGroup
  public idIngredientes!: number;
  public informacionIngredientes = {
    ing_id: -1,
    ing_description: "",
    ing_calories: -1,
    ing_estado: true
  }
  constructor(private IngrediestesService: IngredientesService, private formBuilder: FormBuilder, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.idIngredientes = parseInt(params['ing_id'])
      }
    )
    this.cargarIngredientes();
    this.form = this.formBuilder.group({
      txting_description: [''],
      txting_calories: [''],
      txting_estado: [true]
    })
  }


  public cargarIngredientes() {
    this.IngrediestesService.getIngredientes().subscribe(
      (ingredientes: any) => {
        this.ingredientes = ingredientes
        console.log(this.ingredientes)
      }, (error) => console.log(error)
    )
  }

  public crearIngredientes() {
    this.IngrediestesService.postCreateIngredientes({
      ing_description: this.form.value.txting_description,
      ing_calories: this.form.value.txting_calories,
      ing_estado: this.form.value.txting_estado,


    }).subscribe(
      respuesta => {
        console.log('Ingrediente creada correctamente');
        this.form.reset()
        this.cargarIngredientes();
      }
    )
  }


  public eliminarIngredientes(ing_id: any) {
    this.IngrediestesService.deleteIngredientes(ing_id).subscribe(
      respuesta => {
        console.log('Ingredientes eliminada correctamente');
        this.cargarIngredientes()
      }
    )
  }

  public infoUpdateIngredientes(ing_id: any, ing_description: any, ing_calories: any, ing_estado: any) {
    this.informacionIngredientes.ing_id = ing_id,
      this.informacionIngredientes.ing_description = ing_description;
    this.informacionIngredientes.ing_calories = ing_calories;
    this.informacionIngredientes.ing_estado = ing_estado;
  }

  public actualizarIngredientes(ing_id: any) {
    this.IngrediestesService.putUpdateIngredientes({
      ing_id: ing_id,
      ing_description: this.form.value.txting_description,
      ing_calories: this.form.value.txting_calories,
      ing_estado: this.form.value.txting_estado,

    }).subscribe(
      respuesta => {
        console.log('Ingrediente actualizada correctamente');
        this.form.reset()
        this.cargarIngredientes()
      }
    )
  }

}
