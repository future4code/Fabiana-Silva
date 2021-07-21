
/*LEMBRETES: "const" não mudam enquanto as criadas com "let" podem mudar
 console.log(mensagem) gera uma mensagem no console. prompt() solicita ao usuário que insira uma informação*/



//----------Exercícios de interpretação de código---------


// //----------1. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**----------

// let a = 10
// let b = 10

// console.log(b) // 10

// b = 5
// console.log(a, b) // 10 5



// //----------2. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.---------- 

// let a = 10
// let b = 20
// let c // ???
// c = a // se c é igual a "a" então c = 10
// b = c // se b é igual a c, então b é = 10
// a = b // se á é igual a b, então a é = 10
// console.log(a, b, c) // 10 10 10



// /*----------3 Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis.---------- 
// Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. 
// Alem disso, os nomes não podem começar com números ou caracteres especiais*/

// let p = prompt("Quantas horas você trabalha por dia?")
// let t = prompt("Quanto você recebe por dia?")
// alert(`Voce recebe ${t/p} por hora`)

// //let horasDias = prompt("Quantas horas você trabalha por dia?")
// //let valorDias = prompt("Quanto você recebe por dia?")
// //alert(`Você recebe ${valorDias/horasDias} por hora`)



// /*---------Exercícios de escrita de código----------
// 1 - Construa um programa, seguindo os seguintes passos:
// a) Declare uma variável para armazenar um nome, sem atribuir um valor.
// b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
// c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.
// d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
// e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
// f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
// g) Para finalizar, imprima na tela a mensagem: "Olá nome,  você tem idade anos". Onde nome e idade são os valores que o usuário inseriu*/
// let nome
// let idade
// console.log(typeof nome) // c - porque console.log é sintaxe específica do JS para imprimir informações no console do navegador
// console.log(typeof idade) // chamou a variável idade
// console.log(nome, idade) // notei que aparece como 'undefined' ou sejá o nome e idade estão indefinidos, porque não teve valor atribuido
// console.log("Olá!", "Meu nome é", nome, "e eu tenho", idade, "anos")


// /*--------2. Escreva um programa que faça 3 perguntas de Sim ou Não, armazenando cada uma em uma variável.------ 
// Por exemplo: "Você está usando uma roupa azul hoje?". 
// Depois, siga os passos:
// a) Crie três novas variáveis, contendo as respostas
// b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:
// Você está usando uma roupa azul hoje? - SIM*/

// //programa - Você já dançou hoje? sim/não  - Foi dança de salão? sim/não - Foi Breaking?

// let dancouHoje = prompt("Você já dançou hoje?")
// console.log('Você já dançou hoje?' + dancouHoje)

// let dancaDeSalao = prompt("Você dançou Salsa?")
// console.log('Você dançou Salsa?' + dancaDeSalao)

// let dancouBreaking = prompt("você dançou Breaking?")
// console.log('você dançou Breaking?' + dancouBreaking)



// ---------- 3 - Suponha que temos duas variáveis a e b, cada uma com um valor inicial ----------
// let a = 10
// let b = 25
// Agora, queremos trocar os valores delas, de forma que `a` passe a ter o valor de `b` e `b` passe a ter o valor de `a`. 
// // Ou seja, no caso desse exemplo acima, `a` passaria a ser 25 e `b` passaria a ser 10.
// let a = 10
// let b = 25

// Aqui faremos uma lógica para trocar os valores

// // Depois de trocados, teremos o seguinte resultado:
// console.log("O novo valor de a é", a) // O novo valor de a é 25
// console.log("O novo valor de b é", b) // O novo valor de b é 10





