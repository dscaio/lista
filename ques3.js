const imcResult = document.getElementById('imcResult');

    function calcImc(){
        // ERRO NA HORA DE TRATAR COM ISNAN() -> var peso = Number(document.querySelector("input#peso").value);
        // ERRO NA HORA DE TRATAR COM ISNAN() -> var alt = Number(document.querySelector("input#alt").value);  

        var peso = parseFloat(document.querySelector("input#peso").value)
        var alt = parseFloat(document.querySelector("input#alt").value); 

        alt /= 100;

        let imcCalc = peso / (alt * alt);
        // tratamento de erros.
            // tratamento para evitar NaN
            if(isNaN(peso) || isNaN(alt) || peso == 0 || alt == 0){
                imcResult.innerHTML = `Ops... Parece que você não inseriu todos os valores...`;
            }else{
                if(imcCalc <= 16.9){
                    imcResult.innerHTML = `O seu IMC é de ${imcCalc.toFixed(1)}, você está Muito Abaixo do Peso!`;
                    }else if(imcCalc >= 17 && imcCalc <= 18.4){
                        imcResult.innerHTML = `O seu IMC é de ${imcCalc.toFixed(1)}, você está Abaixo do Peso!`;
                        }else if(imcCalc >= 18.5 && imcCalc <= 24.9){
                            imcResult.innerHTML = `O seu IMC é de ${imcCalc.toFixed(1)}. Muito bem! Você está no Peso Ideal.`;
                            }else if(imcCalc >= 25 && imcCalc <= 29.9){
                                imcResult.innerHTML = `O seu IMC é de ${imcCalc.toFixed(1)}, você está Acima do Peso!`;
                                }else if(imcCalc >= 30 && imcCalc <= 34.9){
                                    imcResult.innerHTML = `O seu IMC é de ${imcCalc.toFixed(1)}. Cuidado! Você está enquadrado como Obesidade Grau I.`;
                                    }else if(imcCalc >= 35 && imcCalc <= 40){
                                        imcResult.innerHTML = `O seu IMC é de ${imcCalc.toFixed(1)}. Muito Cuidado! Você está enquadrado como Obesidade grau II.`;
                                        }else if(imcCalc >= 40.1){
                                            imcResult.innerHTML = `O seu IMC é de ${imcCalc.toFixed(1)}. Procure um médico urgente! Você está enquadrado como Obesidade grau III.`;
                                            }  
                }                 
        // fim do tratamento de erros
    }