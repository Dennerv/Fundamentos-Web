/* 
var   escopo global(Variável)
let escopo local(Variável)
const  não muda o valor(Variável)
*/

let nome = window.document.getElementById('nome')
/*
outra forma de fazer acesso ao DOM

getEletemtByTagName()    <-- por tag
getElementById()         <-- por id
getElementByName()       <-- por nome 
getElementByClassName    <-- por classe
querySeletor()           <-- por seletor

*/
let email = document.querySelector('#email')
let interesses = document.querySelector('#interesses')
let nomeOk = false
let emailOk = false
let interessesOk = false



nome.style.width = '20%'
email.style.width = '20%'

function validaNome() {
   let txt = document.querySelector('#txtNome')
   if (nome.value.length < 3) {
      txt.innerHTML = 'Nome Inválido'
      txt.style.color = 'red'
   } else {
      txt.innerHTML = 'Nome Válido'
      txt.style.color = 'orange'
      nomeOk = true

   }
}

function validaEmail() {
   let txtEmail = document.querySelector('#txtEmail') 

   if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) {
      txtEmail.innerHTML = 'E-mail inválido'
      txtEmail.style.color = 'red'
   } else {
      txtEmail.innerHTML = 'E-mail válido'
      txtEmail.style.color = 'orange'
      emailOk = true
   }
}
/*
function validaEmail() {
   let txtEmail = document.querySelector('#txtEmail')

   if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
      txtEmail.innerHTML = 'E-mail inválido'
      txtEmail.style.color = 'red'
   } else {
      txt.innerHTML = 'E-mail válido'
      txt.style.color = 'orange'
   }
}*/
function validaInteresses() {
   let txtInteresses = document.querySelector('#txtInteresses')

   if (interesses.value.length >= 100) {
      txtInteresses.innerHTML = 'Texto muito grande, por favor, digite no máximo 100 caracteres!'
      txtInteresses.style.color = 'red'
      txtInteresses.style.display = 'block'
   }else {
      txtInteresses.style.display = 'none'
      interessesOK = true
   }

}



function enviar() {
   if (nomeOk == true && emailOk == true && assuntoOk == true) {
      alert ('Formulário enviado com sucesso!')
   } else {
      alert ('Preencha o formulário corretamente antes de enviar...')
   }
}

