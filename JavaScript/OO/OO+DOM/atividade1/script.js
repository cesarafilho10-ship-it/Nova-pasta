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
    exibirNaTela() {
        const resultado = document.querySelector('#resultado');
        const precoFinal = this.aplicarDesconto();
        resultado.innerHTML = `
            <div class="produto">
                <h2>${this.nome}</h2>
                <p>
                    <strong>Categoria:</strong>
                    ${this.categoria}
                </p>
                <p>
                    <strong>Preço:</strong>
                    R$ ${this.preco.toFixed(2)}
                </p>
                <p>
                    <strong>Desconto:</strong>
                    ${this.desconto}%
                </p>
                <p class="preco-final">
                    Preço com desconto:
                    R$ ${precoFinal.toFixed(2)}
                </p>

            </div>
        `;
    }
}


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
    console.log(produto);
    produto.exibirNaTela();

});