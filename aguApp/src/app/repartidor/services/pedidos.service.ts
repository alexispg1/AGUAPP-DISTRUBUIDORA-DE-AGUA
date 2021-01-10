import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  URL="http://127.0.0.1:8000/api/v1/resources/"

  constructor(private http:HttpClient) { }

  get_pedidos(idRepartidor:number):Observable<any>{
    return this.http.get<any>(this.URL+"ordenes/activas?idRepartidor="+idRepartidor);
  }
  despachar_pedidos(idOrden:number){
    return this.http.patch(this.URL+"ordenes/despachado",{idOrden:idOrden});
  }
  historial_pedidos(idRepartidor:number):Observable<any>{
    return this.http.get<any>(this.URL+"ordenes/historial?idRepartidor="+idRepartidor);
  }

}
