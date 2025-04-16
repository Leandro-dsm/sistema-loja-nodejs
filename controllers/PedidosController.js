import express from "express";

const router = express.Router();


router.get("/pedidos/", (req, res) => {

    const pedidos = [
        {
            imagem:'/images/lixa.jpe',
            numeroPedido: 1,
            valor: 65
        },
        {
            imagem:'/images/rolamento.png',
            numeroPedido: 2,
            valor: 240
        },
        {
            imagem:'/images/roda.jpeg',
            numeroPedido: 3,
            valor: 660
        },
        {
            imagem: '/images/truck.png',
            numeroPedido: 4,
            valor: 800
        },
        {
            imagem: '/images/shapemaple.jpg',
            numeroPedido: 5,
            valor: 1250
        }
    ]
    
        res.render("pedidos", {
    
            pedidos: pedidos,
            
        })
    
    });

export default router;
