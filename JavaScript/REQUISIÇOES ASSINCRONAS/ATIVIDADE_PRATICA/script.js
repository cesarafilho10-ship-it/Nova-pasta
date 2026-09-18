const botao = document.getElementById("botao");
const nomeAnime = document.getElementById("nomeAnime");
const resultado = document.getElementById("resultado");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", async () => {

    const nome = nomeAnime.value.trim();

    if (nome === "") {
        mensagem.innerHTML = "Digite o nome de um anime.";
        return;
    }

    mensagem.innerHTML = "Buscando...";
    resultado.innerHTML = "";

    // Consulta que será enviada para a API
    const query = `
        query ($search: String) {

            Page(page: 1, perPage: 12) {

                media(
                    type: ANIME,
                    search: $search
                ) {

                    title {
                        romaji
                        english
                    }

                    averageScore

                    episodes

                    status

                    startDate {
                        year
                    }

                    description

                    coverImage {
                        large
                    }
                }
            }
        }
    `;

    try {

        const resposta = await fetch(
            "https://graphql.anilist.co",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },

                body: JSON.stringify({
                    query: query,

                    variables: {
                        search: nome
                    }
                })
            }
        );

        console.log("Status:", resposta.status);

        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`);
        }

        const dados = await resposta.json();

        console.log("Dados recebidos:", dados);

        const animes = dados.data.Page.media;

        if (!animes || animes.length === 0) {
            mensagem.innerHTML = "Nenhum anime encontrado.";
            return;
        }

        mensagem.innerHTML =
            `${animes.length} animes encontrados.`;

        animes.forEach(anime => {

            const titulo =
                anime.title.english ||
                anime.title.romaji ||
                "Sem título";

            const nota =
                anime.averageScore
                ? anime.averageScore / 10
                : "N/A";

            const ano =
                anime.startDate.year || "N/A";

            const sinopse =
                anime.description
                    ? anime.description.replace(/<[^>]*>/g, "")
                    : "Sinopse não disponível.";

            resultado.innerHTML += `
                <div class="card">

                    <img
                        src="${anime.coverImage.large}"
                        alt="${titulo}"
                    >

                    <div class="card-conteudo">

                        <h2>${titulo}</h2>

                        <p class="nota">
                            ⭐ Nota: ${nota}
                        </p>

                        <p class="info">
                            🎬 Episódios: ${anime.episodes || "N/A"}<br>
                            📺 Status: ${anime.status || "N/A"}<br>
                            📅 Ano: ${ano}
                        </p>

                        <p class="sinopse">
                            ${sinopse}
                        </p>

                    </div>

                </div>
            `;

        });

    } catch (erro) {

        console.error("Erro:", erro);

        mensagem.innerHTML =
            "Erro ao buscar os animes.";

    }

});