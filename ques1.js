

const res = document.querySelector('div#calcResult');

function somar(){
    let num1 = parseFloat(document.querySelector('input#num1').value);
    let num2 = parseFloat(document.querySelector('input#num2').value);
    
    if(isNaN(num1) || isNaN(num2)){
        res.innerHTML = `Parece que você esqueceu de preencher algum campo!`;
    }else{
        let soma = num1 + num2;
        res.innerHTML = `O resultado da soma entre ${num1} e ${num2} = ${soma}`;
    }

}
function sub(){
    let num1 = parseFloat(document.querySelector('input#num1').value);
    let num2 = parseFloat(document.querySelector('input#num2').value);
    
    if(isNaN(num1) || isNaN(num2)){
        res.innerHTML = `Parece que você esqueceu de preencher algum campo!`;
    }else{
        let sub = num1 - num2;
        res.innerHTML = `O resultado da subtração entre ${num1} e ${num2} = ${sub}`;
    }
}
function multpl(){
    let num1 = parseFloat(document.querySelector('input#num1').value);
    let num2 = parseFloat(document.querySelector('input#num2').value);

    if(isNaN(num1) || isNaN(num2)){
        res.innerHTML = `Parece que você esqueceu de preencher algum campo!`;
    }else{
        let mult = num1 * num2;
        res.innerHTML = `O resultado da multiplicação entre ${num1} e ${num2} = ${mult}`;
    }
}
function divd(){
    let num1 = parseFloat(document.querySelector('input#num1').value);
    let num2 = parseFloat(document.querySelector('input#num2').value);
    
    if(isNaN(num1) || isNaN(num2)){
        res.innerHTML = `Parece que você esqueceu de preencher algum campo!`;
    }else if(num1 == 0 || num2 == 0){
        res.innerHTML = `Parece que um dos números que você preencheu é igual a 0, logo não é possível realizar a divisão.`
    }else{
        let div = num1 / num2;
        res.innerHTML = `O resultado da divisão entre ${num1} e ${num2} = ${div}`;
    }

}
function med(){
    let num1 = parseFloat(document.querySelector('input#num1').value);
    let num2 = parseFloat(document.querySelector('input#num2').value);
    
    if(isNaN(num1) || isNaN(num2)){
        res.innerHTML = `Parece que você esqueceu de preencher algum campo!`;
    }else{
        let med = (num1 + num2) / 2;
        res.innerHTML = `O resultado da média entre ${num1} e ${num2} = ${med}`;
    }

}
// ^^^^ FOI USADO PARSEFLOAT PARA SER POSSÍVEL RECONHECER O NAN E TRATAR O ERRO. (Usando a função Number(), estava reconhecendo o NaN automático como 0) ^^^^