module.exports = {
    
    user:(app, req, res) => {

        req.assert('name', 'O nome é obrigatório.').notEmpty();
        req.assert('email', 'O email esta invalido.').notEmpty().isEmail();

        //Para validar esses erros criamos uma variavel chamada errors
        //Dentro do req solicitamos o valitationErrors
        let errors = req.validationErrors();

        //E verifaos se a variavel errors existe
        if (errors) {
                //Usamos o app.util.error que vai mostrar os erros na tela
                app.utils.error.send(errors, req, res);
                //E vamos parar a execução da nossa página, para que não continue a fazer o insert
                return false;

        } else {
            return true;
        }

    }

};