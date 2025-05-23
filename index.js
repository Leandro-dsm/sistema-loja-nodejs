import express from "express";

const app = express();

import ProdutosController from "./controllers/ProdutosController.js"
import ClientesController from "./controllers/ClientesController.js"
import PedidosController from "./controllers/PedidosController.js"

// Importando o Sequelize
import connection from "./config/sequelize-config.js";

// Realizando a conexão com o banco de dados
connection.authenticate().then(()=> {
  console.log("Conexão com o banco de dados feita com sucesso!")
  }).catch((error) => {
  console.log(error)
  });

  // Criando o banco de dados se ele não existir
connection.query(`CREATE DATABASE IF NOT EXISTS
  loja;`).then(() => {
  console.log("O banco de dados está criado.")
  }).catch((error) => {
  console.log(error)
  });

  // Permite receber dados vindo de formulários
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.set("view engine", "ejs");

app.use(express.static('public'));

app.use("/", ProdutosController);
app.use("/", ClientesController);
app.use("/", PedidosController);


app.get("/", (req,res)=>{

    res.render("index.ejs");

});



app.listen(8081, (error) => {
  if (error) {
    console.log("Ocorreu um erro: " + error);
  } else {
    console.log("O servidor foi iniciado com sucesso!");
  }
});
