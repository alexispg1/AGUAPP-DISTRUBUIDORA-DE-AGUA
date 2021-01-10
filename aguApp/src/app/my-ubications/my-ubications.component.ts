import { Component, OnInit ,ViewChild} from '@angular/core';
import {UserService} from 'src/app/services/user.service'
import{UbicacionesService} from '../services/ubicaciones.service';

@Component({
  selector: 'app-my-ubications',
  templateUrl: './my-ubications.component.html',
  styleUrls: ['./my-ubications.component.css']
})
export class MyUbicationsComponent implements OnInit {
  id:number=0;
  token:string='';
  ubications:any=[];
  nombre="";//se encesita el nombre recuperado del componente login
  user_data:any;
  name:string='';
  lastName:string='';
  
  constructor(private ubicacionesService:UbicacionesService) { }

  ngOnInit() {
    this.user_data= JSON.parse(localStorage.getItem('usuario'));
    this.name=this.user_data.name;
    this.lastName=this.user_data.lastName;
    this.nombre=this.name+" "+this.lastName;
    console.log("el nombre es ",this.nombre);
    console.log("el token es ",this.token);
    this.get_ubications(this.user_data.token,this.user_data.id);
  }

  get_ubications(token:string,id:number):void{ //pasar ubicaciones pasar el token nada mas
    this.ubicacionesService.getUbicaciones(token,id)
    .subscribe(response=>{
      console.log("respuesta ",response)
      this.ubications=response['ubicaciones'];
      console.log("ubicciones ",this.ubications);
    },error=>{
      console.log("error ",error);
    })
  
  }
  delete_ubication(ubication:any):void{ //pasrar el id necesariamento y el token;
    console.log("borrar ubicacion con el id ",ubication.idUbication);
    this.ubicacionesService.deleteUbicaciones(this.user_data,ubication.idUbication)
    .subscribe(response=>{
      console.log("response ",response);
      this.get_ubications(this.user_data.token,this.user_data.id)
    },error=>{
      console.log("error ",error);
    })
  }

}
