import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL_LOCAL } from '../config/API';
import { Order } from '../models/Order';
import { ServicioOrden } from '../models/ServicioOrden';

@Injectable({
    providedIn: 'root'
})
export class OrdenService {

    constructor(private http: HttpClient) { }

    getOrder(idUsuario:number) {
        let endpoint = API_URL_LOCAL + `/orden?idUsuario=${idUsuario}`;
        return this.http.get(endpoint);
    }

    getOnlyOrderById(idCliente:number){
        let endpoint = API_URL_LOCAL + `/search/orden?idCliente=${idCliente}`;
        return this.http.get(endpoint);
    }

    addOrder(orden:Order) {
        let endpoint = API_URL_LOCAL + "/ordenes";
        return this.http.post(endpoint, orden);
    }

    addPedido(servicioOrden:ServicioOrden){
        let endpoint = API_URL_LOCAL + "/ordenes/pedidos";
        return this.http.post(endpoint, servicioOrden);
    }

    updateRepartidor(idRepartidor:number) {
        let idUsuario = 11;
        let endpoint  = API_URL_LOCAL + `/ordenes/update-repartidor?idUsuario=${idUsuario}`;
        return this.http.patch(endpoint,{
            idRepartidor:idRepartidor
        });
    }

    updateUbicacion(idUbicacion:number) {
        let idUsuario = 11;
        let endpoint  = API_URL_LOCAL + `/ordenes/update-ubicacion?idUsuario=${idUsuario}`;
        return this.http.patch(endpoint, {
            idUbicacion:idUbicacion
        });
    }

    updateFechaOrden(fecha: string) {
        let idUsuario = 11;
        let endpoint  = API_URL_LOCAL + `/ordenes/update-fecha?idUsuario=${idUsuario}`;
        return this.http.patch(endpoint, {
            fecha:fecha
        });
    }

    addServicio(cantidad:number,idServicio:number) {
        let idUsuario = 11;
        let endpoint = API_URL_LOCAL + `/orden/add-servicio`;

        return this.http.post(endpoint, {
            idUsuario: idUsuario,
            cantidad: cantidad,
            idServicio: idServicio
        });
    }
}
