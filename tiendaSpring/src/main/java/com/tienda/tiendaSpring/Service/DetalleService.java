package com.tienda.tiendaSpring.Service;

import com.tienda.tiendaSpring.Entity.Detalle;

import java.util.List;

public interface DetalleService {

    public Detalle Crear(Detalle detalle);
    public List<Detalle> Listar();
    public Detalle BuscarPorID(int id);
    public List<Detalle> BuscarIdFactura(int id);
    public List<Detalle> BuscarIdCliente(int id);
    public List<Detalle> BuscarPorTexto(String texto);
    public long CantidadDeRegistros();
    public Detalle Actualizar(int id, Detalle newDetalle);
    public void Borrar(int id);

}
