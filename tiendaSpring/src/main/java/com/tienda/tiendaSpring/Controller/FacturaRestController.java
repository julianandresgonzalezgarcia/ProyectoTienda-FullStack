package com.tienda.tiendaSpring.Controller;

import com.tienda.tiendaSpring.Entity.Cliente;
import com.tienda.tiendaSpring.Entity.Factura;
import com.tienda.tiendaSpring.Service.FacturaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/factura")
@CrossOrigin(origins = "http://localhost:4200")
public class FacturaRestController {

    @Autowired
    private FacturaService facturaService;

    @PostMapping
    public ResponseEntity GuardarFactura(@RequestBody Factura factura){

        try{
            return new ResponseEntity(facturaService.Crear(factura), HttpStatus.CREATED);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @PostMapping("/generar")
    public ResponseEntity GenerarFactura(@RequestBody Cliente cliente){

        try {
            return new ResponseEntity(facturaService.Generar(cliente),HttpStatus.CREATED);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }
    }

    @GetMapping
    public ResponseEntity ListarFactura(){

        try {
            return new ResponseEntity(facturaService.Listar(), HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping("/{id}")
    public ResponseEntity BuscarFacturaPorId(@PathVariable int id){

        try {
            return new ResponseEntity(facturaService.BuscarPorId(id),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping("/cantidad")
    public ResponseEntity CantidadDeFacturas(){

        try {
            return new ResponseEntity(facturaService.CantidadDeReguistros(),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping("/filtroClientesID/{id}")
    public ResponseEntity BuscarFacturaPorIdCliente(@PathVariable int id){

        try {
            return new ResponseEntity(facturaService.BuscarPorIdCliente(id),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @PutMapping("/{id}")
    public ResponseEntity ActualizarFactura(@PathVariable int id, @RequestBody Factura newFactura){

        try {
            return new ResponseEntity(facturaService.Actualizar(id, newFactura),HttpStatus.ACCEPTED);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity BorrarFactura(@PathVariable int id){

        try {
            facturaService.Borrar(id);
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

}
