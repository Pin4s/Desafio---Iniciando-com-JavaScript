//Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

function calc(){
    let firstNumber = prompt('Informe um numero');
    
    firstNumber = parseFloat(firstNumber);

    let restOfDivision = firstNumber % 2;
    
    if (isNaN(firstNumber)){
        alert('Erro! O valor informado não é um número, tente novamente');
        calc();
    }else if (restOfDivision == 0){
        alert(`O número ${firstNumber} é par`);
    } else {
        alert(`O número ${firstNumber} é ímpar`)
    }
}

calc();

