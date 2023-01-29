import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarDetalleComponent } from './actualizar-detalle.component';

describe('ActualizarDetalleComponent', () => {
  let component: ActualizarDetalleComponent;
  let fixture: ComponentFixture<ActualizarDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
