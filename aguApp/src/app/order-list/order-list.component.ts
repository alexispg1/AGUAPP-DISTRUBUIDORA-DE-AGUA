import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  order_list:Array<any>=[
    {nombre:'alexis',apellido:'perez gomez',direccion:'desconicida'},
    {nombre:'alfredo',apellido:'lopez lopez',direccion:'desconicida'},
    {nombre:'mexico',apellido:'start stark',direccion:'desconicida'},
    {nombre:'mexico',apellido:'start stark',direccion:'desconicida'},
    {nombre:'mexico',apellido:'start stark',direccion:'desconicida'},
  ];
  
  constructor() { }

  ngOnInit() {
  }

  update(order:any,index:any):void{
    console.log("dato a actualizar",order,"indice",index);
    alert("actualizar datos dato "+order.nombre+"");
  }
  delete(order:any,index:any):void{
    console.log("dato a eliminar ",order,"indice",index);
    alert("elimnar dato "+order.nombre+"");
  }


}
