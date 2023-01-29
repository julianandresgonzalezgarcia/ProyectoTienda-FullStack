package com.tienda.tiendaSpring.Repository;

import com.tienda.tiendaSpring.Entity.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Integer> {

}
