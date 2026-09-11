const canvas = document.querySelector('#canvas');
const contexto = canvas.getContext('2d');

contexto.lineWidth = 14;
contexto.lineCap = 'round';
contexto.lineJoin = 'round';

//tronco 
contexto.beginPath();
contexto.moveTo(250, 200);
contexto.lineTo(250, 107);
contexto.stroke();


//cabeça
contexto.beginPath();
contexto.arc(250, 80, 27, 0,  Math.PI * 2 );
contexto.stroke();

//perna esquerda
contexto.beginPath();
contexto.moveTo(250, 200);
contexto.lineTo(200, 250);
contexto.stroke();

//perna direita
contexto.beginPath();
contexto.moveTo(250, 200);
contexto.lineTo(300, 250);
contexto.stroke();

//panturrilha esquerda
contexto.beginPath();
contexto.moveTo(200, 350);
contexto.lineTo(200, 250);
contexto.stroke();

//panturrilha direita
contexto.beginPath();
contexto.moveTo(300, 350);
contexto.lineTo(300, 250);
contexto.stroke();

//braco esquerdo
contexto.beginPath();
contexto.moveTo(250, 120);
contexto.lineTo(200, 150);
contexto.stroke();

//braco direito
contexto.beginPath();
contexto.moveTo(250, 120);
contexto.lineTo(300, 150);
contexto.stroke();

//antebraço esquerdo
contexto.beginPath();
contexto.moveTo(200, 150);
contexto.lineTo(270, 170);
contexto.stroke();

//antebraço direito
contexto.beginPath();
contexto.moveTo(300, 150);
contexto.lineTo(350, 120);
contexto.stroke();