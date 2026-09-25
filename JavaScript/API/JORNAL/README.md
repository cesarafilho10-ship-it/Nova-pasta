# NewsToday

O NewsToday é um site de notícias desenvolvido com HTML, CSS e JavaScript. O projeto utiliza uma API externa para buscar notícias reais e exibi-las de forma dinâmica na página.

## Sobre o projeto

O objetivo do NewsToday é criar um portal de notícias simples, organizado e responsivo, permitindo que o usuário visualize notícias atualizadas sem que elas precisem ser cadastradas manualmente no código.

As notícias são obtidas através da GNews API e apresentadas automaticamente no site.

## Tecnologias utilizadas

- HTML
- CSS
- JavaScript
- GNews API

## Funcionalidades

- Exibição de notícias atualizadas
- Título e descrição das notícias
- Imagem das notícias
- Link para acessar a notícia completa
- Carregamento automático das notícias através da API
- Interface organizada em formato de portal de notícias
- Menu de navegação

## Estrutura do projeto

NewsToday/
│
├── index.html
├── style.css
└── script.js
index.html

Responsável pela estrutura principal do site, incluindo:

Cabeçalho
Nome do NewsToday
Menu de navegação
Área onde as notícias são exibidas
Rodapé
style.css

Responsável pela aparência do site, incluindo:

Cores
Espaçamentos
Tamanho dos textos
Organização dos cards
Cabeçalho
Rodapé
Layout da página
script.js

Responsável pela comunicação com a GNews API.

O JavaScript realiza uma requisição para a API, recebe os dados das notícias e cria os cards automaticamente dentro da página.

# API utilizada

O projeto utiliza a GNews API para obter as notícias.

Site oficial:

https://gnews.io/

A API fornece informações como:

Título da notícia
Descrição
Imagem
Fonte
Data de publicação
Link da notícia
Como executar o projeto
Baixe ou clone o projeto.
Abra a pasta do projeto no Visual Studio Code.
Abra o arquivo script.js.
Adicione sua chave da GNews API:
const API_KEY = "SUA_API_KEY";
Substitua SUA_API_KEY pela chave fornecida pela GNews.
Abra o arquivo `index.html utilizando o Live Server.
O site será carregado no navegador e as notícias serão buscadas automaticamente pela API.
Exemplo de requisição

O JavaScript utiliza uma requisição semelhante a:

const resposta = await fetch(
    `https://gnews.io/api/v4/top-headlines?category=general&lang=pt&country=br&max=10&apikey=${API_KEY}`
);

Depois da resposta, os dados são utilizados para criar os cards de notícias.

## Objetivo acadêmico

Este projeto foi desenvolvido com o objetivo de praticar conceitos de desenvolvimento web, principalmente:

Estruturação de páginas com HTML
Estilização com CSS
Manipulação do DOM
JavaScript assíncrono
Utilização de fetch()
Consumo de APIs
Tratamento de erros
Exibição dinâmica de informações
Autor

## Projeto desenvolvido por Cesar Augusto Coelho Filho.

Licença

Este projeto foi desenvolvido para fins educacionais.