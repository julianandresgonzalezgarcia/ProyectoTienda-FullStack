package com.tienda.tiendaSpring.Controller;

import com.tienda.tiendaSpring.Entity.Detalle;
import com.tienda.tiendaSpring.Service.DetalleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/detalle")
@CrossOrigin(origins = "http://localhost:4200")
public class DetalleRestController {

    @Autowired
    private DetalleService detalleService;

    @PostMapping
    public ResponseEntity GuardarDetalle(@RequestBody Detalle detalle){

        try {
            return new ResponseEntity(detalleService.Crear(detalle), HttpStatus.CREATED);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping
    public ResponseEntity ListarDetalle(){

        try {
            return new ResponseEntity(detalleService.Listar(), HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping("/{id}")
    public ResponseEntity BuscarPorId(@PathVariable int id){

        try {
            return new ResponseEntity(detalleService.BuscarPorID(id),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping("/cantidad")
    public ResponseEntity CantidadDeDetalles(){

        try {
            return new ResponseEntity(detalleService.CantidadDeRegistros(),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping("/facturas/{id}")
    public ResponseEntity BuscarDetallesPorIdDeFacturas(@PathVariable int id){

        try{
            return new ResponseEntity(detalleService.BuscarIdFactura(id),HttpStatus.OK);
        }
        catch (Exception e){
            return  new ResponseEntity(e.getMessage(),HttpStatus.OK);
        }

    }

    @GetMapping("/clientes/{id}")
    public ResponseEntity BuscarDetallesPorIdDeCliente(@PathVariable int id){

        try {
            return new ResponseEntity(detalleService.BuscarIdCliente(id),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }


    @GetMapping("/filtroTexto/{texto}")
    public ResponseEntity BuscarDetallePorTexto(@PathVariable String texto){

        try{
            return new ResponseEntity(detalleService.BuscarPorTexto(texto),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @PutMapping("/{id}")
    public ResponseEntity ActualizarDetalle(@PathVariable int id, @RequestBody Detalle newDetalle){

        try {
            return new ResponseEntity(detalleService.Actualizar(id, newDetalle),HttpStatus.ACCEPTED);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @DeleteMapping("/{id}")
    public ResponseEntity BorrarDetalle(@PathVariable int id){

        try {
            detalleService.Borrar(id);
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

}
