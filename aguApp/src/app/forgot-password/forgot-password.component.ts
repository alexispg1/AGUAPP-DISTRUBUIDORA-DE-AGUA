import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import {regex} from 'src/environments/environment.prod';
import { Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {Alert} from '../alerts/alert';
import {Validation} from '../formValidations/validation';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  Alert=new Alert();
  validation =new Validation();
  profile=this.fb.group({
    email:['',[Validators.required,Validators.pattern(regex.validate_email)]],
  })

  constructor(private fb:FormBuilder,private router:Router,private userService:UserService) {}

  ngOnInit() {}

  isValidField(field:string):boolean{
    return this.validation.isValidField_V(this.profile,field);
  }
  getErrorMessage(field:string):string {
    return this.validation.getErrorMessage_V(this.profile,field);
  }

  submitForm():void{
    if(this.profile.valid){
      const email=this.profile.get('email').value;
      console.log("email es ",email);
      this.userService.accountRecoveryEmail(email)
      .subscribe(response=>{
        console.log("response ",response);
        this.Alert.sucessful('email enviado',true);
        this.profile.reset();
        this.router.navigate(['/login']);
      },error=>{
        console.log("error ",error);
        this.Alert.message_error('Oops...','','email no registrado en nuestro sistema');
        this.profile.reset();
      });
    }
  
  }
  cancel():void{
    this.profile.reset();
    this.router.navigate(['/login']);
  }
}
