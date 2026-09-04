navigator.geolocation.getCurrentPosition(
    function(posicao) {
        console.log("Latitude:", posicao.coords.latitude);
        console.log("Longitude:", posicao.coords.longitude);
        console.log("precision:", posicao.coords.accuracy);
    },
    function(error) {
        document.getElementById("resultado").style.display = "block";
    }
);