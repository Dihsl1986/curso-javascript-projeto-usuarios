class Fetch {

                    //Passamos a rota e os parametro que por padrão podem ser vazios
        static get(url, params = {}){
            //Dentro deste metordo ele que vai chamar e fazer o return da promisse
           return Fetch.request('GET', url, params);
        }

        static delete(url, params = {}){
            //Dentro deste metordo ele que vai chamar e fazer o return da promisse
           return Fetch.request('DELETE', url, params);
        }

        static put(url, params = {}){
            //Dentro deste metordo ele que vai chamar e fazer o return da promisse
           return Fetch.request('PUT', url, params);
        }

        static post(url, params = {}){
            //Dentro deste metordo ele que vai chamar e fazer o return da promisse
           return Fetch.request('POST', url, params);
        }



    //Criamos um meto export statico
                    //Aqui vamos receber metodo, url e parametros caso não colocamos obj vazio
    static request(method, url, params = {}){

        return new Promise((resolve, reject) => {

            let request;

            switch (method.toLowerCase()) {

                case 'get':
                    request = url;
                break;
                default:

                request = new Request(url, {
                    method,
                            //Passamos o params porém como esta em json o convertemos com o stringfy
                    body: JSON.stringify(params),
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    })
                });
            }
            
            //esse requst vai receber a url e ais algumas configurações
               
    
            // Vai fazer uma solicitação get e isso ja vai funcionar
                         //Esse nos responderá uma promessa
            fetch(request).then(response=>{

                response.json().then(json=>{

                    resolve(json);
                    //Se der um erro colocamos um catch e passamos o reject
                }).catch(e=>{

                    reject(e);

                    });

            }).catch(e=>{

                reject(e);

            });

        });

        
    }

}