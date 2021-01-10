import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  url:string="http://127.0.0.1:8000/api/v1/"; 
  
  constructor(private http:HttpClient) {
  }

  add_email(token:string,email:string):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer '+token);
    return this.http.post<any>(this.url+"account",{email},{headers:headers});
  }

  get_mails(token:string):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer '+token);
    return this.http.get<any>(this.url+"account",{headers:headers});
  }

  delete_mail(token:string,id:number):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer '+token);
    return this.http.delete(this.url+"account/"+id,{headers:headers});
  }

}
