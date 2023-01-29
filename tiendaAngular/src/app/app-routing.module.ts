import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListarClientesComponent } from './components/listar-clientes/listar-clientes.component';
import { ListarDetallesComponent } from './components/listar-detalles/listar-detalles.component';
import { ListarFacturasComponent } from './components/listar-facturas/listar-facturas.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';

const routes: Routes = [
  {path:'Inicio',component:InicioComponent},
  {path:'listarClientes',component:ListarClientesComponent},
  {path:'listarProductos',component:ListarProductosComponent},
  {path:'listarFacturas',component:ListarFacturasComponent},
  {path:'listarDetalles',component:ListarDetallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
