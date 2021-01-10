import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {PedidosService} from 'src/app/repartidor/services/pedidos.service';

@Component({
  selector: 'app-lista-pedidos-detalles',
  templateUrl: './lista-pedidos-detalles.component.html',
  styleUrls: ['./lista-pedidos-detalles.component.css']
})
export class ListaPedidosDetallesComponent implements OnInit {
  pedido:any;
  servicios=[];
  Total:any;
  estatus:any;

  constructor(private router:Router,private route:ActivatedRoute,private pedidosService:PedidosService) { 
    this.pedido=JSON.parse(localStorage.getItem('pedido'));
    console.log("el pedido es ",this.pedido);
    this.servicios=this.pedido.servicios;
    this.Total=this.pedido.total;
    this.estatus=this.pedido.Orden.estatus;
    console.log("le estatus es ",this.estatus);
    
  }

  ngOnInit() {

  }

  lista_ordenes(){
    this.router.navigate(['repartidor/lista-pedidos']);
    localStorage.removeItem('pedido');
  }

  despachar_orden(){
    console.log("orden ",this.pedido.Orden," id orden ",this.pedido.Orden.idOrden);
    this.pedidosService.despachar_pedidos(this.pedido.Orden.idOrden)
    .subscribe(response=>{
      console.log("respuesta ",response);
      this.router.navigate(['repartidor/lista-pedidos']);
      localStorage.removeItem('pedido');
    },error=>{
      console.log("error ",error);
    });
  }

  historial_pedidos(){
    this.router.navigate(['repartidor/lista-pedidos/historial']);
    localStorage.removeItem('pedido');
  }

  

}
