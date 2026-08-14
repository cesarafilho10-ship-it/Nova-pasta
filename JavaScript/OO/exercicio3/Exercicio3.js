//classe
class Produto {

    constructor(nome, preco, estoque){   //o contructor e o metodo que e executado ao criar um novo projeto, decidindo o valor inicial

        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;

    }
    //Metodo
    vender(){
        console.log(`${this.nome} foi vendido.`);
    }
    repor(){
        console.log(`${this.nome} está sendo reabastecido.`);
    }
    alterarpreco(){
        console.log(`${this.nome} teve seu preço alterado, valor antigo: ${this.preco}`);
    }
    

}

const produto1 = new Produto("Notebook", 2500, 10);
console.log("Produto 1: ", produto1);

const produto2 = new Produto("Mouse", 50, 50);
console.log("Produto 2: ", produto2);

const produto3 = new Produto("Teclado", 100, 30);
console.log("Produto 3: ", produto3);

console.log("---------------------------------");
console.log("Atributos do produto 1:  ");
console.log("- ", produto1.nome);
console.log("- ", produto1.preco);
console.log("- ", produto1.estoque);
console.log("---------------------------------");

console.log("---------------------------------");
console.log("Atributos do produto 2:  ");
console.log("- ", produto2.nome   );
console.log("- ", produto2.preco);
console.log("- ", produto2.estoque  );
console.log("---------------------------------");

console.log("---------------------------------");
console.log("Atributos do produto 3:  ");
console.log("- ", produto3.nome   );
console.log("- ", produto3.preco);
console.log("- ", produto3.estoque);
console.log("- ", produto3.matricula  );
console.log("---------------------------------");

produto1.vender();
produto2.repor();
produto3.alterarpreco();
