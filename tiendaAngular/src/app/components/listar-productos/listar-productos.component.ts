import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { producto } from 'src/app/models/Producto';
import { ServiceService } from 'src/app/services/service.service';
import { ActualizarProductoComponent } from '../actualizar-producto/actualizar-producto.component';
import { ConfirmarBorradoProductoComponent } from '../confirmar-borrado-producto/confirmar-borrado-producto.component';
import { CrearProductoComponent } from '../crear-producto/crear-producto.component';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {

  id:number;

  usoBusqueda:boolean;

  productos:producto[] = [];

  displayedColumns: string[] = ['id_producto', 'nombre', 'precio','stock','acciones'];
  dataSource = this.productos;

  constructor(private servicio:ServiceService, private modal:MatDialog) { }

  ngOnInit(): void {
    this.Listar();
  }

  Listar(){
    this.servicio.ListarProductos()
    .subscribe(data => {
      this.productos = data
    },(error)=>{
      alert(error)
    });
  }

  BuscarPorId(id_producto:number){

    this.servicio.BuscarProductoPorId(id_producto)
    .subscribe(data => {
      this.productos = [];
      this.productos[0] = data;
      this.usoBusqueda = true; 
    },(error)=>{
      alert(error)
    });
  }

  PanelCrear(){
    this.modal.open(CrearProductoComponent);
  }

  PanelActualizar(id_producto:number){
    localStorage.setItem("id_producto",id_producto.toString());
    this.modal.open(ActualizarProductoComponent);
  }

  PanelConfirmarBorrado(id_producto:number){
    localStorage.setItem("id_producto",id_producto.toString());
    this.modal.open(ConfirmarBorradoProductoComponent);
  }

}
