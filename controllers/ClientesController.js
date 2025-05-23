import express from "express";
import Cliente from "../models/Cliente.js";

const router = express.Router();

// ROTA CLIENTES
router.get("/clientes", function(req, res){
  Cliente.findAll().then(clientes => {
  res.render("clientes", {
  clientes: clientes
  })
  })
  })
  
  // ROTA DE CADASTRO DE CLIENTES
router.post("/clientes/new", (req, res) => {
  const nome = req.body.nome
  const cpf = req.body.cpf
  const endereco = req.body.endereco
  Cliente.create({
  nome : nome,
  cpf : cpf,
  endereco : endereco
  }).then(() => {
  res.redirect("/clientes")
  })
  })

  // ROTA DE EXCLUSÃO DE CLIENTES
router.get("/clientes/delete/:id", (req, res) => {
  const id = req.params.id
  Cliente.destroy({
  where: {
  id : id
  }
  }).then(() => {
  res.redirect("/clientes")
  })
  })

  // ROTA DE EDIÇÃO DE CLIENTES
router.get("/clientes/edit/:id", (req, res) => {
  const id = req.params.id
  Cliente.findByPk(id).then(function(cliente) {
  res.render("clienteEdit", {
  cliente : cliente
  })
  })
  })

  // ROTA DE ALTERAÇÃO DE CLIENTES
router.post("/clientes/update/:id", (req, res) => {
  const id = req.body.id
  const nome = req.body.nome
  const cpf = req.body.cpf
  const endereco = req.body.endereco
  Cliente.update(
  {
  nome : nome,
  cpf : cpf,
  endereco : endereco
  },
  {where: {id : id}}
  ).then(() => {
  res.redirect("/clientes")
  })
  })

router.get("/clientes/", (req,res)=>{

    const Clientes = [
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
