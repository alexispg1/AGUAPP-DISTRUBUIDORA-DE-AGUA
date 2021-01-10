export class Order {
    constructor(
        public idCliente:number,
        public idRepartidor:number,
        public idUbicacion:number,
        public fechaOrden:string,
        public estatus:number
        ){
    }
}