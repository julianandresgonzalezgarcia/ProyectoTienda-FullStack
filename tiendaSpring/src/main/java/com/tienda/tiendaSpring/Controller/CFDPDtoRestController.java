package com.tienda.tiendaSpring.Controller;

import com.tienda.tiendaSpring.Service.CFDPDtoServiceImple;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/dtoPro")
@CrossOrigin(origins = "http://localhost:4200")
public class CFDPDtoRestController {

    @Autowired
    private CFDPDtoServiceImple cfdpDtoServiceImple;

    @GetMapping
    public ResponseEntity ListarDtoPro(){

        try {
            return new ResponseEntity(cfdpDtoServiceImple.ListarDto(), HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping("/{id}")
    public ResponseEntity BuscarClientePorId(@PathVariable int id){

        try {
            return new ResponseEntity(cfdpDtoServiceImple.ListarPorId(id),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping("/filtroTexto/{texto}")
    public ResponseEntity BuscarDtoPorTexto(@PathVariable String texto){

        try{
            return new ResponseEntity(cfdpDtoServiceImple.ListarPorTexto(texto),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }
}
