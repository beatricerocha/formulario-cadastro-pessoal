var db = openDatabase('Form', '2.0', 'Form', 4048)
db.transaction(function (criar) {
  criar.executeSql(
    'CREATE TABLE paciw (id PRIMARY KEY, nome VARCHAR(255), email VARCHAR(255), cpf INTEIRO, rg INTEIRO, celular INTEIRO, telefone INTEIRO)'
  )
})

function salvar() {
  var nome = document.getElementById('nome').value
  var email = document.getElementById('email').value
  var cpf = document.getElementById('cpf').value
  var rg = document.getElementById('rg').value
  var celular = document.getElementById('celular').value
  var telefone = document.getElementById('telefone').value

  db.transaction(function (armazenar) {
    armazenar.executeSql(
      'INSERT INTO paciw (nome, email, cpf, rg, celular, telefone) VALUES (?, ?, ?, ?, ?, ?)',
      [nome, email, cpf, rg, celular, telefone]
    )
  })
}
