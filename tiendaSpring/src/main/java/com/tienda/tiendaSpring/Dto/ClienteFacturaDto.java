package com.tienda.tiendaSpring.Dto;

import java.time.LocalDate;

public class ClienteFacturaDto {

    private int idCliente;

    private String nombre;

    private String direccion;

    private LocalDate fechaNacimiento;

    private int telefono;

    private String email;

    private int numFactura;

    private LocalDate facturaFecha;


    public ClienteFacturaDto() {
    }

    public int getIdCliente() {
        return idCliente;
    }

    public void setIdCliente(int idCliente) {
        this.idCliente = idCliente;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public LocalDate getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(LocalDate fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public int getTelefono() {
        return telefono;
    }

    public void setTelefono(int telefono) {
        this.telefono = telefono;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getNumFactura() {
        return numFactura;
    }

    public void setNumFactura(int numFactura) {
        this.numFactura = numFactura;
    }

    public LocalDate getFacturaFecha() {
        return facturaFecha;
    }

    public void setFacturaFecha(LocalDate facturaFecha) {
        this.facturaFecha = facturaFecha;
    }
}
