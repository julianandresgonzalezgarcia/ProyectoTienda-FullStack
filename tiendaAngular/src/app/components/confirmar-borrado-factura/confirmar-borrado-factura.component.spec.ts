import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarBorradoFacturaComponent } from './confirmar-borrado-factura.component';

describe('ConfirmarBorradoFacturaComponent', () => {
  let component: ConfirmarBorradoFacturaComponent;
  let fixture: ComponentFixture<ConfirmarBorradoFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmarBorradoFacturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmarBorradoFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
