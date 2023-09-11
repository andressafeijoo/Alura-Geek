//GET
const listaProduto = () => {
    return fetch('http://localhost:3000/produto')
    .then((resposta) => resposta.json())
    .catch((error) => console.log(error))
}

//POST

const criaProduto = (imageurl, nome, preco) => {
    return fetch('http://localhost:3000/produto', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            imageurl,
            nome,
            preco,
        })
    })
    .then((resposta) => {
        if (resposta.ok) {
            return resposta.body
        }
        throw new Error ("Não foi possível criar um produto");
    });  
};

export const produtoServices = {
    listaProduto,
    criaProduto,
};

