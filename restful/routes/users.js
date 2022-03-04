//solicitamos nedb
let NeDB = require('nedb');

//e vamos criar o nosso banco
let db = new NeDB({ 
    //E passamos algumas Configurações
    filename:'users.db',
    autoload: true
})
//Não precisamos fazer o require dentro destes arquivos
//Porque o consign ele vai passar pra gente a nossa vvariavel aap
//const express = require('express');
//let  routes = express.Router();



//fução que recebe o app
module.exports = (app) => {

let route = app.route('/users')
    
//Aqui vai ser só route em vez de app e não preciso passar mais o /users
route.get((req, res) => {
            //Aqui precisamos passar um objeto doque estamos procurando
            //Como queremos que lista todos usuarios não vamos passar nada do objeto vazio
                        //Aqui vamos ordenar por: pode coloca 1 se quiser acendente -1
                                        //Aqui vamos executar com err e segundo que é a informação propriamente dita
            db.find({}).sort({name: 1}).exec((err, users)=>{

                if(err) { 
                    app.utils.error.send(err, req, res);
                } else {

                    res.statusCode = 200;
                    //Aqui vamos passar 2 strings
                    res.setHeader('Content-Type', 'application/json');
                    res.json({
                        //quando vc tem uma chave com o mesmo nome de uma variavel, basta usar uma vez só
                        users
                    }); 

                }

            })

  

});

//Aqui users /admin
//Substituindo o o get por post e tiramos o admin
//éla fica igul a primeira com a difernça que uma e get e a outra é post
//agor atrocamos o app por route e tbm tiramos u ususrs
route.post((req, res) => {

             if (!app.utils.validator.user(app, req, res)) return false;


    db.insert(req.body, (err, user) => {

        if (err) { 
            app.utils.error.send(err, req, res);
        } else {

            res.status(200).json(user)

        }

    });

});

    let routeId = app.route('/users/:id');

       routeId.get((req, res) => {
                    //aqui vamos colocar qual o parametr que queremos como id
                    //: ele ja entende qual é o parametros que esse paramettro que estou procurando
        db.findOne({ _id:req.params.id}).exec((err, user)=> {
            if(err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(user);
            }
        });
    });


    //Metodo PUT
       routeId.put((req, res) => {
                    //aqui vamos colocar qual o parametr que queremos como id
                    //: ele ja entende qual é o parametros que esse paramettro que estou procurando
        
                    if (!app.utils.validator.user(app, req, res)) return false;
                    
            db.update({ _id:req.params.id}, req.body, err => {
            if(err) {
                app.utils.error.send(err, req, res);
            } else {                    //Vai juntar o id e os resto das informações
                                        //Ele vai mesclar e gerar um objeto único
                res.status(200).json(Object.assign(req.params, req.body));
            }
        });
    });

    routeId.delete((req, res)=>{
                  //Aqui vamos colocar o 1 registro
                                           //o segundo parametro é o parametro de opções 
                                                // parametro é função de callback                             
        db.remove({ _id: req.params.id }, {}, err => {
                //Aqui colocamos o erro validando se deu algum erro ou se funcionou
            if(err) {
                app.utils.error.send(err, req, res);
            } else {                    //Colocamos apenas o id que a gente excluiu
                res.status(200).json(req.params);
            }

        });

    });

 


};