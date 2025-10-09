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