import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import {User} from 'src/app/models/user';
import {Iuser} from 'src/app/models/InterfaceUser'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  url:string="http://127.0.0.1:8000/api/v1/"; 
  
  constructor(private http:HttpClient) {

  }

  registerUser(user:User){ //ok
    const headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post(this.url +"register",user, {headers:headers});
  }
  login(email:string,password:string):Observable<any>{ //ok
    const headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post<any>(this.url +"login",{email,password},{headers:headers});
  }
  sendEmail(email:string):Observable<any>{ //ok
    const headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.get<any>(this.url+"sendEmail/email?email="+email,{headers:headers});
  }  
  userAccountActivation(token:string):Observable<any>{ //ok
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer '+token);
    return  this.http.get<any>(this.url+"user/activate",{headers:headers});
  }
  accountRecoveryEmail(email:string):Observable<any>{ //ok
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.get<any>(this.url+"sendEmail/recoverAccount/email?email="+email,{headers:headers});
  }
  getUser(token:string):Observable<Iuser>{ //ok
    const headers = new HttpHeaders().set('Content-Type','application/json')
    .set('Authorization','Bearer '+token);
    return this.http.get<Iuser>(this.url+"user/show",{headers:headers});
  }
  usersCurrentpassword(token:string,password:string):Observable<any>{//0k
    const headers=new HttpHeaders().set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer '+token);
    return this.http.post<any>(this.url+"user/verificationPassword",{password},{headers:headers});
  }
  updateUser(token:string,user:User):Observable<Iuser>{//ok
    const headers=new HttpHeaders().set('Content-Type', 'application/json')
    .set('Authorization','Bearer '+token);
    return this.http.put<Iuser>(this.url+"user/updateUser",user,{headers:headers});
  }
  changeUserPassword(token:string,password:string):Observable<any>{ //ok
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer '+token);
    return this.http.put<any>(this.url+"user/updatePassword",{password},{headers:headers});
  }
  deleteUser(token:string):Observable<any>{ //ok 
    const headers=new HttpHeaders().set('Content-Type', 'application/json')
    .set('Authorization','Bearer '+token);
    return this.http.delete<any>(this.url+"user/deleteUser",{headers:headers});
  }

  findEmail(email:any):Observable<any>{
    console.log("si estoy valiendo==", email)
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get<any>(this.url+"user/email?email="+email,{headers:headers});
  }

  

  



  
}
