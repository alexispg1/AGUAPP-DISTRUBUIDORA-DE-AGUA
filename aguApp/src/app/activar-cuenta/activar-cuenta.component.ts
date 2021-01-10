import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import {regex} from 'src/environments/environment.prod';
import { Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {Alert} from '../alerts/alert';
import {Validation} from '../formValidations/validation';
@Component({
  selector: 'app-activar-cuenta',
  templateUrl: './activar-cuenta.component.html',
  styleUrls: ['./activar-cuenta.component.css']
})
export class ActivarCuentaComponent implements OnInit {

  validate=new Validation();
  alert=new Alert();
  profile=this.fb.group({
    email:['',[Validators.required,Validators.pattern(regex.validate_email)]]
  })
  constructor(private fb:FormBuilder,private userService:UserService,private router:Router){

  }
  ngOnInit() {
  }

  isValidField(field:string):boolean{
    return this.validate.isValidField_V(this.profile,field);
  }
  getErrorMessage(field:string):string{
    return this.validate.getErrorMessage_V(this.profile,field);
  }
  send_data(){
    if(this.profile.valid){
      let email=this.profile.get('email').value;
      console.log("el email es ",email);
      this.userService.sendEmail(email)
      .subscribe(response=>{
        this.alert.sucessful('email enviado',true);
        this.router.navigate(['login']);
      },error=>{
        this.alert.error("intentelo mas tarde",false);
      });
    }
    
  }

 

}
