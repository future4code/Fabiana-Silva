// ----------- EXERCÍCIO 1 - Leia o código abaixo -------------------------

function minhaFuncao(variavel) {
	return variavel * 5
}




/* 
a) O que vai ser impresso no console? 10. 50
b) O que aconteceria se retirasse os dois `console.log` e 
simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?*/ 
// Não aparece nada, pois para imprimir no console eu preciso declarar e em seguida chamar a função


// ---------- EXERCÍCIO 2 - Leia o código abaixo ---------

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

//Explique o que essa função faz e qual é sua utilidade
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

/*b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   `Eu gosto de cenoura`
     ii.  `CENOURA é bom pra vista`
     iii. `Cenouras crescem na terra` */





// -------------------EXERCÍCIOS DE ESCRITA DE CÓDIGO ---------------------
/* Escreva as funções explicadas abaixo:
a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:*/

// "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
// Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. 
//Lembrando que a função não possui entradas, apenas imprime essa mensagem.

/* b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: 
o nome (string), a idade (number), a cidade (string) e uma profissão (string). 
Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template: */

// Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].

// 2- Escreva as funções explicadas abaixo:

