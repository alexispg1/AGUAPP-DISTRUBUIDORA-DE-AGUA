import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-navbar-repartido',
  templateUrl: './navbar-repartido.component.html',
  styleUrls: ['./navbar-repartido.component.css']
})
export class NavbarRepartidoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  historial_de_ventas(){
    console.log("historial de ventas");
    this.router.navigate(['repartidor/lista-pedidos/historial']);
  }
  ajustes(){
    console.log("ajustes");
    this.router.navigate(['login']);
  }
  lista_pedidos(){
    console.log("lista pedidos");
    this.router.navigate(['repartidor/lista-pedidos']);
  }
  rutas(){
    console.log("rutas");
    this.router.navigate(['repartidor/rutas']);
  }
  medio_de_trasporte(){
    console.log("medio de transporte");
    this.router.navigate(['repartidor/medio-de-transporte']);
  }


}
