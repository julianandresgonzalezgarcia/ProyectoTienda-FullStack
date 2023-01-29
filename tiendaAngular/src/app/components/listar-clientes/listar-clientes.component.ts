import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { cliente } from 'src/app/models/Cliente';
import { ServiceService } from 'src/app/services/service.service';
import { ActualizarClienteComponent } from '../actualizar-cliente/actualizar-cliente.component';
import { ConfirmarBorradoComponent } from '../confirmar-borrado/confirmar-borrado.component';
import { CrearClienteComponent } from '../crear-cliente/crear-cliente.component';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  clientes:cliente[] = [];

  id_cliente:number;

  texto:String;

  usoBusqueda:boolean;

  constructor(private servicio:ServiceService, private modal:MatDialog) { }

  ngOnInit(): void {
    this.Listar();
  }

  Listar(){
    this.servicio.ListarClientes()
    .subscribe(data => {
      this.usoBusqueda = false 
      this.id_cliente = 0
      this.texto = ""
      this.clientes = data
    },(error)=>{
      alert(error)
    });
  }

  BuscarPorId(id_cliente:number){
    this.servicio.BuscarClientePorId(id_cliente)
    .subscribe(data => {
      this.clientes = []
      this.clientes[0] = data
      this.usoBusqueda = true
    },(error) => {
      alert(error)
    });
  }

  BuscarPorTexto(texto:String){
    this.servicio.BuscarClientePorTexto(texto)
    .subscribe(data => {
      this.clientes = []
      this.clientes = data
      this.usoBusqueda = true;
    },(error)=>{
      alert(error)
    });
  }

  AbrirPanel(){
    this.modal.open(CrearClienteComponent);
  }

  PanelActualizar(idCliente:number){
    localStorage.setItem("id_cliente",idCliente.toString())
    this.modal.open(ActualizarClienteComponent);
  }

  PanelBorrar(idCliente:number){
    localStorage.setItem("id_cliente",idCliente.toString());
    this.modal.open(ConfirmarBorradoComponent);
  }



}
