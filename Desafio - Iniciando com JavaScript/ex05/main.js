//Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

value = prompt('Digite algo')

if (typeof value == 'boolean'){
    alert('Valor informado é booleano')
} else {
    alert('Valor informado não é booleano')
}