import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-confirmar-borrado-factura',
  templateUrl: './confirmar-borrado-factura.component.html',
  styleUrls: ['./confirmar-borrado-factura.component.css']
})
export class ConfirmarBorradoFacturaComponent implements OnInit {

  constructor(private sericio:ServiceService) { }

  ngOnInit(): void {
  }

  BorrarFactura(){
    var id = new Number(localStorage.getItem("id_factura"));
    this.sericio.BorrarFactura(+id)
    .subscribe(data => {
      window.location.reload()
    },(error)=>{
      alert(error)
    });
  }

}
