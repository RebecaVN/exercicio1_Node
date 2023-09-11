//Importando o módulo 
const readline = require('readline-sync')

const num1 = parseInt(readline.question("Digite um numero: \n"))
const num2 = parseInt(readline.question("Digite outro numero: \n"))

if(num1 > num2){
    console.log("O maior é o " + num1);
}else{
    console.log("O maior é o " + num2);
}
