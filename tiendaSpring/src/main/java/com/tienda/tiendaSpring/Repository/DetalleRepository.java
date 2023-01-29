package com.tienda.tiendaSpring.Repository;

import com.tienda.tiendaSpring.Entity.Detalle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DetalleRepository extends JpaRepository<Detalle, Integer> {

    @Query(value = "SELECT * FROM cliente"
            +" INNER JOIN factura"
            +" ON cliente.id_cliente = factura.id_cliente"
            +" INNER JOIN detalle"
            +" ON factura.num_factura = detalle.num_factura"
            +" INNER JOIN producto"
            +" ON producto.id_producto = detalle.id_producto"
            +" WHERE cliente.id_cliente = ?1", nativeQuery = true)
    List<Detalle> ListarClienteCompras(int id);

    @Query(value = "SELECT * FROM detalle"
            +" INNER JOIN producto"
            +" ON detalle.id_producto = producto.id_producto"
            +" INNER JOIN factura"
            +" ON detalle.num_factura = factura.num_factura"
            +" INNER JOIN cliente"
            +" ON factura.id_cliente = cliente.id_cliente"
            +" WHERE factura.num_factura = ?1",nativeQuery = true)
    List<Detalle> ListarPorIdFactura(int id);

    @Query(value = "SELECT * FROM detalle"
            +" INNER JOIN producto"
            +" ON detalle.id_producto = producto.id_producto"
            +" INNER JOIN factura"
            +" ON detalle.num_factura = factura.num_factura"
            +" INNER JOIN cliente"
            +" ON factura.id_cliente = cliente.id_cliente"
            +" WHERE cliente.nombre LIKE %?1%"
            +" OR cliente.apellido LIKE %?1%"
            +" OR cliente.direccion LIKE %?1%"
            +" OR cliente.fecha_nacimiento LIKE %?1%"
            +" OR cliente.email LIKE %?1%"
            +" OR factura.fecha LIKE %?1%"
            +" OR producto.nombre LIKE %?1%",nativeQuery = true)
    List<Detalle> BuscarDetallePorTexto(String texto);
}


