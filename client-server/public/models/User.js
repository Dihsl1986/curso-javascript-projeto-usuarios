class User {

    constructor(name, gender, birth, country, email, password, photo, admin) {

        this._id;
        this._name = name;
        this._gender = gender;
        this._birth = birth;
        this._country = country;
        this._email = email;
        this._password = password;
        this._photo = photo;
        this._admin = admin;
        this._register = new Date();

    }


    get id(){
        return this._id;
    }

    get register(){
        return this._register;
    }
    get name(){
        return this._name;
    }
    get gender(){
        return this._gender;
    }
    get birth(){
        return this._birth;
    }
    get country(){
        return this._country;
    }
    get email(){
        return this._email;
    }
    get password(){
        return this._password;
    }
    get photo(){
        return this._photo;
    }
    get admin(){
        return this._admin;
    }

    set photo(value){
        this._photo = value;
    }


    //Carrega um json dentro do nosso objeto.
    loadFromJSON(json){

        for (let name in json){

            switch(name){
                case '_register':
                    this[name] = new Date(json[name]);
                break;
                default:
                    if (name.substring(0, 1) === '_') this[name] = json[name];
            }
           
        }
    }


    static getUsersStorage () {

        return Fetch.get('/users');

    }

    
        toJSON(){
            //Aqui criamos nosso objeto json
            let json = {};

            //Passo um objeto aqui dentro e ele me retorna um array
                                //Retornando um array posso fazer um foreach
            Object.keys(this).forEach(key =>{
                //Dentro do meu json vou colocar esa chave e vou falar que ela te o mesmo valor do this nesta chave
                // Valiamos ela
                if (this[key] !== undefined)json[key] = this[key];
            });

            //Montando meu jsno eu retorno ele
            return json;

        }

    save() {

        return new Promise((resolve, reject) => {

       let promise;

            if (this.id) {

                promise =  Fetch.put(`/users/${this.id}`, this.toJSON());

            } else {
                    // No caso do post não tenho id mas tenho os dados que foram enviados
                    promise = Fetch.post(`/users/`, this.toJSON());

            }

            //Aqui tratamos o resultado dessa promise
            promise.then(data => {
                    this.loadFromJSON(data);

                    resolve(this);
                    //e der um ero fazemos um catch dessa promessa
            }).catch(e=> {
                reject(e);
            });

       });

        
    }

    remove(){
                    //Passamos o id 
                    //Aqui ele tb vai paar a nosa promise
                    // E retornamo a mesma promise 
        return Fetch.delete(`/users/${this.id}`)

    }
}
