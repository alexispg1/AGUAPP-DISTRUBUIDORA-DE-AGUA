import {FormGroup} from '@angular/forms';
import {User}from '../models/user'
export class Validation{
    
    constructor(){}

    isValidField_V(register:FormGroup,field:string):boolean{
        var FormControl=register.get(field);
        if( (FormControl.touched ||FormControl.dirty )&&FormControl.invalid){
            return true;
        }
        else{
            return false;
        }
    }
    getErrorMessage_V(control:FormGroup,field:string):string{
        if(control.get(field).hasError('required')){
            return "campo requerido"
        }
        if(control.get(field).hasError('maxlength')){
            return "tu número de teléfono debe contener 10 digitos";
        }
        if(control.get(field).hasError('pattern')){
            
            if(control.get(field)===control.get('email')){
              return "dirección electrónica invalido";
            } 
            if(control.get(field)===control.get('phone')){
              return "teléfono móvil invalido";
            }
            else{
              return "la contraseña debe contener almenos una letra mayuscula,minuscula,un digito y un caracter especial";
            }
        }
        if(control.get(field).errors.mustMatch){
            return "las contraseñas no coinciden";
        }
        if(control.get(field).errors.CurrentPassword){
            return "contraseña no coincide con la actual";
        }
        
    }
    get_person_V(register:FormGroup,idRol:number):User{
        var name=register.get('name').value;
        var lastName=register.get('lastName').value;
        var email=register.get('email').value;
        var phone=register.get('phone').value;
        var idRol=idRol;
        var password=register.get('password').value;
        let person=new User(name,lastName,email,phone,idRol,password);
        return person;
    }


}