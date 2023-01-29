import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { detalle } from 'src/app/models/Detalle';
import { ServiceService } from 'src/app/services/service.service';
import { ActualizarDetalleComponent } from '../actualizar-detalle/actualizar-detalle.component';
import { ConfirmarBorradoDetalleComponent } from '../confirmar-borrado-detalle/confirmar-borrado-detalle.component';
import { CrearDetalleComponent } from '../crear-detalle/crear-detalle.component';

@Component({
  selector: 'app-listar-detalles',
  templateUrl: './listar-detalles.component.html',
  styleUrls: ['./listar-detalles.component.css']
})
export class ListarDetallesComponent implements OnInit {

  id_detalle:number;

  id_factura:number;

  id_cliente:number;

  usoBusqueda:boolean;

  detalles:detalle[]=[];

  constructor(private servicio:ServiceService, private modal:MatDialog) { }

  ngOnInit(): void {
    this.Listar();
  }

  Listar(){
    this.servicio.ListarDetalle()
    .subscribe(data => {
      this.usoBusqueda = false
      this.id_factura = 0
      this.id_detalle = 0
      this.id_cliente = 0
      this.detalles = data
    },(error)=>{
      alert(error)
    });
  }

  BuscarPorId(id_detalle:number){
    this.servicio.BuscarDetallePorId(id_detalle)
    .subscribe(data => {
      this.detalles = []
      this.detalles[0] = data
      this.usoBusqueda = true;
    },(error)=>{
      alert(error)
    });
  }

  BuscarFacturasPorId(id_factura:number){
    this.servicio.BuscarDetallePorIdDeFactura(id_factura)
    .subscribe(data => {
      this.detalles = []
      this.detalles = data
      this.usoBusqueda = true
    },(error)=>{
      alert(error)
    });
  }

  BuscarClientesPorId(id_cliente:number){
    this.servicio.BuscarDetallePorIdDeCliente(id_cliente)
    .subscribe(data => {
      this.detalles = []
      this.detalles = data
      this.usoBusqueda = true
    },(error)=>{
      alert(error)
    });
  }

  PanelCrear(){
    this.modal.open(CrearDetalleComponent);
  }

  PanelBorrar(id_detalle:number){
    localStorage.setItem("id_detalle",id_detalle.toString());
    this.modal.open(ConfirmarBorradoDetalleComponent);
  }

  PanelActualizar(id_detalle:number){
    localStorage.setItem("id_detalle",id_detalle.toString());
    this.modal.open(ActualizarDetalleComponent);
  }

}
