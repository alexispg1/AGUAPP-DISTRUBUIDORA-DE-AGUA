import { Component, OnInit } from '@angular/core';
import {Validators,FormBuilder} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import{regex} from 'src/environments/environment.prod';
import {MustMatch} from 'src/app/register/confirm-password.validator';
import {UserService} from 'src/app/services/user.service';
import {Alert} from 'src/app/alerts/alert';
import {Validation} from '../formValidations/validation';

@Component({
  selector: 'app-recover-account',
  templateUrl: './recover-account.component.html',
  styleUrls: ['./recover-account.component.css']
})
export class RecoverAccountComponent implements OnInit {
  hide= true;
  token:string='';
  Alert=new Alert();
  validation=new Validation();
  profile=this.f.group({
    password:['',[Validators.required,Validators.pattern(regex.validate_password)]],
    confirmation_password:['',[Validators.required]]
  },
  {
    validator: MustMatch('password', 'confirmation_password')
  });

  constructor(private router:Router,private f:FormBuilder,
    private userService:UserService,
    private activatedRoute: ActivatedRoute){ 

  }

  ngOnInit() {
    this.token=this.activatedRoute.snapshot.params.token;
    console.log("el token es ",this.token);
  }

  isValidField(field:string):boolean{
    return this.validation.isValidField_V(this.profile,field);
  }
  getErrorMessage(field:string):string{
    return this.validation.getErrorMessage_V(this.profile,field);
  }

  send_data():void{
    if(this.profile.valid){
      const password=this.profile.get('password').value;
      console.log("la contraseña es ",password);
      this.userService.changeUserPassword(this.token,password)
      .subscribe(response=>{
        console.log("respuesta response ",response);
        this.profile.reset();
        this.Alert.successful_account_message();
        this.router.navigate(['/login']);
      },error=>{
        console.log("error ",error);
        this.profile.reset();
        this.Alert.message_error('Oops...','','intentelo mas tarde');
      });
    }
    else{
      console.log("erro debe de llenar los campos perro");
    }
    
  }

}
