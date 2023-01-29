package com.tienda.tiendaSpring.Service;

import com.tienda.tiendaSpring.Entity.Cliente;
import com.tienda.tiendaSpring.Entity.Factura;

import java.util.List;

public interface FacturaService {

    public Factura Crear(Factura factura);
    public List<Factura> Listar();

    public Factura Generar(Cliente cliente);
    public Factura BuscarPorId(int id);
    public List<Factura> BuscarPorIdCliente(int id);
    public long CantidadDeReguistros();
    public Factura Actualizar(int id, Factura newFactura);


    public void Borrar(int id);

}
