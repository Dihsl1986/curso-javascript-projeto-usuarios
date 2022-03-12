class HttpRequest {

                    //Passamos a rota e os parametro que por padrão podem ser vazios
        static get(url, params = {}){
            //Dentro deste metordo ele que vai chamar e fazer o return da promisse
           return HttpRequest.request('GET', url, params);
        }

        static delete(url, params = {}){
            //Dentro deste metordo ele que vai chamar e fazer o return da promisse
           return HttpRequest.request('DELETE', url, params);
        }

        static put(url, params = {}){
            //Dentro deste metordo ele que vai chamar e fazer o return da promisse
           return HttpRequest.request('PUT', url, params);
        }

        static post(url, params = {}){
            //Dentro deste metordo ele que vai chamar e fazer o return da promisse
           return HttpRequest.request('POST', url, params);
        }



    //Criamos um meto export statico
                    //Aqui vamos receber metodo, url e parametros caso não colocamos obj vazio
    static request(method, url, params = {}){

        return new Promise((resolve, reject) => {
                    //Todo este codigo vem para a promisse
            let ajax = new XMLHttpRequest();

            //Agora precisamos falas para o ajax onde vai chamr e qual metodo que ele vai usar
       /* Uma vez que fes isso ->*/ ajax.open(method.toUpperCase(), url)
       /* Você Precisa configurar um evento de resposta*/
        /*é quando ele conseguil carregar 
         depois passamos um event e quando ele termina dentro do objeto ajax
         teremos um atributo responseText que vai ter a informação que o
         servidor passou pra gente.*/


              //Outra situação de erro
              ajax.onerror = event => {
                 reject(e);    
             }

        ajax.onload = event =>{
                        //Aqui não deixamos mais o usuario vazio
            let obj = {};
            try{
                //Como é u json vamos fae um parse
                //Aqui eu tenho meu obj json
                obj = JSON.parse(ajax.responseText);
            } catch(e){
                //aqui eu passo o erro
                reject(e);
                console.error(e);
            }
            //passamos o resolve
            resolve(obj);
         
        } ;
        
        ajax.setRequestHeader('Content-Type', 'application/json');

        // aqui pede para chamar a solicitação ajax
        ajax.send(JSON.stringify(params));
    

        });

        
    }

}