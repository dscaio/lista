const areaResult = document.querySelector('div#areaResult');

    function calcArea(){   
        let valorLado = parseFloat(document.querySelector('input#ladoQuadrado').value);

            if(isNaN(valorLado) || valorLado == 0){
                areaResult.innerHTML = `Por favor, insira um valor e de preferência que seja diferente de 0!`;
            }else{
                let calcArea = valorLado ** 2;
                    areaResult.innerHTML = `O valor da área do seu Quadrado = ${calcArea}cm²!`;
            }
        }