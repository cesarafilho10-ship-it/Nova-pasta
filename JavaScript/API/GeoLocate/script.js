const pinStatus = document.getElementById("pin-status");

navigator.geolocation.getCurrentPosition(
  function (position) {
    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude);
    console.log("Accuracy: " + position.coords.accuracy);

    pinStatus.src = "logo1.png";
    pinStatus.alt = "Localização permitida";
    pinStatus.classList.remove("oculto");
  },
  function (error) {
    console.log("Não foi possível obter a localização.", error);

    pinStatus.src = "logo2.jpg";
    pinStatus.alt = "Permissão negada";
    pinStatus.classList.remove("oculto");
  }
);