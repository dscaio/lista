const aResult = document.querySelector('div#teAreaResult');
    // DIFERENCIANDO NAS VARIÁVEIS POR FEEDBACK
    // v = valor
    // a = area
    function teAreaCalc(){
        let vLado = parseFloat(document.querySelector('input#ladoTE').value);

            if(isNaN(vLado) || vLado == 0){
                aResult.innerHTML = `Favor inserir um valor, de preferência diferente de 0!`;
            }else{
                let calcTE = ((vLado ** 2) * Math.sqrt(3)) / 4;
                    aResult.innerHTML = `A área do seu triângulo equilatero = ${calcTE.toFixed(2)}`;
            }
    }