import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-confirmar-borrado-detalle',
  templateUrl: './confirmar-borrado-detalle.component.html',
  styleUrls: ['./confirmar-borrado-detalle.component.css']
})
export class ConfirmarBorradoDetalleComponent implements OnInit {

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
  }

  BorrarDetalle(){
    var id = new Number(localStorage.getItem("id_detalle"));
    this.service.BorrarDetalle(+id)
    .subscribe(data => {
      window.location.reload()
    },(error)=>{
      alert(error)
    });
  }

}
