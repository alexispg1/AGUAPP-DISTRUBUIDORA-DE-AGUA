import {AbstractControl } from "@angular/forms";
import * as CryptoJS from 'crypto-js';
export class CurrentPassword{
    isValidPassword="";
    constructor(){}

    set_isValidPassword(isValidPassword:any){
        this.isValidPassword=isValidPassword;
    }

    get_isValidaPassword(){
        return this.isValidPassword;
    }
}

var current =new CurrentPassword();

export function myCurrentPassword(isValidPassword:string){
    console.log("password ",isValidPassword);
    current.set_isValidPassword(isValidPassword);
}

export function ValidateOldPassword(control: AbstractControl){
    var isValidPassword=current.get_isValidaPassword();
    console.log("hola mundo xdxd ",isValidPassword)
    if(isValidPassword==="false"){
        console.log("entro en el if perro")
        return {CurrentPassword:true};  
    }
    else{
        return null;
    }
    
}



