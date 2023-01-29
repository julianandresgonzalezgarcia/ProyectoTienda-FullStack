package com.tienda.tiendaSpring.Service;

import com.tienda.tiendaSpring.Entity.Producto;
import com.tienda.tiendaSpring.Repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductoServiceImple implements ProductoService{

    @Autowired
    private ProductoRepository productoRepository;

    @Override
    public Producto Crear(Producto producto) {
        return productoRepository.save(producto);
    }

    @Override
    public List<Producto> Listar() {
        return productoRepository.findAll();
    }

    @Override
    public Producto BuscarPorId(int id) {
        return productoRepository.findById(id).get();
    }

    @Override
    public long CantidadDeRegistros() {
        return productoRepository.count();
    }

    @Override
    public Producto Actualizar(int id, Producto newProducto) {
        return productoRepository.findById(id)
                .map(Producto->{
                        Producto.setNombre(newProducto.getNombre());
                        Producto.setPrecio(newProducto.getPrecio());
                        Producto.setStock(newProducto.getStock());
                        return productoRepository.save(Producto);
                    }
                ).get();
    }

    @Override
    public void Borrar(int id) {
        productoRepository.deleteById(id);
    }
}
