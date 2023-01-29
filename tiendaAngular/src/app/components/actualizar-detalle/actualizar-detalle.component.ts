import { Component, OnInit } from '@angular/core';
import { detalle } from 'src/app/models/Detalle';
import { factura } from 'src/app/models/Factura';
import { producto } from 'src/app/models/Producto';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-actualizar-detalle',
  templateUrl: './actualizar-detalle.component.html',
  styleUrls: ['./actualizar-detalle.component.css']
})
export class ActualizarDetalleComponent implements OnInit {

  detalle = new detalle();

  facturas:factura[] = [];

  productos:producto[] = [];

  constructor(private servicio:ServiceService) { }

  ngOnInit(): void {
    this.ProductosSeleccion();
    this.FacturasSeleccion();
    this.Detalle();
  }

  ProductosSeleccion(){
    this.servicio.ListarProductos()
    .subscribe(data => {
      this.productos = data
    },(error)=>{
      alert(error)
    });
  }

  FacturasSeleccion(){
    this.servicio.ListarFacturas()
    .subscribe(data => {
      this.facturas = data
    },(error)=>{
      alert(error)
    });
  }

  Detalle(){
    var id = new Number(localStorage.getItem("id_detalle"));
    this.servicio.BuscarDetallePorId(+id)
    .subscribe(data => {
      this.detalle = data
    },(error)=>{
      alert(error)
    });
  }

  Actualizar(id_detalle:number, detalle:detalle){
    this.servicio.ActualizarDetalle(id_detalle,detalle)
    .subscribe(data => {
      window.location.reload()
    },(error)=>{
      alert(error)
    });
  }

}
