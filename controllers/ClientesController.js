import express from "express";

const router = express.Router();

router.get("/clientes/", (req,res)=>{

    const clientes = 
    [
        {
            imagem: "/images/bob.jpeg",
            nome: "Bob Burnquist",
            cpf: "123.345.678.00",
            endereco: "Rua 1., 230, bairro LA",
          },
      
          {
            imagem: "/images/felipe.jpeg",
            nome: "Felipe Gustavo",
            cpf: "123.345.678.00",
            endereco: "Rua 2., 232, bairro LA",
          },
      
          {
            imagem: "/images/giovanni.png",
            nome: "Giovanni Viana",
            cpf: "123.345.678.00",
            endereco: "Rua 3., 231, bairro LA",
          },
      
          {
            imagem: "/images/paul.jpeg",
            nome: "Paul Rodrigues",
            cpf: "123.345.678.00",
            endereco: "Rua 4., 233, bairro LA",
          },
      
          {
            imagem: "/images/rayssa.jpeg", 
            nome: "Rayssa Leal",
            cpf: "123.345.678.00",
            endereco: "Rua 5., 235, bairro BR",
          }
    ]


    res.render ("clientes",{

        clientes : clientes,
        
    });

});

export default router;
