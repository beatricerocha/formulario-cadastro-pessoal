var db = openDatabase('Formulari', '2.0', 'Formulario', 4048)
db.transaction(function (criar) {
  criar.executeSql(
    'CREATE TABLE paciente (id PRIMARY KEY, nome VARCHAR(255), email VARCHAR(255), cpf INTEIRO, rg INTEIRO, celular INTEIRO, telefone INTEIRO, sexo VARCHAR(255), cep INTEIRO, endereco VARCHAR(255), numero VARCHAR(10), bairro VARCHAR(255), cidade VARCHAR(255), estado VARCHAR(255))'
  )
})

function salvar() {
  var nome = document.getElementById('nome').value
  var email = document.getElementById('email').value
  var cpf = document.getElementById('cpf').value
  var rg = document.getElementById('rg').value
  var celular = document.getElementById('celular').value
  var telefone = document.getElementById('telefone').value
  var sexo = document.getElementById('sexo').value
  var cep = document.getElementById('cep').value
  var endereco = document.getElementById('endereco').value
  var numero = document.getElementById('numero').value
  var bairro = document.getElementById('bairro').value
  var cidade = document.getElementById('cidade').value
  var estado = document.getElementById('estado').value
  db.transaction(function (armazenar) {
    armazenar.executeSql(
      'INSERT INTO paciente (nome, email, cpf, rg, celular, telefone, sexo, cep, endereco, numero, bairro, cidade, estado) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        nome,
        email,
        cpf,
        rg,
        celular,
        telefone,
        sexo,
        cep,
        endereco,
        numero,
        bairro,
        cidade,
        estado
      ]
    )
  })
}
