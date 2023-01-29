import { Component, OnInit } from '@angular/core';
import { cliente } from 'src/app/models/Cliente';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent implements OnInit {

  cliente = new cliente();


  constructor(private servicio:ServiceService) { }

  ngOnInit(): void {
    this.Cliente();
  }

  Cliente(){
    var id = new Number(localStorage.getItem("id_cliente"));
    this.servicio.BuscarClientePorId(+id)
    .subscribe(data => {
      this.cliente = data
    },(error)=>{
      alert(error)
    });
  }

  Actualizar(idCliente:number, cliente:cliente){
    this.servicio.AtualizarCliente(idCliente,cliente)
    .subscribe(data => {
      window.location.reload()
    },(error)=>{
      alert(error)
    });
  }

}
