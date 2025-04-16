import express from "express";

const app = express();

import ProdutosController from "./controllers/ProdutosController.js"
import ClientesController from "./controllers/ClientesController.js"
import PedidosController from "./controllers/PedidosController.js"

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
