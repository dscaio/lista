const resQ2 = document.querySelector('div#stsResult');
const listStates = document.querySelector('select#state');

    function searchState(){
        const capitalSearch = listStates.value;
        let searchRes ="";

        switch (capitalSearch) {
            case "Acre":
               searchRes = "Rio Branco";
                break;
            case "Alagoas":
               searchRes = "Maceió";
                break;
            case "Amapá":
               searchRes = "Macapá";
                break;
            case "Amazonas":
               searchRes = "Manaus";
                break;
            case "Bahia":
               searchRes = "Salvador";
                break;
            case "Ceará":
               searchRes = "Fortaleza";
                break;
            case "Distrito Federal":
               searchRes = "Brasília";
                break;
            case "Espírito Santo":
               searchRes = "Vitória";
                break;
            case "Goiás":
               searchRes = "Goiânia";
                break;
            case "Maranhão":
               searchRes = "São Luís";
                break;
            case "Mato Grosso":
               searchRes = "Cuiabá";
                break;
            case "Mato Grosso do Sul":
               searchRes = "Campo Grande";
                break;
            case "Minas Gerais":
               searchRes = "Belo Horizonte";
                break;
            case "Pará":
               searchRes = "Belém";
                break;
            case "Paraíba":
               searchRes = "João Pessoa";
                break;
            case "Paraná)":
               searchRes = "Curitiba";
                break;
            case "Pernambuco":
               searchRes = "Recife";
                break;
            case "Piauí":
               searchRes = "Teresina";
                break;
            case "Rio de Janeiro":
               searchRes = "Rio de Janeiro";
                break;
            case "Rio Grande do Norte":
               searchRes = "Natal";
                break;
            case "Rio Grande do Sul":
               searchRes = "Porto Alegre";
                break;
            case "Rondônia":
               searchRes = "Porto Velho";
                break;
            case "Roraima":
               searchRes = "Boa Vista";
                break;
            case "Santa Catarina":
               searchRes = "Florianópolis";
                break;
            case "São Paulo":
               searchRes = "São Paulo";
                break;
            case "Sergipe":
               searchRes = "Aracaju";
                break;
            case "Tocantins":
               searchRes = "Palmas";
                break;
            default:
                searchRes = "Ops, parece que você esqueceu de selecionar um estado!";
                break;
        }
        if(capitalSearch != "Selecionar"){
            resQ2.innerHTML = `A capital do estado selecionado: ${capitalSearch} é - ${searchRes}`;
        }else{
            resQ2.innerHTML = `${searchRes}`;
        }
            
    }