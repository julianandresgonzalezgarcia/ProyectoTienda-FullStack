package com.tienda.tiendaSpring.Controller;

import com.tienda.tiendaSpring.Entity.Cliente;
import com.tienda.tiendaSpring.Service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cliente")
@CrossOrigin(origins = "http://localhost:4200")
public class ClienteRestController {

    @Autowired
    private ClienteService clienteService;

    @PostMapping
    public ResponseEntity GuardarCliente(@RequestBody Cliente cliente){

        try {
            return new ResponseEntity(clienteService.Crear(cliente),HttpStatus.CREATED);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping
    public ResponseEntity ListarCliente(){

        try{
            return new ResponseEntity(clienteService.Listar(),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity BuscarClientePorId(@PathVariable int id){

        try{
            return new ResponseEntity(clienteService.BuscarPorId(id),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }
    }

    @GetMapping("/cantidad")
    public ResponseEntity CantidadCLientes(){

        try {
            return new ResponseEntity(clienteService.CantidadDeRegistros(),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }
    }

    @GetMapping("/filtroTexto/{texto}")
    public ResponseEntity BuscarClientePorTexto(@PathVariable String texto){
        return new ResponseEntity(clienteService.BuscarTexto(texto),HttpStatus.OK);
    }



    @PutMapping("/{id}")
    public ResponseEntity ActualizarClienter(@PathVariable int id, @RequestBody Cliente newCliente){

        try {
            return new ResponseEntity(clienteService.Actualizar(id, newCliente),HttpStatus.ACCEPTED);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity EliminarCliente(@PathVariable int id){

        try {
            clienteService.Borrar(id);
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }
}
