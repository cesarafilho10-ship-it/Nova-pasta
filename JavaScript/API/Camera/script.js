const video = document.querySelector("#camera");
const canvas = document.querySelector("#canvas");
const botao = document.querySelector("#tirar-foto");
const foto = document.querySelector("#foto");



navigator.mediaDevices.getUserMedia({
        video: true, audio: true
    })
.then(function(stream) {
    const video = document.querySelector("#camera");
    video.srcObject = stream;
})
.catch(function(error) {
    console.log("Nao foi possivel acessar a camera." , error);
});
botao.addEventListener("click", function() {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const contexto = canvas.getContext("2d");

    contexto.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
    )
}
)