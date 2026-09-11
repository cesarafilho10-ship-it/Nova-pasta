const canvas = document.querySelector('#canvas');
const contexto = canvas.getContext('2d');

//comando pra desenhar uma linha
contexto.beginPath();
contexto.moveTo(10, 0);
contexto.lineTo(50, 200);
contexto.stroke();

//comando pra desenhar um retangulo
contexto.fillRect(50, 50, 150, 100);
contexto.strokeRect(100, 100, 150, 100);

//comando pra desenhar um circulo
contexto.beginPath();
contexto.arc(250, 250, 50, 0,  Math.PI * 2 );
contexto.stroke();
