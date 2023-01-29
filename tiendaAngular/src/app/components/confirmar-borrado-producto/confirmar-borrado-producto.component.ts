import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-confirmar-borrado-producto',
  templateUrl: './confirmar-borrado-producto.component.html',
  styleUrls: ['./confirmar-borrado-producto.component.css']
})
export class ConfirmarBorradoProductoComponent implements OnInit {

  constructor(private servicio:ServiceService) { }

  ngOnInit(): void {
  }

  BorrarProducto(){
    var id = new Number(localStorage.getItem("id_producto"));
    this.servicio.BorrarProducto(+id)
    .subscribe(data => {
      window.location.reload()
    },(error)=>{
      alert(error)
    });
  }

}
