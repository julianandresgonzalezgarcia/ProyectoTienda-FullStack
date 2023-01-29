package com.tienda.tiendaSpring.Controller;

import com.tienda.tiendaSpring.Entity.Producto;
import com.tienda.tiendaSpring.Service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/producto")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductoRestController {

    @Autowired
    private ProductoService productoService;

    @PostMapping
    public ResponseEntity GuardarProducto(@RequestBody Producto producto){

        try {
            return  new ResponseEntity(productoService.Crear(producto), HttpStatus.CREATED);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping
    public ResponseEntity ListarProducto(){

        try {
            return new ResponseEntity(productoService.Listar(),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping("/{id}")
    public ResponseEntity BuscarProductoPorId(@PathVariable int id){

        try {
            return new ResponseEntity(productoService.BuscarPorId(id),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }
    }

    @GetMapping("/cantidad")
    public ResponseEntity CantidadDeProductos(){

        try {
            return new ResponseEntity(productoService.CantidadDeRegistros(),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @PutMapping("/{id}")
    public ResponseEntity ActualizarProducto(@PathVariable int id, @RequestBody Producto newProducto){

        try {
            return new ResponseEntity(productoService.Actualizar(id, newProducto),HttpStatus.ACCEPTED);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity BorrarProducto(@PathVariable int id){

        try {
            productoService.Borrar(id);
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }
}
