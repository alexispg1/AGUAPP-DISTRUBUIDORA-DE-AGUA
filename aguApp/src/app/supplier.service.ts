import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Suppliers } from 'src/app/models/supliers';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  url:string="http://127.0.0.1:8000/api/v1/"; 

  constructor(private http:HttpClient) { }

  addSuppliers(suppliers:Suppliers){
    //const headers = new HttpHeaders().set('Authorization', 'Bearer '+token);
    return this.http.post(this.url +"supplier/",suppliers);//, {headers:headers});
  }

  getSuppliers():Observable<any>{
    //const headers = new HttpHeaders().set('Authorization', 'Bearer '+token);
    return this.http.get(this.url + "supplier/");//, {headers:headers})
  }

  getSupplier(id:number):Observable<any>{
    return this.http.get(this.url + "supplier/"+id);//, {headers:headers})
  }

  updateSupplier(id:number, supplier:Suppliers):Observable<any>{
    return this.http.put<any>(this.url+"supplier/"+id, supplier);
  }

  deleteSuppliers(id:number):Observable<any>{
    //const headers=new HttpHeaders().set('Authorization','Bearer '+token);
    return this.http.delete<any>(this.url+"supplier/"+id);//,{headers:headers});
  }
}
