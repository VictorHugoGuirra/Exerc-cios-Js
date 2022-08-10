//1.imprima o nome completo

console.log("---------------------------------------------------------------------------")
console.log("Exercicio 01")

var nomeCompleto = "Victor Hugo Barros Rago Guirra"
console.log(nomeCompleto);

//outra forma de apresentar o exercicio anterior utilizando mas variaveis

var primeiroNome = "Victor"
var ultimoNome = "Guirra"
console.log(primeiroNome);
console.log("\n");
console.log(ultimoNome);

//2.imprima o valor de uma multiplicação de 2 valores e em seguida o resultado

console.log("---------------------------------------------------------------------------")
console.log("Exercicio 02")

let numeroA = 9;
let numeroB = 8;
let resultado = numeroA *numeroB;
console.log("O resultado da multiplicação é de "+resultado);

//Outra forma mas elegante de fazer o exercicio anterior

let number1, number2, result;
number1 =2;
number2 =4;
result= number1*number2;
console.log("O resultado da multiplicação é de "+result);

//3.você tem que criar uma função chamada função que imprimi-la escreva no console "Oi, eu sou o Goku!"

console.log("---------------------------------------------------------------------------")
console.log("Exercicio 03")

function saudacao () {

    console.log("Oi, eu sou o Goku!");
}
saudacao();

//4.crie uma função chamada multiplicação que receba dois parâmetros numéricos. Ela deverar exibir a multiplicação desses dois parâmetros no console.

console.log("---------------------------------------------------------------------------")
console.log("Exercicio 04")

function multiplica (x, y){

    console.log(x*y);

}
multiplica(4,5)

// tambem por ser feita assim de uma melhor forma.

function multiplica (x, y){
   var produto;
   produto = (x*y);
    console.log(produto);

}
multiplica(5,5)
multiplica(6,3)
multiplica(8,5)
multiplica(2,9)
multiplica(3,7)

//5. crie uma função chamada podeDirigir que receba como parâmetro da idade em formato número, exiba no console "Você pode dirigir" caso o valor seja maior ou igual a 18. Caso contrario irá exibir "Você não pode dirigir".

console.log("---------------------------------------------------------------------------")
console.log("Exercicio 05")

function podeDirigir(idade){
    if(idade>=18){
        console.log("Apto a dirigir se tiver a carteira")
    }
    else{
        console.log("Espere fazer 18 anos")
    }
}
podeDirigir(18);
podeDirigir(17);
podeDirigir(12);
podeDirigir(37);

//6. Você deve criar um loop usando o for, que exibe no console a sequência do número da 0 ao 20.

console.log("---------------------------------------------------------------------------")
console.log("Exercicio 06")

for(i=0; i<=20; i++){
    
    console.log(i);

}

//7.Você deve criar um loop usando o for, que exibe no console apenas os números impares de  0 ao 20.
console.log("---------------------------------------------------------------------------")
console.log("Exercicio 07")

for(i=0; i<=20; i++){
   if(i%2==1){
    console.log(i);
    }
}
//8. Crie uma função chamada tabuada que irá receber um número inteiro como parâmetro e exibir no console a tabuada desse número de 1 ao 10.

console.log("---------------------------------------------------------------------------")
console.log("Exercicio 08")

function tabuada (number){
    
    let i= 1;
    while (i<=10) {
        
        console.log(number + "X" + i + "=" + (i*number));
        i++
    }
}
tabuada(7);

//9. Crie uma função chamada converterEmhoras que receba um número em minutos como parâmetro e irá exibir a quantidade em horas.

console.log("---------------------------------------------------------------------------")
console.log("Exercicio 09")

function converterEmhoras (minutos){
    
    var conversao;
    conversao = (minutos/60);
    console.log("A quantidade de minutos que você forneceu equivale " +conversao+  " Horas");
    console.log("\n");
}
converterEmhoras(120);