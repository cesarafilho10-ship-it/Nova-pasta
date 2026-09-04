navigator.geolocation.getCurrentPosition(
    function(posicao) {
        console.log("Latitude:", posicao.coords.latitude);
        console.log("Longitude:", posicao.coords.longitude);
        console.log("precision:", posicao.coords.accuracy);
        document.getElementById("latitude").textContent = posicao.coords.latitude;
        document.getElementById("longitude").textContent = posicao.coords.longitude;
        document.getElementById("precisao").textContent = posicao.coords.accuracy;
    },
    function(error) {
        document.getElementById("resultado").style.display = "block";
    }
);
navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
})
.then(function(stream) {
    const video = document.querySelector('#video');
    video.srcObject = stream;
})
.catch(function(error) {
    console.log("Não foi possível acessar a câmera.", error);
});