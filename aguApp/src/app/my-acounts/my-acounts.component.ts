import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import {regex} from 'src/environments/environment.prod'
import {AccountService} from '../services/account.service';
import{Validation} from '../formValidations/validation';

@Component({
  selector: 'app-my-acounts',
  templateUrl: './my-acounts.component.html',
  styleUrls: ['./my-acounts.component.css']
})
export class MyAcountsComponent implements OnInit {
  emails:[];
  name:any;//;//recuperar el nombre del usuario actual
  user_data:any;
  token:string='';//el token del usuario actual
  validation=new Validation();

  emailForm = this.fb.group({
    email: ['',[Validators.required,Validators.pattern(regex.validate_email)]],
  });

  constructor(private fb: FormBuilder,private accountService:AccountService) { }

  ngOnInit() {
    this.user_data= JSON.parse(localStorage.getItem('usuario'));
    this.token=this.user_data.token; 
    this.name=this.user_data.name+" "+this.user_data.lastName;    
    console.log("token",this.user_data.token);
    this.get_emails();
  }
  isValidField(field:string):boolean{
    return this.validation.isValidField_V(this.emailForm,field);
  }
  getErrorMessage(field:string):string{
    return this.validation.getErrorMessage_V(this.emailForm,field);
  }

  send_email():void{
    if(this.emailForm.valid){
      const email=this.emailForm.get('email').value;
      console.log("el email es ",email);
      this.accountService.add_email(this.user_data.token,email)
      .subscribe(response=>{
        this.emailForm.reset();
        this.get_emails();
        console.log("respuesta get emails ",response);
      },error=>{
        console.log("error ",error);
      });
    } 
   
  }

  get_emails(){
    this.accountService.get_mails(this.user_data.token)
    .subscribe(response=>{
      this.emails=response;
    },error=>{
      console.log("error",error);
    });
  }

  delete_email(email:any){
    console.log("email ",email);
    this.accountService.delete_mail(this.user_data.token,email.id)
    .subscribe(response=>{
      this.get_emails();
    },error=>{
      console.log("error ",error);
    });
  }

}
