

//>>>>>>>>>> EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO <<<<<<<<<<
// 1 - Leia o código abaixo:

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a) Explique o que o código faz. Qual o teste que ele realiza? 
//O código pede um número a usuária e condiciona o resultado em "passou no teste ou não passou no teste" 
//a partir da resposta dada, se o número fornecido resto for divisível por dois ou igual zero. 
//É um booleano que compara true or false.

// b) Para que tipos de números ele imprime no console "Passou no teste"? 
// Resposta: Passa no teste tipos de número números paras

// c) Para que tipos de números a mensagem é "Não passou no teste"?
// Resposta: Não passa no teste número ímpares


// 2 - O código abaixo foi feito por uma pessoa desenvolvedora, 
//contratada para automatizar algumas tarefas de um supermercado:

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o códio acima? 
//Resposta: Ele serve para fazer comparações, mas de forma mais simplificada do que o If Else e If Else, deixa menos complexo o código.

//b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// Resposta: Foi impresso o valor de R$ 2.25, se a tiver qualquer letra diferente da do código ele imprime R$ 5, 
// pois o Default devolve um mensagem de erro

// c) Resposta: É impresso uma mensagem de erro para Pêra, mensagem impressa no console é "O preço da fruta  Pêra  é  R$  5"

//3 - Leia o código abaixo:

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
//   let mensagem = "Essa mensagem é secreta!!!"	
// }

// console.log(mensagem)

//a) O que a primeira linha está fazendo?
// Resposta: é um comando que solicita a usuária que digite um número

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// Resposta: Se o número for maior que que zero, então o número passa no teste e se for - 10 a parece um erro 
// e a mensagem não está definida

//c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// Resposta: Entendi que não é exatamente um erro, mas sim que a mensagem não está definida, que não tem uma referência.
// Eu testei a let mensagem fora da condicional if e ela imprimiu a mensagem é secreta, isso acontece porque o que está no escopo pai/mãe é impresso, já o que está no escopo filho/filha não. 
// Só é impremiu o console o que está no escopo filho/a.
// Logo, o console.log(mensagem) que está fora da condicional if não pode imprimir a mensagem do escopo filho/filha.

//>>>>>>>>>> EXERCÍCIOS DE ESCRITA DE CÓDIGO  <<<<<<<<<<

//1 - Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade). 
//a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
//b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
//c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`,
// caso contrário, imprima `"Você não pode dirigir."`

// 2 - Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
//Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

//3 - Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

// 4 - Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um 
//filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. 
//Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, 
//então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, 
//imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

