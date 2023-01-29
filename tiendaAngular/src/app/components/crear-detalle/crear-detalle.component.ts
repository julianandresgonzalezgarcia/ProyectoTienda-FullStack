import { Component, OnInit } from '@angular/core';
import { cliente } from 'src/app/models/Cliente';
import { detalle } from 'src/app/models/Detalle';
import { factura } from 'src/app/models/Factura';
import { producto } from 'src/app/models/Producto';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-crear-detalle',
  templateUrl: './crear-detalle.component.html',
  styleUrls: ['./crear-detalle.component.css']
})
export class CrearDetalleComponent implements OnInit {

  detalle = new detalle();

  factura = new factura();

  productos:producto[] = [];

  facturas:factura[] = [];

  clientes:cliente[] = [];

  estado:boolean;

  constructor(private servicio:ServiceService) { }

  ngOnInit(): void {
    this.ProductosSeleccion();
    this.FacturasSeleccion();
    this.ClientesSeleccion();
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

  ClientesSeleccion(){
    this.servicio.ListarClientes()
    .subscribe(data => {
      this.clientes = data
    },(error)=>{
      alert(error)
    });
  }

  Guardar(detalle:detalle){
    this.servicio.CrearDetalle(detalle)
    .subscribe(data =>{
      window.location.reload()
    },(error)=>{
      alert(error)
    });
  }

  CrearFactura(cliente:cliente){
    this.servicio.GenerarFactura(cliente)
    .subscribe(data =>{
      this.FacturasSeleccion()
      alert("se a gnerado la factura "+data.num_factura+" al cliente :"+data.cliente)
    },(error)=>{
      alert(error)
    })
  }

}
