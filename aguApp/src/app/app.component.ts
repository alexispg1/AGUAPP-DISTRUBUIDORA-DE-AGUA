import { Component } from '@angular/core';
import { OrdenService } from './services/orden.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

    title = 'aguApp';

    /*constructor(private orderService:OrdenService) {
        let idOrder = localStorage.getItem('idOrder');

        if (idOrder === null) {
            this.orderService.addOrder().subscribe((result) => {
                console.log(result);
            });
        }

    }*/

}
