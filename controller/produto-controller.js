import { produtoServices } from "../services/produto-servicos.js";

const novoProduto = (imageurl, nome, preco, id) => {
    const card = document.createElement('div');

    const conteudo = `
    <div class="produto">
            <img src="${imageurl}" alt="img" class="imagem-produto">
            <h1 class="name" > ${nome} </h1>
            <p class="preco" >R$ ${preco} </p>
            <a class="ver-produto" href="/views/pagina-produto.html?id=${id}">Ver Produto</a>
        </div>
    `;

    card.innerHTML = conteudo;

    return card
};

const produtos = document.querySelector("[data-product]");

const render = async () => {
    try{
        const listaProduto = await produtoServices.listaProduto()
        listaProduto.forEach(elemento => {
            produtos.appendChild(
                novoProduto(
                    elemento.imageurl,
                    elemento.nome,
                    elemento.preco,
                    elemento.id
                )
            );
        });
    }catch (error){
        console.log(error)
    }
};

render();