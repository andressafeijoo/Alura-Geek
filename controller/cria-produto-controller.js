import { produtoServices } from "../services/produto-servicos.js"

const form = document.querySelector("[data-form]")

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const url = document.querySelector("[data-url]").value;
    const nome = document.querySelector("[data-nome]").value;
    const preco = document.querySelector("[data-preco]").value;

    produtoServices
        .criaProduto(nome, url, preco)
        .then((resposta) => {
            window.location.href = "../views/index.html";
            console.log(resposta);
        })
        .catch((error) => {
            console.log(error);
        });
});


