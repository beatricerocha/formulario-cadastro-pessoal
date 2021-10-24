var db = openDatabase('Pa', '2.0', 'Pa', 8086)
db.transaction(function (criar) {
  criar.executeSql(
    'CREATE TABLE pac (id PRIMARY KEY, nome VARCHAR(255), email VARCHAR(255), cpf INTEIRO, rg INTEIRO, celular INTEIRO, telefone INTEIRO, cep INTEIRO, endereco VARCHAR(255), numero INTEIRO)'
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
  var endereco = document.getElementById('endereco').value
  var numero = document.getElementById('numero').value
  db.transaction(function (armazenar) {
    armazenar.executeSql(
      'INSERT INTO pac (nome, email, cpf, rg, celular, telefone, cep, endereco, numero) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [nome, email, cpf, rg, celular, telefone, cep, endereco, numero]
    )
  })
}
