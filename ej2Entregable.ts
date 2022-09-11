class Auto {
    public estaEncendido: boolean;
    public marca: string;
    public modelo: string;
    public año: number;
    public color: string;
    public velocidad: number;
    public numeroPuertas: number;
    public vehiculo: string;
    public combustible: string;
    public consumo: number;
    public tanque: number;
    public nivelCombustible: number;

    constructor(paramMarca:string,paramModelo: string, paramColor: string, paramAño: number, paramVelocidad:number) {
        this.marca = paramMarca;
        this.modelo= paramModelo;
        this.color = paramColor;
        this.velocidad = paramVelocidad;
        this.año= paramAño;
    }

    prenderApagar():void{
    if(this.estaEncendido === true){
        this.estaEncendido = false;
    }else{
        this.estaEncendido = true;
    }
}
    obtenerMarcaVehiculo(): string {
    return this.marca + ' ' + this.modelo;
    }
    añoVehiculo():number{
        return this.año;
    }
    colorVehiculo(): string {
        return this.color;
    }
    velocidadActual(): number {
        return this.velocidad;
    }
    cantidadPuertas():number {
        return this.numeroPuertas;
    }
    tipoVehiculo(): string {
        return this.vehiculo;
    }
    tipoCombustible():string{ 
    return this.combustible;
    }
    consumoCombustible():number {
        return this.consumo;
    }
    capacidadTanque() : number{
        return this.tanque;
    }
    acelerarVehiculo(km: number) {
    this.velocidad += km;
    }

    frenarVehiculo():void {
        this.velocidad === 0;
    }
}
let autoNuevo = new Auto('Volkswagen', 'Gol', 'Azul', 2018 , 50);
let marcaAutoNuevo= autoNuevo.obtenerMarcaVehiculo();
let añoAutoNuevo = autoNuevo.añoVehiculo();
let colorAutoNuevo = autoNuevo.colorVehiculo();
let velocidadAutoNuevo= autoNuevo.velocidadActual();

console.log('Mi nuevo auto es un '+marcaAutoNuevo+', año '+ añoAutoNuevo+', color '+colorAutoNuevo+' y ahora esta rodando a '+velocidadAutoNuevo+' km/h.');