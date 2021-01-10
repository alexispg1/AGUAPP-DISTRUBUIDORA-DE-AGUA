import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import  {UserService} from 'src/app/services/user.service';
import {Alert}from 'src/app/alerts/alert';

@Component({
  selector: 'app-account-activation',
  templateUrl: './account-activation.component.html',
  styleUrls: ['./account-activation.component.css']
})
export class AccountActivationComponent implements OnInit {

  data:string='';
  token:string=''  
  constructor(private router:Router,private activateRoute:ActivatedRoute,private userService:UserService) { }

  ngOnInit() {
    this.token=this.activateRoute.snapshot.params.token;
    console.log("token ",this.token);
    this.accountActivation(this.token);
  }

  accountActivation(token:string):void{
    const alert=new Alert();
    this.userService.userAccountActivation(token) 
    .subscribe(response=>{
      alert.sucessful("cuenta activada",false);
      this.router.navigate(['login']);
    },error=>{
      alert.error("intentelo mas tarde",false);
    });
  }

}
