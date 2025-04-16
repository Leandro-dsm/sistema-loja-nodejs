import express from "express";
// Carregando o método do Express para gerenciamento de Rotas

const router = express.Router();

// ROTA DE PRODUTOS

router.get("/produtos/", (req,res) =>{

    const produtos = [
        {
            imagem: "/images/shapemaple.jpg",
            nome: "Shape Maple",
            preco: 250,
            categoria: "Esporte"
        },
        {
            imagem: "/images/truck.png",
            nome: "Truck",
            preco: 200,
            categoria: "Esporte"
        },
        {
            imagem: "/images/roda.jpeg",
            nome: "Rodas",
            preco:220,
            categoria: "Esporte"
        },
        {
            imagem: "/images/rolamento.png",
            nome: "Rolamento",
            preco: 120,
            categoria: "Esporte"
        },
        {
            imagem: "/images/lixa.jpeg",
            nome: "Lixa",
            preco:65,
            categoria: "Esporte"
        }
    ]

    res.render("produtos",{
        // Enviando a variável produto para a página
        produtos : produtos,
        // o produto da esquerda é a variável que é chamada na página
        // o produto no lado direito é o valor da variável
    });
});

// Exportando o módulo
export default router;
