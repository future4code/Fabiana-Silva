//>>>>> EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO <<<<<
// -------------------- EXERCÍCIO 1 --------------------


// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])


/* a) O que vai ser impresso no console?
RESPOSTA>>> será impresso do elenco o Matheus, depois ainda em elenco a partir da posição 1 (Selton Mello) 
menos  -1 (Denise Fraga) também imprime Virginia e por fim em filme transmissãoHoje chama a posição 2, 
imprimindo Globo e o horário 14h. Pois, o primeiro da lista conta como zero.*/

// Matheus Nachtergaele e Virginia Cavendish. Canal: "Globo", horario: "14h"


// -------------------- EXERCÍCIO 2 --------------------


// a) O que vai ser impresso no console?

// Cachorro, nome Juca, idade: 3, raca: SRD
// Gato, nome Juba, idade: 3, raca: SRD
// Tartaruga, nome Jubo, idade: 3, raca: SRD

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

/* RESPOSTA>>> é uma sintaxe com a qual conseguimos realizar uma cópia de um objeto para outro, 
mudar ou adicionar objetos, podendo ser uma ou outra propriedade.*/



// -------------------- EXERCÍCIO 3 --------------------

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))


// a) O que vai ser impresso no console?
//false

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
/*No primeiro console.log é pedido que sejá impresso se o Caio é ou não backender e a cont declarada é que é false. 
Logo, ao imprimir no console ele dará a informação declaração na const backender. 
Já o segundo console não é impresso porque não foi declarado nenhum valor, dentro da função*/


// >>>>> EXERCÍCIOS DE ESCRITA DE CÓDIGO <<<<<
// -------------------- EXERCÍCIO 1 --------------------


// -------------------- EXERCÍCIO 2 --------------------


// -------------------- EXERCÍCIO 3 --------------------
