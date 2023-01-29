package com.tienda.tiendaSpring.Service;

import com.tienda.tiendaSpring.Dto.CFDPDto;
import com.tienda.tiendaSpring.Entity.Detalle;
import com.tienda.tiendaSpring.Repository.DetalleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CFDPDtoServiceImple{

    @Autowired
    private DetalleRepository detalleRepository;


    public List<CFDPDto> ListarDto() {
        return detalleRepository.findAll()
                .stream()
                .map(this::CrearDto)
                .collect(Collectors.toList());
    }

    public List<CFDPDto> ListarPorId(int id){
        return detalleRepository.ListarClienteCompras(id)
                .stream()
                .map(this::CrearDto)
                .collect(Collectors.toList());
    }

    public List<CFDPDto> ListarPorTexto(String texto){
        return detalleRepository.BuscarDetallePorTexto(texto)
                .stream()
                .map(this::CrearDto)
                .collect(Collectors.toList());
    }

    public CFDPDto CrearDto(Detalle detalle) {
        CFDPDto Dto = new CFDPDto();

        Dto.setIdCliente(detalle.getFactura().getCliente().getId_cliente());
        Dto.setNombre(detalle.getFactura().getCliente().getNombre()+" "+detalle.getFactura().getCliente().getApellido());
        Dto.setDireccion(detalle.getFactura().getCliente().getDireccion());
        Dto.setTelefono(detalle.getFactura().getCliente().getTelefono());
        Dto.setEmail(detalle.getFactura().getCliente().getEmail());
        Dto.setNumFactura(detalle.getFactura().getNum_factura());
        Dto.setFacturaFecha(detalle.getFactura().getFecha());
        Dto.setNombreProducto(detalle.getProducto().getNombre());
        Dto.setCantidad(detalle.getCantidad());
        Dto.setPrecio(detalle.getPrecio());

        return Dto;
    }
}
