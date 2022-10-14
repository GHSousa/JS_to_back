//funcoes

// let x = "";
// console.log(x);
// x = "oi";

// TRES FORMAS DE ESCREVER FUNÇÕES
// FORMA 01 - DECLARAÇÃO DE FUNÇÃO

// //01 declara a função
// function imprimeTexto(texto){
//     console.log(texto);
// }

// imprimeTexto(soma());
// //02 executa a função (quando c chama ela)

// imprimeTexto("isso por que eu só tava testando voce");

// function soma (){
//     return 2 + 2; //return tem que ser a ultima linha da função.
// }

//console.log(soma());

//PARAMETROS DE FUNÇÃO

// function soma(num1, num2) {
//    return num1 + num2;
//  }

// // console.log(soma(2, 2));
// // console.log(soma(245, 20));
// // console.log(soma(-500, 60));

// // // PARAMETROS X ARGUMENTOS
// // //ORDEM DOS PARAMETROS

// // function nomeIdade(nome, idade){
// //     return `Meu nome é${nome}, e minha idade é${idade}. `
// // }

// // console.log(nomeIdade(idade, nome)); => cuidado com a ordem dos fatores

// function multiplica(num1 = 1, num2 = 1){
//     return num1 * num2
// }

// console.log(Multiplica(soma(4,5),soma(3,3))); +> funciona com função dentro da função

// EXPRESSOES DE FUNÇÃO

// function minhaFuncao(){
//     //bloco de codigo
// }

// minhaFuncao("parametro");

// const soma = function(num1, num2){return num1 + num2};
// //console.log(soma(1, 1));

// //DIFERENÇA PRINCIPAL

// console.log(apresentar); => funciona chamar antes de declarar, mais não funciona com soma de numeros em constantes 

// function apresentar(){
//     return "ola!";
// }

// //ARROW FUNCTION
// function apresentar(nome){
//     return `Meu nome é ${nome}`
// }

const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

//ARROW COM MAIS DE UMA LINHA 

const somaNumeros = (num1, num2) => {
    if(num1 > 10 || num2 >10 ) {
        return "somente numeros de 1 a 9"
    } else {
        num1 + num2;
    }
}
// HOISTING DA ARROW FUNCTION SE COMPORTA COMO EXPRESSÃO




