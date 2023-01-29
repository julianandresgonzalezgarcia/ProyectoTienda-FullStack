package com.tienda.tiendaSpring.Service;

import com.tienda.tiendaSpring.Entity.Cliente;
import com.tienda.tiendaSpring.Repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteServiceImple implements ClienteService{

    @Autowired
    private ClienteRepository clienteRepository;

    @Override
    public Cliente Crear(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    @Override
    public List<Cliente> Listar() {
        return clienteRepository.findAll();
    }

    @Override
    public long CantidadDeRegistros() {
        return clienteRepository.count();
    }

    @Override
    public List<Cliente> BuscarTexto(String texto) {
        return clienteRepository.BuscarPorTexto(texto);
    }

    @Override
    public Cliente BuscarPorId(int id) {
        return clienteRepository.findById(id).get();
    }

    @Override
    public Cliente Actualizar(int id, Cliente newCliente) {
        return clienteRepository.findById(id)
                .map(Cliente ->{
                        Cliente.setNombre(newCliente.getNombre());
                        Cliente.setApellido(newCliente.getApellido());
                        Cliente.setDireccion(newCliente.getDireccion());
                        Cliente.setFecha_nacimiento(newCliente.getFecha_nacimiento());
                        Cliente.setTelefono(newCliente.getTelefono());
                        Cliente.setEmail(newCliente.getEmail());
                        return clienteRepository.save(Cliente);
                    }
                ).get();
    }

    @Override
    public void Borrar(int id) {
        clienteRepository.deleteById(id);
    }
}
