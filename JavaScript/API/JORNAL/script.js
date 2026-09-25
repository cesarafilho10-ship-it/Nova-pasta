const API_KEY = "debfa5832cdfba5425f6ca59b2f86f42";

const noticias = document.getElementById("noticias");

async function carregarNoticias() {

    try {

        const resposta = await fetch(
            `https://gnews.io/api/v4/top-headlines?category=general&lang=pt&country=br&max=10&apikey=${API_KEY}`
        );

        const dados = await resposta.json();

        console.log(dados);

        if (!resposta.ok) {
            throw new Error(dados.errors || "Erro ao carregar notícias");
        }

        noticias.innerHTML = "";

        dados.articles.forEach(noticia => {

            const artigo = document.createElement("article");

            artigo.classList.add("noticia");

            artigo.innerHTML = `
                <img 
                    src="${noticia.image || 'https://via.placeholder.com/400x250?text=Sem+imagem'}"
                    alt="${noticia.title}"
                >

                <h2>${noticia.title}</h2>

                <p>
                    ${noticia.description || "Sem descrição disponível."}
                </p>

                <a href="${noticia.url}" target="_blank">
                    Ler notícia
                </a>
            `;

            noticias.appendChild(artigo);
        });

    } catch (erro) {

        console.error(erro);

        noticias.innerHTML = `
            <h2>Erro ao carregar notícias</h2>
            <p>${erro.message}</p>
        `;
    }
}

carregarNoticias();