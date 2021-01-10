import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-pedidos-historial',
  templateUrl: './lista-pedidos-historial.component.html',
  styleUrls: ['./lista-pedidos-historial.component.css']
})
export class ListaPedidosHistorialComponent implements OnInit {
  lista_pedidos=false;
  
  constructor() { }

  ngOnInit() {
    console.log("lista-pedidos-historial ",this.lista_pedidos);
  }

}
