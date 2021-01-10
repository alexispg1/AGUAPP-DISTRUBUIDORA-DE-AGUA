import { Component, OnInit, Input  } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl ,FormGroup,Validators} from '@angular/forms';
import { AuthService,SocialUser } from "angularx-social-login";
import { FacebookLoginProvider,GoogleLoginProvider } from "angularx-social-login";
import {Validation} from '../formValidations/validation';
import { FormBuilder } from '@angular/forms'
import {UserService} from 'src/app/services/user.service';
import {Alert} from 'src/app/alerts/alert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: SocialUser;
  loggedIn: boolean;
  hide = true;
  token="";
  id:number;
  alert =new Alert();
  validation=new Validation();
  valid=false;
  dato:any;
  user_data:any;
  profile=this.fb.group({
    email:['',[Validators.required]],
    password:['',[Validators.required]],
  })
  constructor(
    private router:Router,private authService:AuthService, 
    private userService:UserService,private fb: FormBuilder){
   
  }
  ngOnInit(){
    /*this.user_data= JSON.parse(localStorage.getItem('usuario'));
    if(this.user_data.token!=null||this.user_data!=undefined){ //ir directa mente al menu xd xd xd 
      console.log("ir directamente al menu");
    }*/
     
  }

  isValidField(field:string){
    return this.validation.isValidField_V(this.profile,field);
  }

  getErrorMessage(field:string){
    return this.validation.getErrorMessage_V(this.profile,field)
  }
  
  
  submitForm() :void{//is login es valido pasar ala vista user
    if(this.profile.valid){
      this.valid=false;
      let email=this.profile.get('email').value;
      let password=this.profile.get('password').value;
      console.log("valido ",password,email);
      this.userService.login(email,password)
      .subscribe(response=>{
        var user_data=response;
        this.view_to_show(user_data);
      },error=>{        
        this.user_error(error['error']);
      });
    }
    else{
      this.valid=true;
    }
  }

  view_to_show(user_data:any){
    if(user_data.idRol===2){
      console.log("seva ala vista de repartidor");
      this.router.navigate(['repartidor/medio-de-transporte']);
      localStorage.setItem('usuario', JSON.stringify(user_data));
    }
    else{
      console.log("se va ala vista de cliente");
      this.router.navigate(['user']);
      localStorage.setItem('usuario', JSON.stringify(user_data));
    }
  }

  user_error(error:any){
    console.log("respuesta user_error ",error.status);
    if(error.status==="Unauthorized"){
      this.alert.error("credenciales erroneas ",false);
    }
    if(error.status==="inactive"){
      this.router.navigate(['recordar/activar/cuenta']);
    }
    if(error.status===undefined){
      this.alert.error("intentelo mas tarde",false);
    }
  
  }

  login_with_Google():void{
    console.log("google");
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.social_media_user();
  }

  login_with_Facebook():void{
    console.log("Facebook");
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.social_media_user();
  }

  social_media_user(){
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log("el usuario es ",this.loggedIn, "usuario ",this.user);
      if(this.loggedIn===true){
        this.existing_user(this.user.email);
      }
    });
  }

  existing_user(email:string){ /*si existe el usuario  obtener el token y pasar al menu usuario ,
    si no pasar al post-register*/
    this.userService.findEmail(email)
    .subscribe(response=>{
      this.router.navigate(['user']);
      //console.log("respuesta ",response);
      let token=response['token'];
      let user=response;
      localStorage.setItem('usuario', JSON.stringify(user));
      localStorage.setItem('token',token);
      this.router.navigate(['user']);
      this.signOut();
    },error=>{
      //console.log("error",error,"me quedo con el usuario ",this.user);
      this.router.navigate(['postRegister',{
        email:this.user.email,
        name:this.user.firstName
      }]);
    })
  }
  signOut():void{
    this.authService.signOut();
  }
  
  

  
}