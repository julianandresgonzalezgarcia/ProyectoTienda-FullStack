import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { factura } from 'src/app/models/Factura';
import { ServiceService } from 'src/app/services/service.service';
import { ActualizarFacturaComponent } from '../actualizar-factura/actualizar-factura.component';
import { ConfirmarBorradoFacturaComponent } from '../confirmar-borrado-factura/confirmar-borrado-factura.component';

@Component({
  selector: 'app-listar-facturas',
  templateUrl: './listar-facturas.component.html',
  styleUrls: ['./listar-facturas.component.css']
})
export class ListarFacturasComponent implements OnInit {

  id_factura:number;

  id_cliente:number;

  usoBusqueda:boolean;

  facturas:factura[] = [];

  constructor(private servicio:ServiceService, private modal:MatDialog) { }

  ngOnInit(): void {
    this.Listar();
  }

  Listar(){
    this.servicio.ListarFacturas()
    .subscribe(data => {
      this.usoBusqueda = false
      this.id_factura = 0
      this.id_cliente = 0
      this.facturas = data
    },(error)=>{
      alert(error)
    });
  }

  BuscarPorId(id_factura:number){
    this.servicio.BuscarFacturaPorId(id_factura)
    .subscribe(data => {
      this.facturas = [];
      this.facturas[0] = data
      this.usoBusqueda = true; 
    },(error)=>{
      alert(error)
    });
  }

  BuscarPorIdDeCliente(id_cliente:number){
    this.servicio.BuscarFacturaPorIdDeCliente(id_cliente)
    .subscribe(data => {
      this.facturas = []
      this.facturas = data
      this.usoBusqueda = true
    },(error)=>{
      alert(error)
    });
  }

  PanelActualizar(id_factura:number){
    localStorage.setItem("id_factura",id_factura.toString());
    this.modal.open(ActualizarFacturaComponent);
  }

  PanelConfirmarBorrado(id_factura:number){
    localStorage.setItem("id_factura",id_factura.toString());
    this.modal.open(ConfirmarBorradoFacturaComponent);
  }

}
