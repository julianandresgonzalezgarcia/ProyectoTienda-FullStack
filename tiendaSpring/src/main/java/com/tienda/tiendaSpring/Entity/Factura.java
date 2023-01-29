package com.tienda.tiendaSpring.Entity;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "factura")
public class Factura {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int num_factura;

    @Column(nullable = false)
    private LocalDate fecha;

    @ManyToOne
    @JoinColumn(name = "id_cliente", nullable = false)
    private Cliente cliente;


    public Factura() {
    }

    public Factura(int num_factura) {
        this.num_factura = num_factura;
    }

    public Factura(LocalDate fecha, Cliente cliente) {
        this.fecha = fecha;
        this.cliente = cliente;
    }

    public int getNum_factura() {
        return num_factura;
    }

    public void setNum_factura(int num_factura) {
        this.num_factura = num_factura;
    }

    public LocalDate getFecha() {
        return fecha;
    }

    public void setFecha(LocalDate fecha) {
        this.fecha = fecha;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }
}
