package com.tienda.tiendaSpring.Service;

import com.tienda.tiendaSpring.Entity.Cliente;
import com.tienda.tiendaSpring.Entity.Factura;
import com.tienda.tiendaSpring.Repository.FacturaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class FacturaServiceImple implements FacturaService{
    @Autowired
    public FacturaRepository facturaRepository;

    @Override
    public Factura Crear(Factura factura) {

        return facturaRepository.save(factura);
    }

    @Override
    public List<Factura> Listar() {
        return facturaRepository.findAll();
    }

    @Override
    public Factura Generar(Cliente cliente) {
        Factura factura1 = new Factura(LocalDate.now(), cliente);
        return facturaRepository.save(factura1);
    }

    @Override
    public Factura BuscarPorId(int id) {
        return facturaRepository.findById(id).get();
    }

    @Override
    public List<Factura> BuscarPorIdCliente(int id) {
        return facturaRepository.BuscarDetallesPorIdDeCliente(id);
    }

    @Override
    public long CantidadDeReguistros() {
        return facturaRepository.count();
    }

    @Override
    public Factura Actualizar(int id, Factura newFactura) {
        return facturaRepository.findById(id)
                .map(Factura->{
                            Factura.setCliente(newFactura.getCliente());
                            Factura.setFecha(newFactura.getFecha());
                            return facturaRepository.save(Factura);
                        }
                ).get();
    }

    @Override
    public void Borrar(int id) {
        facturaRepository.deleteById(id);
    }
}
