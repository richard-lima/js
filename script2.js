var saldo = 1000;
var saque = Number(prompt("Digite o valor para saque"));
if(saldo>=saque){

    saldo = saldo - saque;
    alert(`Saque efetuado. Saldo atual: ${saldo}`);
}else{
    alert("O valor digitado é maior que o saldo em conta");
    
};