import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL_LOCAL } from '../config/API';
import { Ubication } from '../models/Ubication';

@Injectable({
  providedIn: 'root'
})
export class UbicacionesService {
  constructor(private http: HttpClient) { }

  getUbicaciones(token:string,idUser:number) {

    let endpoint = API_URL_LOCAL + '/ubicaciones?idUsuario='+idUser;
    return this.http.get(endpoint);
  }
  deleteUbicaciones(token:string,idUbicacion:number){
    let endpoint = API_URL_LOCAL + '/ubicaciones?idUbicacion='+idUbicacion;
    return this.http.delete(endpoint);
  }
  addUbicacion(token:string,ubicacion:Ubication){
    const headers=new HttpHeaders().set('Content-Type', 'application/json')
    .set('Authorization','Bearer '+token);
    let endpoint = 'http://127.0.0.1:8000/api/v1/new/ubicaciones';
    return this.http.post(endpoint, ubicacion, {headers:headers});
  }
}
