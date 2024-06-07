//Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

function calc(){
    let firstNumber = prompt('Informe um numero');
    let secondNumber = prompt('Informe outro numero');
    
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);

    let division = firstNumber / secondNumber;
    
    if (isNaN(firstNumber) || isNaN(secondNumber)){
        alert('Erro! Um dos valores informados não é um número, tente novamente');
        calc();
    }else{
        alert(`A divisão:  "${firstNumber} / ${secondNumber}" é igual a ${division}`);
    }
}

calc();

