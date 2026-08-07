//classe
class Aluno {

    constructor(nome, idade, curso, matricula){   //o contructor e o metodo que e executado ao criar um novo projeto, decidindo o valor inicial

        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.matricula = matricula;
         



    }
    //Metodo
    aprender(){
        console.log(`${this.nome} está aprendendo.`);
    }
    estudar(){
        console.log(`${this.nome} está estudando.`);
    }
    apresentar(){
        console.log(`${this.nome} está apresentando sobre ${this.curso}.`);
    }
    

}

const aluno1 = new Aluno("João", 17, "mecânica", "12345");
console.log("Aluno 1: ", aluno1);


const aluno2 = new Aluno("Maria", 16, "Ciências da Computação", "67890");
console.log("Aluno 2: ", aluno2);

const aluno3 = new Aluno("Pedro", 14, "automação", "54321");
console.log("Aluno 3: ", aluno3);

console.log("---------------------------------");
console.log("Atributos do aluno 1:  ");
console.log("- ", aluno1.nome);
console.log("- ", aluno1.idade);
console.log("- ", aluno1.curso);
console.log("- ", aluno1.matricula);
console.log("---------------------------------");

console.log("---------------------------------");
console.log("Atributos do aluno 2:  ");
console.log("- ", aluno2.nome   );
console.log("- ", aluno2.idade);
console.log("- ", aluno2.curso  );
console.log("- ", aluno2.matricula  );
console.log("---------------------------------");

console.log("---------------------------------");
console.log("Atributos do aluno 3:  ");
console.log("- ", aluno3.nome   );
console.log("- ", aluno3.idade);
console.log("- ", aluno3.curso);
console.log("- ", aluno3.matricula  );
console.log("---------------------------------");

aluno1.estudar();
aluno2.aprender();
aluno3.apresentar();
