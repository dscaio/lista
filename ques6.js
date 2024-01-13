const impResult = document.querySelector('div#valorResult');
const details = document.querySelector('div#details');

    function calcDesc(){
        let valorSDesc = parseFloat(document.querySelector('input#valorProduto').value);
        let descQuant = parseFloat(document.querySelector('input#pDesconto').value);

        if(isNaN(valorSDesc) && isNaN(descQuant)){
            impResult.innerHTML = `Você não digitou o valor nenhum!`;
        }else if(isNaN(descQuant)){
            impResult.innerHTML = `O valor de compra será o mesmo! ${valorSDesc.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`;
        }else if(isNaN(valorSDesc)){
            impResult.innerHTML = `Impossível realizar o desconto de ${descQuant}%, pois não há valor para aplicar o desconto!`
        }else if(!isNaN(valorSDesc) && !isNaN(descQuant)){
            let valorCDesc = valorSDesc - (valorSDesc * (descQuant / 100));
            let descDetail = valorSDesc * (descQuant / 100);
                impResult.innerHTML = `Aplicando o desconto de ${descQuant}% no valor de ${valorSDesc.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}, sairá por apenas ${valorCDesc.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}!`
                details.innerHTML = `Você estará economizando ${descDetail.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}!`
        }
    }