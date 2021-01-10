import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Supplies } from 'src/app/models/supplies';

@Injectable({
  providedIn: 'root'
})
export class SupplieService {

  url:string="http://127.0.0.1:8000/api/v1/"; 

  constructor(private http:HttpClient) { }

  addSupplies(supplies:Supplies){
    //const headers = new HttpHeaders().set('Authorization', 'Bearer '+token);
    return this.http.post(this.url +"supplie/",supplies);//, {headers:headers});
  }

  getSupplies():Observable<any>{
    //const headers = new HttpHeaders().set('Authorization', 'Bearer '+token);
    return this.http.get(this.url + "supplie/");//, {headers:headers})
  }

  getSupplie(id:number):Observable<any>{
    return this.http.get(this.url + "supplie/"+id);//, {headers:headers})
  }

  updateSupplie(id:number, supplies:Supplies):Observable<any>{
    return this.http.put<any>(this.url+"supplie/"+id, supplies);
  }

  deleteSupplies(id:number):Observable<any>{
    //const headers=new HttpHeaders().set('Authorization','Bearer '+token);
    return this.http.delete<any>(this.url+"supplie/"+id);//,{headers:headers});
  }
}
