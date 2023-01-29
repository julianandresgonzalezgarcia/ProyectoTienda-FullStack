package com.tienda.tiendaSpring.Entity;

import javax.persistence.*;

@Entity
@Table(name = "detalle")
public class Detalle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int num_datalle;

    @Column(nullable = false)
    private int cantidad;

    @Column(nullable = false)
    private float precio;

    @ManyToOne
    @JoinColumn(name = "num_factura",nullable = false)
    private Factura factura;

    @ManyToOne
    @JoinColumn(name = "id_producto",nullable = false)
    private Producto producto;

    public int getNum_datalle() {
        return num_datalle;
    }

    public void setNum_datalle(int num_datalle) {
        this.num_datalle = num_datalle;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public float getPrecio() {
        return precio;
    }

    public void setPrecio(float precio) {
        this.precio = precio;
    }

    public Factura getFactura() {
        return factura;
    }

    public void setFactura(Factura factura) {
        this.factura = factura;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }
}
