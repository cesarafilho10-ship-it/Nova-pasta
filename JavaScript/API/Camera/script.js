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