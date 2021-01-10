import Swal from 'sweetalert2';

export class Alert{

    constructor(){}
    
    successfulRegistration(){
        Swal.fire({
            position:'center',
            icon: 'success',
            title: 'confirma tu cuenta',
            showConfirmButton:true,
            footer:'correo enviado para confirmar tu cuenta',
        })
    }
    sucessful(title:string,status:boolean){
        Swal.fire({
            position:'center',
            icon:'success',
            title: title,
            showConfirmButton:status,
          }) 
    }
    error(title:string,status:boolean){
        Swal.fire({
            position:'center',
            icon:'error',
            title: title,
            showConfirmButton:status,
        }) 
    }
    successful_account_message(){
        Swal.fire(
            'cuenta',
            'tu cuenta a sido recuperada',
            'success'
        )
    }

    message_error(title:string,text:string,footer:string){
        Swal.fire({
            icon: 'error',
            title:title,
            text:text,
            footer:footer,
        })
    }
    
    
  


    
}