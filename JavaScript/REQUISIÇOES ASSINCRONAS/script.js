// const botao = document.getElementById('buscarUsuarios');
// const resultado = document.getElementById('resultado');

// // fetch('https://jsonplaceholder.typicode.com/users')
// //     .then(response => response.json())
// //     .then(dados => {
// //         console.log(dados);
// //     })
// //     .catch(erro => {
// //         console.log("Erro:", erro);
// //     });






// // botao.addEventListener('click', () => {
// //     fetch('https://jsonplaceholder.typicode.com/users')
// //         .then(response => response.json())
// //         .then(dados => {
// //             console.log(dados);
// //             dados.forEach(usuario => {
// //                 resultado.innerHTML += `
// //                 <p>
// //                 <strong>${usuario.name}</strong>
// //                 </p>
// //                 `;
// //             });
// //         })
// //         .catch(erro => {
// //             console.log("Erro:", erro);
// //         });





// botao.addEventListener('click', async() => {
//     try {
//         const resposta = await fetch(
//             'https://jsonplaceholder.typicode.com/users'
//         );

//         const dados = await resposta.json();

//         resultado.innerHTML = '';

//         dados.forEach(usuario => {

//             resultado.innerHTML += `
//             <p>
//             <strong>${usuario.name}</strong>
//             ${usuario.email}
//             </p>
//             <hr>
//             `;
//          });
//         }
//         catch(erro) {
//             resultado.innerHTML = 'Erro ao buscar os usuários.';          
//             console.log("Erro:", erro);
//         }
// });


botao.addEventListener('click', async() => {

    const id = idUsuario.value;

    if (id===""){
        resultado.innerHTML = 'Por favor, insira um ID de usuário.';
        return; 
    }
    try {
        const resposta = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );

        const dados = await resposta.json();

        resultado.innerHTML = `
        <p>
        <strong>${dados.name}</strong><br>
        Email: ${dados.email}<br>
        Telefone: ${dados.phone}<br>
        Cidade: ${dados.address.city}
        </p>
        <hr>
        `;
    }
    catch(erro) {
        resultado.innerHTML = 'Erro ao buscar o usuário.';
        console.log("Erro:", erro);
    }
});