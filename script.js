var login = 'ABC';
var senha = 'abc123';
var LoginDigitado = prompt("Digite seu Login");
var SenhaDigitada = prompt("Digite sua senha");

if (LoginDigitado == login && SenhaDigitada == senha){
    alert("Login realizado com sucesso!")
}else{
    alert("Login ou Senha inválida")
}