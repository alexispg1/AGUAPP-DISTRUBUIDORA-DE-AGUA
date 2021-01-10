import { Component, OnInit } from '@angular/core';
import { OrdenService } from 'src/app/services/orden.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';


@Component({
  selector: 'app-choose-date-and-time',
  templateUrl: './choose-date-and-time.component.html',
  styleUrls: ['./choose-date-and-time.component.css']
})
export class ChooseDateAndTimeComponent implements OnInit {

    time: string;

    constructor(
        private orderService: OrdenService,
        private spinner: NgxSpinnerService,
        private router: Router
    ) { }

    ngOnInit() {

    }

    onChooseTimeAndDate() {
        localStorage.setItem('TIME_DATE',JSON.stringify(this.time));
        this.spinner.show();
        this.router.navigate(['/order-steps/servicios']);
        /*this.orderService.updateFechaOrden(this.time).subscribe((result) => {
            this.spinner.hide();
            this.router.navigate(['/order-steps/servicios']);
        });*/
    }

}
