import { Component, OnInit } from '@angular/core';
import {Validators,FormGroup,FormBuilder} from '@angular/forms';
import {UserService} from 'src/app/services/user.service';
import {Iuser} from 'src/app/models/InterfaceUser'
import {User} from 'src/app/models/user';
import {regex} from 'src/environments/environment.prod';
import {Alert} from 'src/app/alerts/alert';
import {myCurrentPassword,ValidateOldPassword} from 'src/app/profile/customvalidator';
import {Validation} from '../formValidations/validation';
import Swal from 'sweetalert2';
import {MustMatch} from 'src/app/register/confirm-password.validator';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  Iuser:Iuser;
  id:number=0;
  token:string='';
  status:boolean=false;
  button_status_profile=true;
  status_password:boolean=false;
  button_status_password=true;
  idRol:number=0;
  hide = true;
  alert=new Alert();
  validation=new Validation();
  user_data:any;
  password:string="";
  change_password_is_valid=false;
  profile=this.profileForm.group({
    name:['',[Validators.required]],
    last_name:['',[Validators.required]],
    cell_phone:['',[Validators.required,Validators.maxLength(10),Validators.pattern(regex.validate_cell_phone)]],
    email:['',[Validators.required,Validators.pattern(regex.validate_email)]],
  })

  profilePassword=this.passwordForm.group({
    before_password:['',[Validators.required]],
    new_password:['',[Validators.required,Validators.pattern(regex.validate_password)]],
    password_confirmation:['',[Validators.required]]
  },
  {
    validator: MustMatch('new_password', 'password_confirmation')
  });

  constructor(private userService:UserService,private profileForm:FormBuilder,
    private passwordForm:FormBuilder) { 

  }
  ngOnInit() {
    this.profile.disable();
    this.profilePassword.disable();
    this.user_data= JSON.parse(localStorage.getItem('usuario'));
    console.log("token es ",this.user_data.token);
    this.userService.getUser(this.user_data.token)
    .subscribe(response=>{
      console.log("respuesta ",response);
      this.Iuser=response;
      this.initialize_data();
    },error=>{
      console.log("error ",error);
    });
  }
  initialize_data(){
    let user_name=this.Iuser.name;
    let user_last_name=this.Iuser.lastName;
    let user_email=this.Iuser.email;
    let user_cell_phone=this.Iuser.phone;
    this.profile.controls['name'].setValue(user_name);
    this.profile.controls['last_name'].setValue(user_last_name);
    this.profile.controls['email'].setValue(user_email);
    this.profile.controls['cell_phone'].setValue(user_cell_phone);
  }

  profile_edit(){
    if(this.status==false){
      this.status=true;
      this.button_status_profile=false;
      this.profile.enable();
      this.initialize_data(); 
    }
    else{
      this.deactivateProfileFields();
    }
  }

  password_edit(){
    if(this.status_password==false){
      this.status_password=true;
      this.button_status_password=false;
      this.profilePassword.enable();
      this.profilePassword.reset();
    }
    else{
      this.deactivatePasswordFields();
    }
  }

  change_data():void{
    if(this.profile.valid){
      var name=this.profile.get('name').value;
      var lastName=this.profile.get('last_name').value;
      var email=this.profile.get('email').value;
      var phone=this.profile.get('cell_phone').value;
      var user =new User(name,lastName,email,phone);
      this.userService.updateUser(this.user_data.token,user)
      .subscribe(response=>{
        this.Iuser=response;
        this.alert.sucessful("actualizado",true);
        this.deactivateProfileFields();
      },error=>{
        console.log("error ",error);
      });
    }

  }    
  
  change_password():void{
    if(this.profilePassword.valid){
      var password=this.profilePassword.get('before_password').value
      this.oldPasword(password);
    } 
  }

  isValidField(field:string,myForm:FormGroup){
    return this.validation.isValidField_V(myForm,field);
  }

  getErrorMessage(field:string,myForm:FormGroup):string{
    return this.validation.getErrorMessage_V(myForm,field);
  }

  oldPasword(password:string):void{
    this.userService.usersCurrentpassword(this.user_data.token,password)
    .subscribe(response=>{
      console.log("repuesta ",response);
      this.updatePassword(response,password);
    },
    error=>{
      console.log("error",error);
    });
    
  }
  updatePassword(response:string,password:string):void{
    if(response==="true"){
      this.change_password_is_valid=false;
      console.log("cambiar contraseña concidio ",this.change_password_is_valid);
      this.userService.changeUserPassword(this.user_data.token,password)
      .subscribe(response=>{
        console.log("respuesta ",response);
        this.profilePassword.reset();
        this.deactivatePasswordFields();
        this.alert.sucessful("actualizado",true);
      },error=>{
        console.log("error",error);
      });
    }
    else{
      this.change_password_is_valid=true;
      console.log("no cambiar contraseña concidio ",this.change_password_is_valid);
    }
  }
  delete_user(){
    console.log("delete user");
    this.userService.deleteUser(this.user_data.token)
    .subscribe(response=>{
      console.log("response ",response);
      localStorage.clear();
    },error=>{
      console.log("error ",error);
    })
  }
 
  deactivateProfileFields():void{
    this.status=false;
    this.button_status_profile=true;
    this.profile.disable();
    this.initialize_data();
  }

  deactivatePasswordFields():void{
    this.status_password=false;
    this.button_status_password=true;
    this.profilePassword.disable();
    this.profilePassword.reset();
  }


} 

