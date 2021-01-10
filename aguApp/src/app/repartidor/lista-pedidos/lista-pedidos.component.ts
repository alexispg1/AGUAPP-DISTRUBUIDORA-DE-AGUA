import { Component, OnInit, Input } from '@angular/core';
import {PedidosService} from 'src/app/repartidor/services/pedidos.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css']
})
export class ListaPedidosComponent implements OnInit {
  @Input('lista-pedidos')  lista_pedidos:boolean=true;
  
  constructor(private pedidosService:PedidosService,private router: Router) { }
  repartidor_id:any;
  token:any;
  pedidos=[];
  user_data:any
  ngOnInit() {
    console.log("estoy en lista-pedidos ",this.lista_pedidos);
    this.user_data=JSON.parse(localStorage.getItem('usuario'))
    this.repartidor_id=this.user_data.id;
    this.ver_pedidos_activos_o_historial();
  }


  ver_pedidos_activos_o_historial(){
    if(this.lista_pedidos){
      this.get_lista_pedidos();
    }
    else{
      this.get_historial_lista_pedidos();
    }

  }

  get_lista_pedidos():void{
    this.pedidosService.get_pedidos(this.repartidor_id)
    .subscribe(response=>{
      var activos=response['activos'];
      this.pedidos=activos['pedidoss'];
    },error=>{
      console.log("error ",error);
    });
  }

  get_historial_lista_pedidos(){
    this.pedidosService.historial_pedidos(this.repartidor_id)
    .subscribe(response=>{
      var activos=response['activos'];
      this.pedidos=activos['pedidoss'];
    },error=>{
      console.log("error ",error);
    });
  }

  ver_detalles(pedido:any){
    localStorage.setItem('pedido',JSON.stringify(pedido));
    this.router.navigate(['repartidor/lista-pedidos/detalles']);
  }
  cliente_ausente(){
    console.log("cliente ausente");
  }

  

}
