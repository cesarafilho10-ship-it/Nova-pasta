//classe
class Carro {

    constructor(marca, modelos, ano, cor){   //o contructor e o metodo que e executado ao criar um novo projeto, decidindo o valor inicial

        this.marca = marca;
        this.modelos = modelos;
        this.ano = ano;
        this.cor = cor;
         



    }
    //Metodo
    ligar(){
        console.log("Carro ligado");
    }
    Acelerar(){
        console.log("Acelerando");
    }
    frear(){
        console.log(`${this.modelos} freiou.`);
    }
    

}

const carro1 = new Carro("Volkswagen", "Gol", 2022, "preto");
console.log("Carro 1: ", carro1);

const carro2 = new Carro("Toyota", "corolla", 2025, "branco");
console.log("Carro 2: ", carro2);

const carro3 = new Carro("Honda", "Civic", 2023, "prata");
console.log("Carro 3: ", carro3);

console.log("---------------------------------");
console.log("Atributos do carro 1:  ");
console.log("- ", carro1.marca);
console.log("- ", carro1.modelos);
console.log("- ", carro1.ano);
console.log("- ", carro1.cor);
console.log("---------------------------------");

console.log("---------------------------------");
console.log("Atributos do carro 2:  ");
console.log("- ", carro2.marca);
console.log("- ", carro2.modelos);
console.log("- ", carro2.ano);
console.log("- ", carro2.cor);
console.log("---------------------------------");

console.log("---------------------------------");
console.log("Atributos do carro 3:  ");
console.log("- ", carro3.marca);
console.log("- ", carro3.modelos);
console.log("- ", carro3.ano);
console.log("- ", carro3.cor);
console.log("---------------------------------");

carro1.ligar();
carro1.Acelerar();
carro1.frear();

carro2.ligar();
carro2.Acelerar();
carro2.frear();

carro3.ligar();
carro3.Acelerar();
carro3.frear();