import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tiendaAngular';

  constructor(private router:Router){}

  Inicio(){
    this.router.navigate(['Inicio']);
  }

  ListarClientes(){
    this.router.navigate(['listarClientes']);
  }

  ListarFacturas(){
    this.router.navigate(['listarFacturas']);
  }

  ListarDetalles(){
    this.router.navigate(['listarDetalles']);
  }

  ListarProductos(){
    this.router.navigate(['listarProductos']);
  }

}
