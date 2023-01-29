import { Component, OnInit } from '@angular/core';
import { producto } from 'src/app/models/Producto';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent implements OnInit {

  producto = new producto();

  constructor(private servicio:ServiceService) { }

  ngOnInit(): void {
    this.Producto();
  }

  Producto(){
    var id = new Number(localStorage.getItem("id_producto"));
    this.servicio.BuscarProductoPorId(+id)
    .subscribe(data => {
      this.producto = data
    },(error)=>{
      alert(error)
    });
  }

  Actualizar(id_producto:number,producto:producto){
    this.servicio.ActualizarProducto(id_producto,producto)
    .subscribe(data => {
      window.location.reload()
    },(error)=>{
      alert(error)
    });
  }

}
