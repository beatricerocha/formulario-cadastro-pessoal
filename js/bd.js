var db = openDatabase('Paci', '2.0', 'Paci', 8086)
db.transaction(function (criar) {
  criar.executeSql(
    'CREATE TABLE p (id PRIMARY KEY, nome VARCHAR(255), email VARCHAR(255), cpf INTEIRO, rg INTEIRO, celular INTEIRO, telefone INTEIRO, cep INTEIRO)'
  )
})

function salvar() {
  var nome = document.getElementById('nome').value
  var email = document.getElementById('email').value
  var cpf = document.getElementById('cpf').value
  var rg = document.getElementById('rg').value
  var celular = document.getElementById('celular').value
  var telefone = document.getElementById('telefone').value
  var cep = document.getElementById('cep').value

  db.transaction(function (armazenar) {
    armazenar.executeSql(
      'INSERT INTO p (nome, email, cpf, rg, celular, telefone, cep) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [nome, email, cpf, rg, celular, telefone, cep]
    )
  })
}
