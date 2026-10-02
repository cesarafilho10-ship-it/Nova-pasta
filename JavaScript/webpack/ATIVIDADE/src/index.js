import {saudacao} from "./saudacao.js";

const mensagem = saudacao("Cesar");

console.log(mensagem);

document.body.innerHTML = `
    <h1>${mensagem}</h1>
`;