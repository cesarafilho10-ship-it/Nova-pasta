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

}


// Pegando os elementos do HTML
const nome = document.getElementById("nome");
const preco = document.getElementById("preco");
const categoria = document.getElementById("categoria");
const desconto = document.getElementById("desconto");

const cadastrar =
    document.getElementById("cadastrar");

const listaProdutos =
    document.getElementById("listaProdutos");


// Recupera os produtos salvos
let produtos =
    JSON.parse(localStorage.getItem("produtos")) || [];


// Função para salvar no localStorage
function salvarLocalStorage() {

    localStorage.setItem(
        "produtos",
        JSON.stringify(produtos)
    );

}


// Função para exibir os produtos
function exibirProdutos() {

    listaProdutos.innerHTML = "";

    if (produtos.length === 0) {

        listaProdutos.innerHTML =
            "<p>Nenhum produto cadastrado.</p>";

        return;
    }


    produtos.forEach((produto, indice) => {

        const produtoObjeto = new Produto(
            produto.nome,
            produto.preco,
            produto.categoria,
            produto.desconto
        );

        const precoFinal =
            produtoObjeto.aplicarDesconto();


        const div = document.createElement("div");

        div.classList.add("produto");


        div.innerHTML = `

            <h3>${produto.nome}</h3>

            <p>
                <strong>Categoria:</strong>
                ${produto.categoria}
            </p>

            <p>
                <strong>Preço original:</strong>
                <span class="preco-original">
                    R$ ${produto.preco.toFixed(2)}
                </span>
            </p>

            <p>
                <strong>Desconto:</strong>
                ${produto.desconto}%
            </p>

            <p>
                <strong>Preço com desconto:</strong>
                <span class="preco-final">
                    R$ ${precoFinal.toFixed(2)}
                </span>
            </p>

            <button
                class="btn-excluir"
                onclick="excluirProduto(${indice})">
                Excluir
            </button>

        `;


        listaProdutos.appendChild(div);

    });

}


// Cadastrar produto
cadastrar.addEventListener("click", () => {

    const nomeProduto = nome.value.trim();

    const precoProduto =
        parseFloat(preco.value);

    const categoriaProduto =
        categoria.value.trim();

    const descontoProduto =
        parseFloat(desconto.value) || 0;


    // Verificação dos campos
    if (
        nomeProduto === "" ||
        isNaN(precoProduto) ||
        categoriaProduto === ""
    ) {

        alert("Preencha todos os campos!");

        return;
    }


    // Verifica o desconto
    if (
        descontoProduto < 0 ||
        descontoProduto > 100
    ) {

        alert("O desconto deve estar entre 0% e 100%!");

        return;
    }


    // Cria o produto
    const novoProduto = {

        nome: nomeProduto,

        preco: precoProduto,

        categoria: categoriaProduto,

        desconto: descontoProduto

    };


    // Adiciona o produto na lista
    produtos.push(novoProduto);


    // Salva no localStorage
    salvarLocalStorage();


    // Atualiza a tela
    exibirProdutos();


    // Limpa os campos
    nome.value = "";
    preco.value = "";
    categoria.value = "";
    desconto.value = "";

});


// Função para excluir produto
function excluirProduto(indice) {

    produtos.splice(indice, 1);

    // Atualiza o localStorage
    salvarLocalStorage();

    // Atualiza a tela
    exibirProdutos();

}


// Recupera automaticamente os produtos
// quando a página é aberta
exibirProdutos();