import { Component, OnInit } from '@angular/core';
import { UbicacionesService } from 'src/app/services/ubicaciones.service';
import { NgxSpinnerService } from "ngx-spinner";
import { OrdenService } from 'src/app/services/orden.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-ubication',
  templateUrl: './choose-ubication.component.html',
  styleUrls: ['./choose-ubication.component.css']
})
export class ChooseUbicationComponent implements OnInit {
    user_data:any;
    token:string;
    idUser:number;
    ubicaciones: any = [];
    constructor(
        private ubicacionService: UbicacionesService,
        private spinner: NgxSpinnerService,
        private orderService: OrdenService,
        private router:Router
    ) { }

    ngOnInit() {
        this.user_data= JSON.parse(localStorage.getItem('usuario'));
        this.token=this.user_data.token;
        this.idUser=this.user_data.id;
        console.log("el token es ",this.token);
        console.log("el id es",this.user_data.id);
        this.getUbicaciones(this.token,this.idUser);
    }


    getUbicaciones(token:string,idUser:number) {
        this.spinner.show();
        this.ubicacionService.getUbicaciones(token,idUser).subscribe((result: any) => {
            this.ubicaciones = result.ubicaciones;
            console.log("ubicaciones");
            this.spinner.hide();
        });
    }

    onChooseUbication(idUbication) {
        console.log(idUbication);
        localStorage.setItem('ID_USER',JSON.stringify(this.idUser));
        localStorage.setItem('ID_UBICATION',JSON.stringify(idUbication));
        this.spinner.show();
        this.router.navigate(['/order-steps/repartidores']);
        /*this.orderService.updateUbicacion(idUbication).subscribe((result:any) => {
            this.spinner.hide();
            alert(result.msg);
            this.router.navigate(['/order-steps/repartidores']);
        });*/
    }

    nueva_ubicacion_route(){
        this.router.navigate(['/sub-order-steps/new-ubication']);
    }

}
