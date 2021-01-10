import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UsuariosService} from 'src/app/usuarios.service';
import { User } from 'src/app/models/user';
import {UserService} from 'src/app/services/user.service'
import {Validation} from '../formValidations/validation';
import { FormBuilder,Validators} from '@angular/forms';
import {MustMatch} from 'src/app/register/confirm-password.validator';
import {Alert} from 'src/app/alerts/alert';
import {regex} from 'src/environments/environment.prod';
import { AuthService,SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-post-register',
  templateUrl: './post-register.component.html',
  styleUrls: ['./post-register.component.css']
})
export class PostRegisterComponent implements OnInit {
  alert =new Alert();
  hide = true;
  email_value:string='';
  name_value:string='';
  validate=new Validation();
  token:any;
  user=this.fb.group({
    lastName:['',Validators.required],
    cellphone:['',[Validators.required]],
    password:['',[Validators.required,Validators.pattern(regex.validate_password)]],
    password_confirmation:['',[Validators.required]]
  },{
    validator: MustMatch('password', 'password_confirmation')
  });
  
  constructor(private router: Router,private userService:UserService,
    private fb:FormBuilder,private route:ActivatedRoute,private authService:AuthService) { }
  
  ngOnInit() {
    this.email_value=this.route.snapshot.paramMap.get('email');
    this.name_value=this.route.snapshot.paramMap.get('name');
    console.log("datos de usuario = ",this.email_value, this.name_value);
    this.signOut();
  }

  isValidField(field:string):boolean{
    return this.validate.isValidField_V(this.user,field);
  }

  getErrorMessage(field:string):string{
    return this.validate.getErrorMessage_V(this.user,field);
  }

  sending_data():void{
    if(this.user.valid){
      let name=this.name_value;
      let lastName=this.user.get('lastName').value;
      let email=this.email_value;
      let phone=this.user.get('cellphone').value;
      let password=this.user.get('password').value;
      let person=new User(this.name_value,lastName,this.email_value,phone,3,password);
      this.finish_registration(person);
    }
    
  }

  finish_registration(person:any){
    this.userService.registerUser(person)
    .subscribe(response=>{
      this.token=response;
      this.activate_account(this.token);
    },error=>{
      this.alert.error("intentelo mas tarde",false);
      this.router.navigate(['login'])
    });
  }

  activate_account(token:string){ // obtener el token y pasar al menu de usuario
    this.userService.userAccountActivation(token)
    .subscribe(response=>{
      this.alert.sucessful('cuenta activa',false);
      let user=response;
      localStorage.setItem('usuario', JSON.stringify(user));
      this.route_menu();
    },error=>{
      console.log("error activar cuenta ",error);
    })
    
  }

  route_menu():void{
    this.router.navigate(['user'])
  }

  signOut(): void {
    this.authService.signOut();
  }
}