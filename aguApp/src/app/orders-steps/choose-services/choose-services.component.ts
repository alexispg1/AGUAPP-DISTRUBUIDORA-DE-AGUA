import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { NgxSpinnerService } from "ngx-spinner";

import {FormControl, Validators, FormGroup} from '@angular/forms';
import { OrdenService } from 'src/app/services/orden.service';
import { Router } from '@angular/router';
import { Order } from '../../models/Order';
import { ServicioOrden } from '../../models/ServicioOrden';

@Component({
    selector: 'app-choose-services',
    templateUrl: './choose-services.component.html',
    styleUrls: ['./choose-services.component.css']
})
export class ChooseServicesComponent implements OnInit {

    servicios: any = [];
    services: any = [];
    cantidad: number;
    order: any = {};
    total: number;
    orden;
    pedido;
    id_cliente;
    constructor(
        private serviceService: ServicesService,
        private orderService:   OrdenService,
        private spinner: NgxSpinnerService,
        private router: Router
    ) { }

    ngOnInit() {
        this.id_cliente = JSON.parse(localStorage.getItem('ID_USER'));
        let id_ubicacion = JSON.parse(localStorage.getItem('ID_UBICATION'));
        let id_repartidor = JSON.parse(localStorage.getItem('ID_REPARTIDOR'));
        let date_time = JSON.parse(localStorage.getItem('TIME_DATE'));
        this.orden = new Order(this.id_cliente, id_repartidor, id_ubicacion, date_time, 0);
        console.log(this.orden);
        this.getServices();
    }

    getServices() {
        this.spinner.show();
        this.serviceService.getServices().subscribe((result:any) => {
            this.servicios = result.servicios;
            console.log(this.servicios);
            this.spinner.hide();
        });
    }

    onAdd(idServicio, costo, cantidad) {
        var splits = costo.split("$");
        let id_orden_existente;

        console.log(idServicio, splits[1], cantidad);
        //this.spinner.show();
        try {
            this.orderService.addOrder(this.orden).subscribe((result:any) => {
                try {
                    console.log(result.order);
                    console.log(result.msg);
                    id_orden_existente = result.order.idOrden;
                    console.log(id_orden_existente);
                    console.log(result.order.idOrden);
                    let cant = parseInt(cantidad);
                    let subTotal = (parseFloat(splits[1]) * cant);
                    this.pedido = new ServicioOrden(id_orden_existente, idServicio, cant, subTotal);
                    console.log(this.pedido);
                    this.orderService.addPedido(this.pedido).subscribe((resultado:any) => {
                        console.log(resultado.Pedido);
                        this.router.navigate(['/orders/order-current']);
                    });
                } catch (error) {
                    console.log("Orden error", result.msg);
                    console.log("id de orden creada", result.idOrden);
                    let cant = parseInt(cantidad);
                    let subTotal = (parseFloat(splits[1]) * cant);
                    this.pedido = new ServicioOrden(result.idOrden, idServicio, cant, subTotal);
                    console.log(this.pedido);
                    this.orderService.addPedido(this.pedido).subscribe((resultado:any) => {
                        console.log(resultado.Pedido);
                        this.router.navigate(['/orders/order-current']);
                    });
                }
            });
        } catch (error) {
            console.log("Orden Existente", error);
        }

        //this.router.navigate(['/orders/order-current']);
        /*this.orderService.addServicio(this.cantidad, idServicio).subscribe(result => {
            this.spinner.hide();
            this.router.navigate(['/orders/order-current']);
        });*/
    }

}
