import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ListarClientesComponent } from './components/listar-clientes/listar-clientes.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import { ListarFacturasComponent } from './components/listar-facturas/listar-facturas.component';
import { ListarDetallesComponent } from './components/listar-detalles/listar-detalles.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ConfirmarBorradoComponent } from './components/confirmar-borrado/confirmar-borrado.component';
import { ActualizarClienteComponent } from './components/actualizar-cliente/actualizar-cliente.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ActualizarProductoComponent } from './components/actualizar-producto/actualizar-producto.component';
import { ConfirmarBorradoProductoComponent } from './components/confirmar-borrado-producto/confirmar-borrado-producto.component';
import { InicioComponent } from './components/inicio/inicio.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ConfirmarBorradoFacturaComponent } from './components/confirmar-borrado-factura/confirmar-borrado-factura.component';
import { ActualizarFacturaComponent } from './components/actualizar-factura/actualizar-factura.component';
import {MatSelectModule} from '@angular/material/select';
import { CrearDetalleComponent } from './components/crear-detalle/crear-detalle.component';
import { ConfirmarBorradoDetalleComponent } from './components/confirmar-borrado-detalle/confirmar-borrado-detalle.component';
import { ActualizarDetalleComponent } from './components/actualizar-detalle/actualizar-detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarClientesComponent,
    ListarProductosComponent,
    ListarFacturasComponent,
    ListarDetallesComponent,
    CrearClienteComponent,
    ConfirmarBorradoComponent,
    ActualizarClienteComponent,
    CrearProductoComponent,
    ActualizarProductoComponent,
    ConfirmarBorradoProductoComponent,
    InicioComponent,
    ConfirmarBorradoFacturaComponent,
    ActualizarFacturaComponent,
    CrearDetalleComponent,
    ConfirmarBorradoDetalleComponent,
    ActualizarDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatExpansionModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTabsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
