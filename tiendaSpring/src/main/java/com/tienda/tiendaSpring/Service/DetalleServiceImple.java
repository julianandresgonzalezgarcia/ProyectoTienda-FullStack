package com.tienda.tiendaSpring.Service;

import com.tienda.tiendaSpring.Entity.Detalle;
import com.tienda.tiendaSpring.Repository.DetalleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DetalleServiceImple implements DetalleService {

    @Autowired
    private DetalleRepository detalleRepository;

    @Override
    public Detalle Crear(Detalle detalle) {
        return detalleRepository.save(detalle);
    }

    @Override
    public List<Detalle> Listar() {
        return detalleRepository.findAll();
    }

    @Override
    public Detalle BuscarPorID(int id) {
        return detalleRepository.findById(id).get();
    }

    @Override
    public List<Detalle> BuscarIdFactura(int id) {
        return detalleRepository.ListarPorIdFactura(id);
    }

    @Override
    public List<Detalle> BuscarIdCliente(int id) {
        return detalleRepository.ListarClienteCompras(id);
    }

    @Override
    public List<Detalle> BuscarPorTexto(String texto) {
        return detalleRepository.BuscarDetallePorTexto(texto);
    }

    @Override
    public long CantidadDeRegistros() {
        return detalleRepository.count();
    }

    @Override
    public Detalle Actualizar(int id, Detalle newDetalle) {
        return detalleRepository.findById(id)
                .map(Detalle->{
                        Detalle.setFactura(newDetalle.getFactura());
                        Detalle.setProducto(newDetalle.getProducto());
                        Detalle.setCantidad(newDetalle.getCantidad());
                        Detalle.setPrecio(newDetalle.getPrecio());
                        return detalleRepository.save(Detalle);
                    }
                ).get();
    }

    @Override
    public void Borrar(int id) {
        detalleRepository.deleteById(id);
    }
}
