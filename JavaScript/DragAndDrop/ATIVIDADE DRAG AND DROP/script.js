let pontos = 0;

let vida = 100;

let comidaAtual = null;


// ELEMENTOS

const pontosElemento =
    document.getElementById("pontos");

const barraVida =
    document.getElementById("barraVida");

const boca =
    document.getElementById("boca");

const mensagem =
    document.getElementById("mensagem");

const fala =
    document.getElementById("fala");

const comidas =
    document.querySelectorAll(".comida");


// ==========================
// COMEÇAR A ARRASTAR
// ==========================

comidas.forEach(comida => {

    comida.addEventListener("dragstart", function(evento) {

        comidaAtual = this;

        this.classList.add("arrastando");

        evento.dataTransfer.setData(
            "text/plain",
            this.dataset.nome
        );

        boca.classList.add("ativa");

        mensagem.textContent =
            "Leve a comida até a boca! 👄";
    });


    // TERMINOU DE ARRASTAR

    comida.addEventListener("dragend", function() {

        this.classList.remove("arrastando");

        boca.classList.remove("ativa");

    });

});


// ==========================
// PERMITIR SOLTAR
// ==========================

boca.addEventListener("dragover", function(evento) {

    evento.preventDefault();

    boca.classList.add("ativa");

});


// ==========================
// SOLTOU NA BOCA
// ==========================

boca.addEventListener("drop", function(evento) {

    evento.preventDefault();

    boca.classList.remove("ativa");

    if (!comidaAtual) {
        return;
    }

    alimentar(comidaAtual);

});


// ==========================
// ALIMENTAR
// ==========================

function alimentar(comida) {

    const valor =
        Number(comida.dataset.pontos);

    const nome =
        comida.dataset.nome;


    // COMIDA BOA

    if (valor > 0) {

        pontos += valor;

        mensagem.textContent =
            `😋 ${nome}! +${valor} pontos!`;

        fala.textContent =
            "Hummm! 😋";

    }


    // COMIDA RUIM

    else {

        pontos += valor;

        vida -= 20;

        if (vida < 0) {
            vida = 0;
        }

        mensagem.textContent =
            `🤢 ${nome}! Você perdeu vida!`;

        fala.textContent =
            "Eca! 🤢";
    }


    atualizarTela();


    // ESCONDE A COMIDA

    comida.style.visibility = "hidden";


    setTimeout(() => {

        comida.style.visibility = "visible";

    }, 800);


    comidaAtual = null;


    verificarVida();
}


// ==========================
// ATUALIZAR TELA
// ==========================

function atualizarTela() {

    pontosElemento.textContent =
        pontos;

    barraVida.style.width =
        vida + "%";

}


// ==========================
// VERIFICAR VIDA
// ==========================

function verificarVida() {

    if (vida <= 0) {

        fala.textContent =
            "Game Over! 😵";

        mensagem.textContent =
            "💀 Você perdeu todas as vidas!";

        return;
    }


    if (pontos >= 100) {

        fala.textContent =
            "Você venceu! 🏆";

        mensagem.textContent =
            "🎉 PARABÉNS! Você fez 100 pontos!";

    }

}


// ==========================
// REINICIAR
// ==========================

document
    .getElementById("reiniciar")
    .addEventListener("click", function() {

        pontos = 0;

        vida = 100;

        pontosElemento.textContent = 0;

        barraVida.style.width = "100%";

        fala.textContent =
            "Vamos comer! 😊";

        mensagem.textContent =
            "Arraste uma comida até a boca! 👄";

        comidas.forEach(comida => {

            comida.style.visibility =
                "visible";

        });

    });