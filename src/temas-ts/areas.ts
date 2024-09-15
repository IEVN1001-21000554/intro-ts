export class Figura {
    aRectangulo: number;
    aTriangulo: number;
    aCirculo: number;

    constructor(aRectangulo: number, aTriangulo: number, aCirculo: number) {
        this.aRectangulo = aRectangulo;
        this.aTriangulo = aTriangulo;
        this.aCirculo = aCirculo;
    }

    AreaRectangulo(base:number, altura:number): number {
        let nombre = 'rectangulo';
        this.aRectangulo = base * altura;
        console.log(`El área del ${nombre} es ${this.aRectangulo}`);
        return this.aRectangulo;
    }

    AreaTriangulo(base:number, altura:number): number {
        let nombre = 'triangulo';
        this.aTriangulo = (base * altura) / 2;
        console.log(`El área del ${nombre} es ${this.aTriangulo}`);
        return this.aTriangulo;
    }

    AreaCirculo(radio:number): number {
        let nombre = 'circulo';
        this.aCirculo = 3.1416 * radio * radio;
        console.log(`El área del ${nombre} es ${this.aCirculo}`);
        return this.aCirculo;
    }
}

let rectangulo = new Figura(0,0,0);
rectangulo.AreaRectangulo(10,25);

let triangulo = new Figura(0,0,0);
triangulo.AreaTriangulo(5,6);

let circulo = new Figura(0,0,0);
circulo.AreaCirculo(10);

