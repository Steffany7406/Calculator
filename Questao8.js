/*Crie uma calculadora que deve permitir apenas operações entre dois números.

>O usuário deve fornecer uma expressão completa contendo os dois números e o operador, no formato: número1 operador número2 (por exemplo, 5 + 3 ou 10 / 2).
A entrada deve ser fornecida pelo usuário através de um prompt (pode ser adaptado para outros ambientes de execução, como linha de comando ou interface gráfica).

Deve existir uma função que realiza o cálculo (calcular) com base no operador digitado, que deve suportar as seguintes operações:

+ para soma. 
- para subtração.
* para multiplicação.
/ para divisão (com verificação para evitar divisão por zero).

A expressão fornecida pelo usuário deve ser analisada e dividida em três partes: o primeiro número (número1), o operador (operador) e o segundo número (número2).

O programa deve validar se a entrada é válida, verificando: Se os valores fornecidos para número1 e número2 são números válidos.

Se o operador é um dos operadores suportados (+, -, *, /).

Se a entrada não for válida, deve exibir uma mensagem informando o erro e solicitar que o usuário tente novamente.

O programa deve exibir o resultado da operação no formato número1 operador número2 = resultado (por exemplo, 5 + 3 = 8).*/


var num1 = parseInt(prompt('Digite um numero:'));
var operador = prompt('Digite o Operador')
var num2 = parseInt(prompt('Digite o outro número!'));

function error(){
    if(isNaN(num1) || isNaN(num2)){
        alert(`Número inválido. Tente Novamente!`)
        return true;
    }
    else if (!['+', '-', '*', '/'].includes(operador)) {
        alert('Operador inválido! Tente novamente!');
        return true;
      }
      return false;
}
function calculator(num1, num2){
let final;
  switch(operador){
    case '+':
      alert(`O resultado é ${num1 + num2}`);
        break;
   case '-':
      alert(`O resultado é ${num1 - num2}`);
        break;
   case '*': 
      alert(`O resultado é ${num1 * num2}`)
        break;
    case '/':
        alert(`O resultado é ${num1 / num2}`)
        break;
    default:
        alert(`Operação Inválida! Tente novamente!`)
        return;
  }   
  alert(`${num1} ${operador} ${num2} = ${final}`)
  }

if(!error()){
    calculator(num1, num2)
}

