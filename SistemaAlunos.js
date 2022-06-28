//- Se o número for par, escreva ‘par’ e o número correspondente

//- Se o número for ímpar, escreva ‘impar’ e o número correspondente 

//- Se o número for zero, escreva ‘zero’ 

var numeroAlunos = 10;

for (var contador = 0; contador < numeroAlunos.length; contador++) {

    if(contador == 0){
        console.log("O número atual é zero")
    }else if(contador % 2 == 0){
        console.log("O número é par")
    }else{
        console.log("O número é impar")
    }
}