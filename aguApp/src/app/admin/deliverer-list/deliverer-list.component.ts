import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/services/user.service'

@Component({
  selector: 'app-deliverer-list',
  templateUrl: './deliverer-list.component.html',
  styleUrls: ['./deliverer-list.component.css']
})
export class DelivererListComponent implements OnInit {

  deliverers:[];
  role_id=0;
  token="";
  id:number;
  constructor(private userService:UserService) {
    this.role_id=2;
    this.id=6;
    this.token="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMTI0ZTU3NDJmZmM5MmE4MDRmZDFiYTgzOTgyNmRlYWI0MjM5NGFhNmFjNGI3NmI1NzJhZDI2NTIyNDZjNjZiNDViYmUwMmY0NzBkNDJjYmYiLCJpYXQiOjE2MDU3MzQyMTIsIm5iZiI6MTYwNTczNDIxMiwiZXhwIjoxNjM3MjcwMjEyLCJzdWIiOiI1Iiwic2NvcGVzIjpbXX0.faKoJZ1WZ2NIVi4XtnIcDEC_jadgJ7PX5GTvKNfX5b8HGndzPld-6VRHsVflzJI99ugK-cZbmKZeQjYoQgJ3euaQSDQp3SjJZp7PSpts62Dk4boVQvw8i9-ViNsiSVuKUV8uH4c_Vii_IT2EQD0jIADnilvVmaV7ZNIgLSnFrmnYgZsP21D9xLlN5G02LEQB10fH90APDCc8CZNv5SuGlzFoCqBakc5uWZABEXmWOM6pra7rfpl5C5YU40qzMtCKSBfeEKyTSNCKwbe87Jl1In-bb_aiEqLfFgGDaOvmgN7QXrdCinBGmZxwZi9QCx4hDZDU5tObBUXJqO9pl9Gt3UAMz2IyAN68O5aJC-p5-Pd_Qs56pzif4afxLetNH0bKBjZ-PjZhMGE4y3d3I0y9TJrWN_bFg1mTBI80lL0712W3sV_RFMJSwsf6rfeJdANMQct1ZQSlwvXhLMr6Fhpnrjxo7NikSpcxKS-YYSaJOyhYpZ2D4PktZ7-cwgzQlhnAUp74DL8VeXgDKoElvzWKgCVNS2q_ZY9ipuQ43iPOYb9TMjSAJ0wBpXYroL9eBVNdOE8I59OoamdRJORQAeQqWfBKxTl6wVKpGiNZZF8BWmeijqQJRNxsf3MRy80j3r35y0YBGDwTRefPMf_UD7rQnSe32MMhDGKx4Bc96EpSluA";
  }

  ngOnInit(){
    this.get_deliverers();
  }

  get_deliverers(){
    /*this.userService.get_deliverers(this.token,this.role_id)
    .subscribe(
      response=>{
        console.log("respuesta ",response);
        this.deliverers=response;
      },error=>{
        console.log("error ",error);
      },
    );*/
  }

  delete():void{
    /*this.userService.delete_user(this.token,this.id)
    .subscribe(
      response=>{
        console.log("respuesta ",response);
        this.get_deliverers();
      },error=>{
        console.log("error",error);
      }
    );*/

  }

}
