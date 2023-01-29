package com.tienda.tiendaSpring.Service;

import com.tienda.tiendaSpring.Entity.Cliente;

import java.util.List;

public interface ClienteService {

    public Cliente Crear(Cliente cliente);
    public List<Cliente> Listar();
    public long CantidadDeRegistros();
    public List<Cliente> BuscarTexto(String texto);
    public Cliente BuscarPorId(int id);
    public Cliente Actualizar(int id,Cliente newCliente);
    public void Borrar(int id);
}
