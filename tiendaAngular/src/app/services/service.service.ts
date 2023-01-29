import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { cfdpdto } from '../models/CFDPDto';
import { cliente } from '../models/Cliente';
import { detalle } from '../models/Detalle';
import { factura } from '../models/Factura';
import { producto } from '../models/Producto';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private urlCliente = "http://localhost:8080/api/cliente";

  private urlFactura = "http://localhost:8080/api/factura";

  private urlDetalle = "http://localhost:8080/api/detalle";

  private urlProducto = "http://localhost:8080/api/producto";

  private urlDtoPro = "http://localhost:8080/api/dtoPro";



  constructor(private html:HttpClient) { }

  //--------------------Cliente--------------------
  CrearCliente(cliente:cliente){
    return this.html.post<cliente>(this.urlCliente,cliente)
    .pipe(
      catchError(error =>{
        return throwError("Error al guardar");
      }));
  }

  ListarClientes():Observable<cliente[]>{
    return this.html.get<cliente[]>(this.urlCliente)
    .pipe(
      catchError(error =>{
        return throwError("Error al listar");
      }));
  }

  BuscarClientePorId(idCliente:number):Observable<cliente>{
    return this.html.get<cliente>(this.urlCliente+"/"+idCliente)
    .pipe(
      catchError(error =>{
        return throwError("El id no se encuentra almacenado")
      }));
  }

  CantidadClientes():Observable<number>{
    return this.html.get<number>(this.urlCliente+"/cantidad")
    .pipe(
      catchError(error =>{
        return throwError("Error cantidad de clientes");
      }));
  }

  BuscarClientePorTexto(texto:String):Observable<cliente[]>{
    return this.html.get<cliente[]>(this.urlCliente+"/filtroTexto/"+texto)
    .pipe(catchError(error =>{
      return throwError("Error en la busqueda del cliente")
    }));
  }

  AtualizarCliente(idCliente:number, cliente:cliente){
    return this.html.put<cliente>(this.urlCliente+"/"+idCliente,cliente)
    .pipe(
      catchError(error =>{
        return throwError("Error al actulizar el cliente")
      }));
  }

  BorrarCliente(idCliente:number){
    return this.html.delete<cliente>(this.urlCliente+"/"+idCliente)
    .pipe(catchError(error =>{
      return throwError("Error al borrar cLiente")
    }));
  }

  //--------------------Factura--------------------
  GenerarFactura(cliente:cliente){
    return this.html.post<factura>(this.urlFactura+"/generar",cliente)
    .pipe(
      catchError(error =>{
        return throwError("Error al generar la factura")
      }));
  }

  ListarFacturas():Observable<factura[]>{
    return this.html.get<factura[]>(this.urlFactura)
    .pipe(
      catchError(error => {
        return throwError("Error al listar facturas")
      }));
  }

  BuscarFacturaPorId(id_factura:number):Observable<factura>{
    return this.html.get<factura>(this.urlFactura+"/"+id_factura)
    .pipe(catchError(error =>{
      return throwError("El id no se encuentra almacenado")
    }));
  }

  CantidadFacutras():Observable<number>{
    return this.html.get<number>(this.urlFactura+"/cantidad")
    .pipe(catchError(error =>{
      return throwError("Error cantidad de facturas")
    }));
  }

  BuscarFacturaPorIdDeCliente(idCliente:number):Observable<factura[]>{
    return this.html.get<factura[]>(this.urlFactura+"/filtroClientesID/"+idCliente)
    .pipe(catchError(error =>{
      return throwError("Error al buscar el Id del cliente")
    }));
  }

  ActualizarFactura(id_factura:number,factura:factura){
    return this.html.put<factura>(this.urlFactura+"/"+id_factura,factura)
    .pipe(catchError(error =>{
      return throwError("Error al actualizar factura")
    }));
  }

  BorrarFactura(id_factura:number){
    return this.html.delete<factura>(this.urlFactura+"/"+id_factura)
    .pipe(catchError(error =>{
      return throwError("Error al borrar factura")
    }));
  }

  //--------------------Detalle--------------------
  CrearDetalle(detalle:detalle){
    return this.html.post<detalle>(this.urlDetalle,detalle)
    .pipe(
      catchError(error =>{
        return throwError("Error al crear el detalle");
      }));
  }

  ListarDetalle():Observable<detalle[]>{
    return this.html.get<detalle[]>(this.urlDetalle)
    .pipe(
      catchError(error => {
        return throwError("Error al listar detalles")
      }));
  }

  BuscarDetallePorId(id_detalle:number):Observable<detalle>{
    return this.html.get<detalle>(this.urlDetalle+"/"+id_detalle)    
    .pipe(
      catchError(error => {
        return throwError("El id no se encuenta almacenado")
      }));
  }

  CantidadDetalles():Observable<number>{
    return this.html.get<number>(this.urlDetalle+"/cantidad")
    .pipe(
      catchError(error => {
        return throwError("Error cantidad de detalles")
      }));
  }

  BuscarDetallePorIdDeFactura(id_factura:number):Observable<detalle[]>{
    return this.html.get<detalle[]>(this.urlDetalle+"/facturas/"+id_factura)
    .pipe(catchError(error =>{
      return throwError("El id de la factura no se encuentra almacenado")
    }));
  }

  BuscarDetallePorIdDeCliente(idCliente:number):Observable<detalle[]>{
    return this.html.get<detalle[]>(this.urlDetalle+"/clientes/"+idCliente)
    .pipe(catchError(error =>{
      return throwError("Error al buscar el Id del cliente")
    }));
  }

  BuscarDetallePorTexto(texto:String):Observable<detalle[]>{
    return this.html.get<detalle[]>(this.urlDetalle+"/filtroTexto/"+texto)
    .pipe(catchError(error =>{
      return throwError("Error al buscar el detalle")
    }));
  }


  ActualizarDetalle(id_detalle:number,detalle:detalle){
    return this.html.put<detalle>(this.urlDetalle+"/"+id_detalle,detalle)
    .pipe(
      catchError(error =>{
        return throwError("Error al actualizar detalle")
      }));
  }

  BorrarDetalle(id_detalle:number){
    return this.html.delete<detalle>(this.urlDetalle+"/"+id_detalle)
    .pipe(
      catchError(error =>{
        return throwError("Error al borrar el detalle")
      }));
  }

  //--------------------Producto-------------------
  CrearProducto(producto:producto){
    return this.html.post<producto>(this.urlProducto,producto)
    .pipe(
      catchError(error => {
        return throwError("Error al crear producto")
      }));
  }

  ListarProductos():Observable<producto[]>{
    return this.html.get<producto[]>(this.urlProducto)
    .pipe(
      catchError(error => {
        return throwError("Error al listar productos")
      }));
  }

  BuscarProductoPorId(id_producto:number):Observable<producto>{
    return this.html.get<producto>(this.urlProducto+"/"+id_producto)
    .pipe(
      catchError(error => {
        return throwError("El id no se encuentra almacenado")
      }));
  }

  CantidadProductos():Observable<number>{
    return this.html.get<number>(this.urlProducto+"/cantidad")
    .pipe(
      catchError(error => {
        return throwError("Error cantidad de productos")
      }));
  }

  ActualizarProducto(id_producto:number,producto:producto){
    return this.html.put<producto>(this.urlProducto+"/"+id_producto,producto)
    .pipe(
      catchError(error => {
        return throwError("Error al actualizar producto")
      }));
  }

  BorrarProducto(id_producto:number){
    return this.html.delete<producto>(this.urlProducto+"/"+id_producto)
    .pipe(
      catchError(error => {
        return throwError("Error al borrar producto")
      }));
  }

  //---------------------DtoPRo--------------------
  
  ListarDtoPro():Observable<cfdpdto[]>{
    return this.html.get<cfdpdto[]>(this.urlDtoPro)
    .pipe(
      catchError(error => {
        return throwError("Error al listar DtoPro")
      }));
  }

  BuscarDtoPorId(idCliente:number):Observable<cfdpdto[]>{
    return this.html.get<cfdpdto[]>(this.urlDtoPro+"/"+idCliente)
    .pipe(
      catchError(error =>{
      return throwError("Error al buscar el Id")
    }));
  }

  BuscarDtoProPorTexto(texto:String):Observable<cfdpdto[]>{
    return this.html.get<cfdpdto[]>(this.urlDtoPro+"/filtroTexto/"+texto)
    .pipe(catchError(error =>{
      return throwError("Error al buscar el cliente")
    }));
  }

}
