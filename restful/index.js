//Carregamos nosso módulo na linha 2
const express = require('express');
const consign = require('consign');

//solicitamos o body-parser
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

//Aqui vamos solicitar o arquivo que acabamos de criar.
//Agora preciso falar com express que eu estou utilizando estas duas rotas.
//let routesIndex = require('./routes/index');
//let routesUsers = require('./routes/users');

//Essa variavel vai invocar o express que é uma função ele vai retornar
//toda nossa aplicação e conjunto de informações
let app = express();

//agora vamos user esse bodyParser dentro do express
app.use(bodyParser.urlencoded({ extended: false, limit:'50mb' }));
app.use(bodyParser.json({ limit:'50mb' }));

app.use(expressValidator());
//vamos invocar o consign pedindo para incluir a pasta routes
//Vai incluir todos os arquivos que eu criar na pastas routes
consign().include('routes').include('utils').into(app);
//incluindo aonde, no into app


 
//Usamos o metodo app.use é como se você quisesse usar mais um plugin.
//feito isso nosso servidor precisa continuar funcionando do mesmo jeito.
//app.use(routesIndex);

//Quer dizer que essas rotas de usúarios começa com /users
//app.use('/users', routesUsers);


//A variavel que estamos recebendo do nosso servidor
// Mandamos fica ouvindo na porta 300
//Mandamos ouvir em uma respectiva porta
//o IP e arrow function do que el tem que executar
app.listen(4000, '127.0.0.1', ()=>{

    console.log("Servidor esta rodando!!")

});