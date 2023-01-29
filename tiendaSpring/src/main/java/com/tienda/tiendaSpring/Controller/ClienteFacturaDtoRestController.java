package com.tienda.tiendaSpring.Controller;

import com.tienda.tiendaSpring.Service.ClienteFacturaDtoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/dtoCienteFactura")
public class ClienteFacturaDtoRestController {

    @Autowired
    private ClienteFacturaDtoService clienteFacturaDtoService;

    @GetMapping
    public ResponseEntity ListarDto(){

        try {
            return new ResponseEntity(clienteFacturaDtoService.ListarDto(), HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity BuscarIdDto(@PathVariable int id){

        try {
            return new ResponseEntity(clienteFacturaDtoService.BuscarIdDto(id),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }
    }

    @GetMapping("/flitro/{id}")
    public ResponseEntity BuscarIdDtoRelacion(@PathVariable int id){

        try {
            return new ResponseEntity(clienteFacturaDtoService.BuscarIdRelacion(id),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }
}
