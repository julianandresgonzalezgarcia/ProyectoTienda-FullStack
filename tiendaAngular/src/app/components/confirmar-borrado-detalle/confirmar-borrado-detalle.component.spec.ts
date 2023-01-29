import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarBorradoDetalleComponent } from './confirmar-borrado-detalle.component';

describe('ConfirmarBorradoDetalleComponent', () => {
  let component: ConfirmarBorradoDetalleComponent;
  let fixture: ComponentFixture<ConfirmarBorradoDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmarBorradoDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmarBorradoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
