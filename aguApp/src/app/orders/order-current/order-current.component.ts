import { Component, OnInit } from '@angular/core';
import { OrdenService } from 'src/app/services/orden.service';
import { Router } from '@angular/router';
import { Order } from '../../models/Order';
import { ServicioOrden } from '../../models/ServicioOrden';
@Component({
    selector: 'app-order-current',
    templateUrl: './order-current.component.html',
    styleUrls: ['./order-current.component.css']
})
export class OrderCurrentComponent implements OnInit {

    order: any = {};
    total: number;
    servicios: any = [];
    orden;
    pedido;
    id_orden_existente;
    user_data:any;
    token:string;
    idUser:number;
    constructor(private orderService:OrdenService, private router:Router) { }

    ngOnInit() {
        this.user_data= JSON.parse(localStorage.getItem('usuario'));
        this.token=this.user_data.token;
        this.idUser=this.user_data.id;
        console.log("el token es ",this.token);
        console.log("el id es",this.user_data.id);
        this.getOrder(this.user_data.id);
    }

    getOrder(id_cliente) {
        this.orderService.getOrder(id_cliente).subscribe((result:any) => {
            this.order     = result.order;
            this.total     = result.total;
            this.servicios = result.servicios;
            console.log(this.servicios);
        });
    }

    addMore(){
        this.router.navigate(['/order-steps/servicios']);
    }

    backMenu(){
        this.router.navigate(['/user']);
    }
}
