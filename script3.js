var login = 'ABC';
var senha = 'abc123';
var LoginDigitado = prompt("Digite seu Login");
var SenhaDigitada = prompt("Digite sua senha");
var loginRealizado = 0;
var contador = 0;
while(contador<=3){
if (LoginDigitado == login && SenhaDigitada == senha){
    alert("Login realizado com sucesso!");
    contador = 100;
}else{
    alert("Login ou Senha inválida");
    contador++;
    if(contador==3){
        alert("Senha bloqueada");
    }
}
}
