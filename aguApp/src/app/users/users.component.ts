import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OrdenService } from '../services/orden.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private router:Router, private ordenService:OrdenService) { }
  user_data:any;
  token:string;
  idUser:number;

  ngOnInit() {
    this.user_data= JSON.parse(localStorage.getItem('usuario'));
    this.token=this.user_data.token;
    this.idUser=this.user_data.id;
    console.log("el token es ",this.token);
    console.log("el id es",this.user_data.id);
  }
  
  see_profile():void{
    console.log("ir a mi perfil ");
    this.router.navigate(['profile']);
  }
  link_your_emails():void{
    console.log("ir a vincular mis correos electronicos");
    this.router.navigate(['accounts']);
  }
  view_saved_locations():void{
    console.log("estoy en mis ubicaciones guardadas");
    this.router.navigate(['ubications'])
  }
  request_orders():void{
    this.ordenService.getOnlyOrderById(this.idUser).subscribe((result:any) =>{
        if(result.idOrder == 0){
          console.log("estoy solicitando ordenes");
          this.router.navigate(['order-steps/ubicaciones']);
        }else{
          this.router.navigate(['/orders/order-current']);
        }
    });
  }
  see_my_orders():void{
    console.log("estoy en mis ordenes")
    this.router.navigate(['orderList']);
  }
  coupon():void{
    console.log("estoy en solicitando cupon")
  }
  proveedores(){
    this.router.navigate(['/suppliersList'])
  }

  insumos(){
    this.router.navigate(['/suppliesList_'])
  }
  accounts(){
    this.router.navigate(['accounts']);
  }

}
