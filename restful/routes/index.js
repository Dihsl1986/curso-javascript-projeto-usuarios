

//let express = require('express');

//Aqui chamamos nosso recurrso de rotas.
//let routes = express.Router();//Router com R Maiúsculo por é um método.



//Criamos nosso este servidor com este metodo.
//Guardamos este servidor criado dentro da variavel server
//Let vai receber o servidor
//Toda solicitação que este servidor receber vai ter as informações dentro da variavel req
//Pare exportar esse modulo para indexes

module.exports = app=>{

    //Mudamos de app.get usamos o routes.get
    app.get("/", (req, res) => {
        //o rimeiro parametro é justamente a rota "/"
    //rota acessivel pelo methodo get
    
            res.statusCode = 200;
            //Aqui vamos passar 2 strings
            res.setHeader("Content-Type", "text/html");
            res.end("<h1>Olá</h1>");
    });
    

};