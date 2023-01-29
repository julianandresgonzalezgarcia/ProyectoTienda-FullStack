import { Component, OnInit } from '@angular/core';
import { cliente } from 'src/app/models/Cliente';
import { factura } from 'src/app/models/Factura';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-actualizar-factura',
  templateUrl: './actualizar-factura.component.html',
  styleUrls: ['./actualizar-factura.component.css']
})
export class ActualizarFacturaComponent implements OnInit {

  factura = new factura();

  clientes:cliente[] = [];

  constructor(private servicio:ServiceService) { }

  ngOnInit(): void {
    this.ClientesSeleccion();
    this.Factura();
  }
 
  Factura(){
    var id = new Number(localStorage.getItem("id_factura"));
    this.servicio.BuscarFacturaPorId(+id)
    .subscribe(data => {
      this.factura = data
    },(error)=>{
      alert(error);
    });
  }

  ClientesSeleccion(){
    this.servicio.ListarClientes()
    .subscribe(data => {
      this.clientes = data
    },(error)=>{
      alert(error);
    });
  }
 
  Actualizar(id_factura:number,factura:factura){
    this.servicio.ActualizarFactura(id_factura,factura)
    .subscribe(data => {
      window.location.reload()
    },(error)=>{
      alert(error);
    });
  }


}
