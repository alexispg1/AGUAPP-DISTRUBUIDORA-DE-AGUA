export class ServicioOrden {
    constructor(
        public idOrden:number,
        public idServicio:number,
        public cantidad:number,
        public subtotal:number
        ){
    }
}