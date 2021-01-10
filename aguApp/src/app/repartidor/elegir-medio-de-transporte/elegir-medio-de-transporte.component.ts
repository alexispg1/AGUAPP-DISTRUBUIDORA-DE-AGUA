import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import{PedidosService} from 'src/app/repartidor/services/pedidos.service';

@Component({
  selector: 'app-elegir-medio-de-transporte',
  templateUrl: './elegir-medio-de-transporte.component.html',
  styleUrls: ['./elegir-medio-de-transporte.component.css']
})
export class ElegirMedioDeTransporteComponent implements OnInit {

  repartido_id:any;
  user_data:any;
  pedidos=[];
  constructor(private router:Router,private pedidosService:PedidosService) { 
    this.user_data=JSON.parse(localStorage.getItem('usuario'))
    this.repartido_id=this.user_data.id;
    console.log("el id del repartidor es ",this.repartido_id);
  }

  ngOnInit() {
  }

  triciclo():void{
    console.log("ir en tricilco");
    this.pedidosService.get_pedidos(this.repartido_id)
    .subscribe(response=>{
      console.log("respuesta ",response);
      var activos=response['activos'];
      this.pedidos=activos['pedidoss'];
      localStorage.setItem('ordenes',JSON.stringify(this.pedidos));
      this.router.navigate(['repartidor/rutas']);
    },error=>{
      console.log("error ",error);
    })
  }
  
  vehiculo():void{
    console.log("ir en veiculo");
    this.pedidosService.get_pedidos(this.repartido_id)
    .subscribe(response=>{
      console.log("respuesta ",response);
      var activos=response['activos'];
      this.pedidos=activos['pedidoss'];
      localStorage.setItem('ordenes',JSON.stringify(this.pedidos));
      this.router.navigate(['repartidor/rutas']);
    },error=>{
      console.log("error ",error);
    })
    
  }
  

}
