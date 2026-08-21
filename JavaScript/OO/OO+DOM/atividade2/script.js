class Produto {

    constructor(nome, preco, categoria, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;
    }

    aplicarDesconto() {
        const valorDesconto =
            this.preco * (this.desconto / 100);
        const precoFinal =
            this.preco - valorDesconto;
        return precoFinal;
    }

    excluirProduto(indice) {
        produtos.splice(indice, 1);
        this.exibirNaTela();
    }

    exibirNaTela() {
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML = "";

        produtos.forEach((produto, indice) => {
            const precoFinal = produto.aplicarDesconto();

            resultado.innerHTML += `
                <div class="produto">
                    <h2>${produto.nome}</h2>

                    <p>
                        <strong>Categoria:</strong>
                        ${produto.categoria}
                    </p>

                    <p>
                        <strong>Preço:</strong>
                        R$ ${produto.preco.toFixed(2)}
                    </p>

                    <p>
                        <strong>Desconto:</strong>
                        ${produto.desconto}%
                    </p>

                    <p class="preco-final">
                        <strong>Preço com desconto:</strong>
                        R$ ${precoFinal.toFixed(2)}
                    </p>

                    <button onclick="produtos[${indice}].excluirProduto(${indice})">
                        Excluir
                    </button>
                </div>
            `;
        });
    }
}

const produtos = [];

const nome = document.querySelector('#nome');
const preco = document.querySelector('#preco');
const categoria = document.querySelector('#categoria');
const desconto = document.querySelector('#desconto');
const botaocadastrar =
    document.querySelector('#botaocadastrar');


botaocadastrar.addEventListener('click', function() {

    const produto = new Produto(
        nome.value,
        Number(preco.value),
        categoria.value,
        Number(desconto.value)
    );

    produtos.push(produto);
    console.log(produtos);
    produto.exibirNaTela();

});