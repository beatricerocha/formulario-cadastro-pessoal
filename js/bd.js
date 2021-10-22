var db = openDatabase ("pacien", "2.0", "Form", 4048);
db.transaction(function (criar){
    criar.executeSql("CREATE TABLE pacien (id PRIMARY KEY, nome TEXT, email TEXT, cpf INTEIRO, rg INTEIRO)");
}); 

function salvar (){
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var cpf = document.getElementById('cpf').value;
    var RG = document.getElementById('rg').value;
    db.transaction(function (armazenar){
        armazenar.executeSql("INSERT INTO pacien (nome, email, cpf,rg) VALUES (?, ?, ?, ?)", [nome, email, cpf, rg]);
    });
}