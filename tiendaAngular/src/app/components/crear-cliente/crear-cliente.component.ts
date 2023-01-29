import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { cliente } from 'src/app/models/Cliente';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  cliente = new cliente();

  control = new FormControl('',[Validators.required]);

  constructor(private servicio:ServiceService) { }

  ngOnInit(): void {
  }

  Guardar(cliente:cliente){
      this.servicio.CrearCliente(cliente)
      .subscribe(data => {
        window.location.reload()
      },(error) =>{
        alert(error)
      });
  }


}
