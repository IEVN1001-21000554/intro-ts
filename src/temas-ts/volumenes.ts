import { Figura } from './areas.ts';

export class Volumen extends Figura {
    altura:number;
    constructor(aRectangulo: number, aTriangulo: number, aCirculo: number, altura:number) {
        super(aRectangulo, aTriangulo, aCirculo);
        this.altura=altura;
    }

    VolumenPrisma(): number {
        let volumenPrisma = this.aRectangulo * this.altura;
        console.log(`El volumen del prisma es ${volumenPrisma}`);
        return volumenPrisma;
    }

    VolumenPiramide(): number {
        let volumenPiramide = (this.aTriangulo * this.altura) / 3;
        console.log(`El volumen de la pirámide es ${volumenPiramide}`);
        return volumenPiramide;
    }

    VolumenCilindro(): number {
        let volumenCilindro = this.aCirculo * this.altura;
        console.log(`El volumen del cilindro es ${volumenCilindro}`);
        return volumenCilindro;
    }
}

let prisma = new Volumen(250, 0, 0, 4);
prisma.VolumenPrisma();

let piramide = new Volumen(0, 15, 0, 8);
piramide.VolumenPiramide();

let cilindro = new Volumen(0, 0, 314.16, 6);
cilindro.VolumenCilindro();

