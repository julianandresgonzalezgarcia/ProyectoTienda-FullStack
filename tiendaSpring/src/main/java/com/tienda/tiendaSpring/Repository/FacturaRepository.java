package com.tienda.tiendaSpring.Repository;

import com.tienda.tiendaSpring.Entity.Factura;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FacturaRepository extends JpaRepository<Factura, Integer> {

    @Query(value = "SELECt * FROM cliente INNER JOIN factura ON cliente.id_cliente = factura.id_cliente WHERE cliente.id_cliente = ?1", nativeQuery = true)
    List<Factura> ListarPorId(int id);

    @Query(value = "SELECT * FROM factura"
            +" INNER JOIN cliente"
            +" On factura.id_cliente = cliente.id_cliente"
            +" WHERE factura.id_cliente = ?1",nativeQuery = true)
    List<Factura> BuscarDetallesPorIdDeCliente(int id);

}
