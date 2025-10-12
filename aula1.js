let nome = "Pedro";
console.log("Olá, " + nome + "!");

let idade = 23;
console.log("Você tem " + idade + " anos.");

let eMaiorDeIdade = idade >= 18;
console.log("É maior de idade? " + eMaiorDeIdade);

// null e undefined

let endereco = null;
console.log("Endereço:", endereco);

console.log("Multiplicação:", endereco * 2);

let telefone;
console.log("Telefone:", telefone)

// console.log("Multiplicação:", telefone * 2)

if (telefone) {
  console.log("Multiplicação:", telefone * 2)
} else {
  console.log("Telefone não existe")
}

// COERÇÃO IMPLICITA DE TIPOS

// NULL e UNDEFINED => São tratados como False em contextos booleanos
// STRING e NUMEROS => São tratados como True em contextos booleanos
// Exceto o 0 e string vazia ("") => É tratado como False

// Em contextos de interação entre diferentes tipos
// o JavaScript tenta converter os valores para um tipo comum (coerção de tipos)

console.log("5" + 1); // "51" (String)
console.log("5" + "Pedro"); // Concatenação de Strings
console.log("5" - 1); // 4 (Number)
console.log("5" * 1); // 10 (Number)
console.log("5" / 1); // 2.5 (Number)

// COERÇÃO EXPLÍCITA DE TIPOS
let numero = 5;

let numeroString = String(numero);

let stringNumero = "123";
let stringNumeroNumero = Number(numeroString);

let segundoNumero = (10).toString();
console.log(typeof numero, numero)
console.log(typeof numeroString, numeroString)
console.log(typeof stringNumero, stringNumero)
console.log(typeof stringNumeroNumero, stringNumeroNumero)
console.log(typeof segundoNumero, segundoNumero)

let stringInvalida = "Pedro"
let stringInvalidaNumero = Number(stringInvalida);
console.log(typeof stringInvalida, stringInvalida);
console.log(typeof stringInvalidaNumero, stringInvalidaNumero);

// VARIAVEIS

// let, const, var

// let é usado para declarar variaveis que PODEM mudar de valor

// Const é uasdo para declarar variaveis que NÃO podem mudar de valor

// Var pé usado para declarar variaveis que podem mudar de valor
// Var tem escopo global ou de funcao

for (var i = 0; i < 3; i++) {
  var nomeVar = "Pedro";
  console.log("Nome var dentro do for:", nomeVar);
  console.log("i dentro do for:", i);
}

for (var i = 0; i < 3; i++) {
  var nomeVar = "Pedro";
  console.log("Nome var dentro do for:", nomeVar);

}

console.log("Nome var:", nomeVar)

let count = 0;
count++;
count++;
count--;
console.log("Count:", count);

// == >= compara o valor (com coerção de tipos)
// === >= compara valor e tipo (sem coerção de tipos)

console.log("é igual?", 1 === "1" ? "igual" : "diferente");

// condicional ? valorVerdadeiro : valorFalso

if (1 === "1") {
  console.log("valorVerdadeiro")
} else {
  console.log("valorFalso")
}

// let paymentStatus = "PAID";

// switch (paymentStatus) { 
//   case "PENDING":
//     console.log("Pagamento pendente.");
//     break;
//   case "PAID":
//     console.log("Pagamento concluído.");
//     break;
//   case FAILED:
//     console.log("Pagamento falhou.");
//     break;
//   default:
//     console.log("Status do pagamento não específicado")
// }

// 3 principais estruturas de repetição em JavaScript

// 1. for
// 3 elementos
// Inicialização: let i = 0 -> variavel de controle
// Condição: i < 5 -> enquanto essa condição for verdadeira, o loop continua
// Incremento: i++

// Para cada coisa... eu faço tal coisa
// for (let i =0; i < 5; i++) {
//   console.log(`O valor do índice é ${i}`);
// }

// Enquanto tal coisa... eu faço tal coisa
// let i = 0;
// while (1 < 5){
//   i++;
//   console.log("Executando loop", i);
// }

// VOID => quando a função não retorna nada
// RETURN => qunado a função retorna algo

let idades = [18, 25, 32, 11, 9, 45];

let somaDasIdades = 0;
for (let i = 0; i < idades.length; i ++){
  let idade = idades[i];
  somaDasIdades = somarIdades(somaDasIdades, idade);
}

console.log("Soma das idades: ", somaDasIdades)

function verificaSeEMaiorDeIdade(idade) {
  return idade >= 18;
}

function somarIdades(somatorio, idade){
  return somatorio + idade;
}

// VAR -> respeita escobo global e de função
// LET e CONST -. respeitam escopo global, de função e de bloco
// bloco pode ser qualquer coisa que use chaves { ... }

so finge q estuda