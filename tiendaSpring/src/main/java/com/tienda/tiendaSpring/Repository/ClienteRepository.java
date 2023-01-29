package com.tienda.tiendaSpring.Repository;

import com.tienda.tiendaSpring.Entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Integer> {

    @Query(value = "SELECT * FROM cliente WHERE nombre LIKE %?1%"
            +" OR apellido LIKE %?1%"
            +" OR direccion LIKE %?1%"
            +" OR fecha_nacimiento LIKE %?1%"
            +" OR email LIKE %?1%",nativeQuery = true)
    List<Cliente> BuscarPorTexto(String texto);

}
