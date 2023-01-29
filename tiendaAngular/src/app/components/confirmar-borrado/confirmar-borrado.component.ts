import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-confirmar-borrado',
  templateUrl: './confirmar-borrado.component.html',
  styleUrls: ['./confirmar-borrado.component.css']
})
export class ConfirmarBorradoComponent implements OnInit {

  constructor(private servicio:ServiceService) { }

  ngOnInit(): void {
  }

  BorrarCliente(){
    var id =  new Number(localStorage.getItem("id_cliente"));
    this.servicio.BorrarCliente(+id)
    .subscribe(data => {
      window.location.reload()
    },(error)=>{
      alert(error)
    });
  }

}
