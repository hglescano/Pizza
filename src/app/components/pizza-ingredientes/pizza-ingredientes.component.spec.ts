import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaIngredientesComponent } from './pizza-ingredientes.component';

describe('PizzaIngredientesComponent', () => {
  let component: PizzaIngredientesComponent;
  let fixture: ComponentFixture<PizzaIngredientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaIngredientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaIngredientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
