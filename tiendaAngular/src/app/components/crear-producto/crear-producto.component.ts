import { Component, OnInit } from '@angular/core';
import { producto } from 'src/app/models/Producto';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  producto = new producto();

  constructor(private servicio:ServiceService) { }

  ngOnInit(): void {
  }

  Guardar(producto:producto){
    this.servicio.CrearProducto(producto)
    .subscribe(data => {
      window.location.reload()
    },(error)=>{
      alert(error)
    })
  }

}
