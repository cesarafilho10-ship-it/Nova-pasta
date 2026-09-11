// ============================
// LOCALIZAÇÃO
// ============================

navigator.geolocation.getCurrentPosition(

    function(posicao) {

        document.getElementById("latitude").textContent =
            posicao.coords.latitude;

        document.getElementById("longitude").textContent =
            posicao.coords.longitude;

        document.getElementById("precisao").textContent =
            posicao.coords.accuracy.toFixed(2);

    },

    function(error) {

        console.log("Erro na localização:", error);

    }
);


// ============================
// CÂMERA
// ============================

const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const foto = document.getElementById("foto");
const button = document.getElementById("capture");

navigator.mediaDevices.getUserMedia({

    video: true

})

.then(function(stream) {

    console.log("Câmera funcionando!");

    video.srcObject = stream;

})

.catch(function(error) {

    console.log("Erro na câmera:", error);

});


// ============================
// TIRAR FOTO
// ============================

button.addEventListener("click", function() {

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const contexto = canvas.getContext("2d");

    contexto.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
    );

    foto.src = canvas.toDataURL("image/png");

});
