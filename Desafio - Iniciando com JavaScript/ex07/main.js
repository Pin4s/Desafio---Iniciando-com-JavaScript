//Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.



function calc(){
    let firstNumber = prompt('Informe um numero');
    let secondNumber = prompt('Informe outro numero');
    
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);

    let multiplication = firstNumber * secondNumber;
    
    if (isNaN(firstNumber) || isNaN(secondNumber)){
        alert('Erro! Um dos valores informados não é um número, tente novamente');
        calc();
    }else{
        alert(`A multiplicação:  "${firstNumber} x ${secondNumber}" é igual a ${multiplication}`);
    }
}

calc();

