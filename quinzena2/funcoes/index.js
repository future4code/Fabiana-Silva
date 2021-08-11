// AULA 6 FUNÇÕES

//Exercícios de interpretação de código

// >>> 1 Leia o código a baixo
// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// a) O que vai ser impresso no console?
// 10 e 50

// b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse
// a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
// Daria um erro onde é informado que "isso não é uma função"

// >>> 2 Leia o código abaixo
// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

//a. Explique o que essa função faz e qual é sua utilidade

/* b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
i.   Eu gosto de cenoura
ii.  CENOURA é bom pra vista
iii. Cenouras crescem na terra*/


// Exercícios de escrita de código

//>>>> 1 Escreva as funções explicadas abaixo:
/*a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem 
falando algumas informações sobre você, como:*/

//"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

/*Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. 
Lembrando que a função não possui entradas, apenas imprime essa mensagem.*/

/* b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), 
a idade (`number`), a cidade (`string`) e uma profissão (`string`). 
Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:*/

// Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO]

// >>>> 2 Escreva as funções explicadas abaixo:

/* a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, 
faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número 
é **maior ou igual** ao segundo.

c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, 
juntamente com uma versão dela em letras maiúsculas.*/

/* >>>> 3 Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados 
pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:*/

// Números inseridos: 30 e 3
// Soma: 33
// Diferença: 27
// Multiplicação: 90
// Divisão: 10

// DESAFIO
/* 1 - Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao 
longo do código através de invocações/chamadas. Então, funções podem chamar/invocar outras funções também. 
Sua tarefa é escrever duas funções*/

/*a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro

b) Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.** 
Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada 
para imprimi-lo*/

/* 2 - b) Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.** 
Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada 
para imprimi-lo*/

/* A fórmula do teorema é: hip² = a² + b² , onde hip é a hipotenusa e a e b são os catetos. 
É necessário isolar a hipotenusa, então ao final temos: hip = √(a² + b²)*/


