import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarBorradoProductoComponent } from './confirmar-borrado-producto.component';

describe('ConfirmarBorradoProductoComponent', () => {
  let component: ConfirmarBorradoProductoComponent;
  let fixture: ComponentFixture<ConfirmarBorradoProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmarBorradoProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmarBorradoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
