import { Component, OnInit } from '@angular/core';
import { RepartidoresService } from 'src/app/services/repartidores.service';
import { NgxSpinnerService } from "ngx-spinner";
import { OrdenService } from 'src/app/services/orden.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-choose-repartidor',
    templateUrl: './choose-repartidor.component.html',
    styleUrls: ['./choose-repartidor.component.css']
})
export class ChooseRepartidorComponent implements OnInit {

    repartidores: any = [];
    records_numbers: number = 0;
    like: string;

    constructor(
        private repartidorService: RepartidoresService,
        private spinner: NgxSpinnerService,
        private orderService: OrdenService,
        private router:Router
    ) { }

    ngOnInit() {
        this.getRepartidores('');
    }

    getRepartidores(like:string) {
        this.spinner.show();
        this.repartidorService.getRepartidores(like).subscribe((result:any) => {
            this.records_numbers = result.records_number;
            this.repartidores = result.usuarios;
            console.log("respartidores ",this.repartidores);
            this.spinner.hide();
        });
    }

    onSearchRepartidor() {
        this.getRepartidores(this.like);
    }

    onChooseRepartidor(idRepartidor) {
        localStorage.setItem('ID_REPARTIDOR',JSON.stringify(idRepartidor));
        this.spinner.show();
        this.router.navigate(['/order-steps/fecha-hora']);
        /*this.orderService.updateRepartidor(idRepartidor).subscribe((result:any) => {
            alert(result.msg);
            this.spinner.hide();
            this.router.navigate(['/order-steps/fecha-hora']);
        });*/
    }


}
