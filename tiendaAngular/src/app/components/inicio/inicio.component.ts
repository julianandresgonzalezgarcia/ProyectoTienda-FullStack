import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cfdpdto } from 'src/app/models/CFDPDto';
import { detalle } from 'src/app/models/Detalle';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  clientesC:number;

  facturasC:number;

  detallesC:number;

  productosC:number;

  usoBusqueda:boolean;

  usoBusqueda1:boolean;

  id_cliente:number;

  id_cliente1:number;

  id_factura:number;

  texto:String;

  texto1:String;

  dtoPro:cfdpdto[] = [];

  facturas:detalle[] = [];
 
  posicion:String;

  displayedColumns: string[] = ['num_datalle', 'cantidad', 'precio','factura.num_factura'
  ,'factura.fecha','factura.cliente.id_cliente','factura.cliente.nombre','factura.cliente.direccion'
  ,'factura.cliente.telefono','factura.cliente.email','producto.id_producto','producto.nombre',
  'producto.precio','producto.stock'];

  dataSource = this.facturas;

  constructor(private servicio:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.Cantidad()
    this.ListarDtoPro();
    this.ListarDetalles();
  }

  Cantidad(){

    this.servicio.CantidadClientes()
    .subscribe(data => {
      this.clientesC = data
    },(error)=>{
      alert(error)
    });

    this.servicio.CantidadFacutras()
    .subscribe(data => {
      this.facturasC = data
    },(error)=>{
      alert(error)
    });

    this.servicio.CantidadDetalles()
    .subscribe(data => {
      this.detallesC = data
    },(error)=>{
      alert(error)
    });

    this.servicio.CantidadProductos()
    .subscribe(data => {
      this.productosC = data
    },(error)=>{
      alert(error)
    });

  }

  ListarPosicion(){
    this.router.navigate([this.posicion]);
  }

  ListarDtoPro(){
    this.servicio.ListarDtoPro()
    .subscribe(data => {
      this.usoBusqueda = false
      this.id_cliente = 0
      this.texto = ""
      this.dtoPro = data
    },(error)=>{
      alert(error)
    });
  }

  BuscarPorId(id_cliente:number){
    this.servicio.BuscarDtoPorId(id_cliente)
    .subscribe(data =>{
      this.dtoPro = []
      this.usoBusqueda = true
      this.dtoPro = data
    });
  }

  BuscarPorTexto(texto:String){
    this.servicio.BuscarDtoProPorTexto(texto)
    .subscribe(data =>{
      this.dtoPro = []
      this.usoBusqueda = true
      this.dtoPro = data
    },(error)=>{
      alert(error)
    });
  }

  ListarDetalles(){
    this.servicio.ListarDetalle()
    .subscribe(data =>{
      this.usoBusqueda1 = false
      this.id_factura = 0
      this.id_cliente1 = 0
      this.texto1 = ""
      this.facturas = data
    },(error)=>{
      alert(error)
    });
  }

  BuscarPorIdFactura(id_factura:number){
    this.servicio.BuscarDetallePorIdDeFactura(id_factura)
    .subscribe(data =>{
      this.facturas = []
      this.usoBusqueda1 = true
      this.facturas = data
    },(error)=>{
      alert(error)
    });
  }

  BuscarPorIdCliente(id_cliente:number){
    this.servicio.BuscarDetallePorIdDeCliente(id_cliente)
    .subscribe(data => {
      this.facturas = []
      this.usoBusqueda1 = true
      this.facturas = data
    },(error)=>{
      alert(error)
    });

  }

  BuscarDetallePorTexto(texto:String){
    this.servicio.BuscarDetallePorTexto(texto)
    .subscribe(data =>{
      this.facturas = []
      this.usoBusqueda1 = true
      this.facturas = data
    },(error)=>{
      alert(error)
    })
  }


}
