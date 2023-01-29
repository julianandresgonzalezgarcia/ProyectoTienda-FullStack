package com.tienda.tiendaSpring.Entity;

import javax.persistence.*;

@Entity
@Table(name = "producto")
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_producto;

    @Column(nullable = false)
    private String nombre;

    @Column(nullable = false)
    private float precio;

    @Column(nullable = false)
    private int stock;

    public Producto() {
    }

    public Producto(int id_producto) {
        this.id_producto = id_producto;
    }

    public Producto(String nombre, float precio, int stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    public int getId_producto() {
        return id_producto;
    }

    public void setId_producto(int id_producto) {
        this.id_producto = id_producto;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public float getPrecio() {
        return precio;
    }

    public void setPrecio(float precio) {
        this.precio = precio;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }
}
