package com.tienda.tiendaSpring.Service;

import com.tienda.tiendaSpring.Dto.ClienteFacturaDto;
import com.tienda.tiendaSpring.Entity.Factura;
import com.tienda.tiendaSpring.Repository.FacturaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ClienteFacturaDtoService {

    @Autowired
    private FacturaRepository facturaRepository;


    public List<ClienteFacturaDto> ListarDto(){
        return facturaRepository.findAll()
                .stream()
                .map(this::CrearDto)
                .collect(Collectors.toList());
    }

    public ClienteFacturaDto BuscarIdDto(int id){
        return facturaRepository.findById(id)
                .map(this::CrearDto)
                .get();
    }

    public List <ClienteFacturaDto> BuscarIdRelacion(int id){
        return facturaRepository.ListarPorId(id)
                .stream()
                .map(this::CrearDto)
                .collect(Collectors.toList());
    }


    private ClienteFacturaDto CrearDto(Factura factura){
        ClienteFacturaDto Dto = new ClienteFacturaDto();

        Dto.setIdCliente(factura.getCliente().getId_cliente());
        Dto.setNombre(factura.getCliente().getNombre()+" "+factura.getCliente().getApellido());
        Dto.setDireccion(factura.getCliente().getDireccion());
        Dto.setFechaNacimiento(factura.getCliente().getFecha_nacimiento());
        Dto.setTelefono(factura.getCliente().getTelefono());
        Dto.setEmail(factura.getCliente().getEmail());
        Dto.setNumFactura(factura.getNum_factura());
        Dto.setFacturaFecha(factura.getFecha());

        return Dto;
    }

}
