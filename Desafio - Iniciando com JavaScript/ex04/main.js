

// 4-- Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

value = prompt('Digite algo')

if (typeof value === 'string'){
    alert('É uma string')
} else {
    alert('não é uma string')
}