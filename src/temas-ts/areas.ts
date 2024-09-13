class Figura{
        nombre:string;
        base:number;
        altura:number;
        resultado:number;
        constructor(nombre:string, resultado:number){
            this.nombre=nombre;
            this.base=5;
            this.altura=6;
            this.resultado=resultado;
        }
        imprimir():void{
            console.log(`El area del ${this.nombre} es ${this.resultado}`);
        }
        AreaPrisma(base:number, altura:number):number{
            this.nombre='Prisma';
            let areabase = this.base*this.base;
            this.resultado = areabase*this.altura;
            return this.resultado;
        }

        AreaPiramide(base:number, altura:number):void{

        }
        AreaCilindro(base:number, radio:number):void{

        }
        
}
