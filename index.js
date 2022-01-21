/*var nome = document.querySelector("#exampleInputName");
nome.value = "Diego vc vai ser o melhor programador que puder ser seja o melhor";
nome.style.color = "green";


var name = document.querySelector("#exampleInputName");
var gender = document.querySelector("#exampleInputGenderM  [name=gender]:checked");
var birth = document.querySelector("#exampleInputBirth");
var country = document.querySelector("#exampleInputCountry");
var email = document.querySelector("#exampleInputEmail");
var password = document.querySelector("#exampleInputPassword");
var photo = document.querySelector("#exampleInputFile");
var admin = document.querySelector("#exampleInputAdmin");*/

var fields = document.querySelectorAll("#form-user-create [name]");
var user = {};



/*document.querySelectorAll("button").forEach(function(){

    this.addEventListener("click",function(){
        console.log("Clicou!")
    });

});*/

document.getElementById("form-user-create").addEventListener("submit", function(){
    event.preventDefault();

    fields.forEach(function(field, index){

        if(field.name == "gender"){
    
            if (field.checked){
                user [field.name] = field.value;
            }
           
    
        } else {
    
            user [field.name] = field.value;
    
        }
    
        
    
    });
    
    console.log(user);
});
