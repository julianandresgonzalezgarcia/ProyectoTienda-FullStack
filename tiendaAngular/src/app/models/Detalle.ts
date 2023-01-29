import { factura } from "./Factura";
import { producto } from "./Producto";

export class detalle{

    num_datalle:number;
    cantidad:number;
    precio:number;
    factura:factura;
    producto:producto;

    constructor(){}

}