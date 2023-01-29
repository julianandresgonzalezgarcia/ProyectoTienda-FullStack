package com.tienda.tiendaSpring.Service;

import com.tienda.tiendaSpring.Entity.Producto;

import java.util.List;

public interface ProductoService {

    public Producto Crear(Producto producto);
    public List<Producto> Listar();
    public Producto BuscarPorId(int id);
    public long CantidadDeRegistros();
    public Producto Actualizar(int id, Producto newProducto);
    public void Borrar(int id);

}
