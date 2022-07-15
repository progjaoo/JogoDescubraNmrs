//Vetor que irá armazenar os números já apostados
var erros = [];

//Gerar um número aleatório entre 1 e 100
var sorteado = Math.floor(Math.random()* 100);
console.log(sorteado);

//Constante com o número de chances
const CHANCES = 2;

var numErros = 0;

function apostar(){
    
    //Capturando os elementos
    var txtNum = document.getElementById('txtNumero');
    var num = txtNum.value;
    var outDicas = document.getElementById('outDicas');
    var outChances = document.getElementById('outChances');
    var outErros = document.getElementById('outErros');

    if( num < 1 || num > 100 || isNaN(num)){ 
        alert('Digite um número válido');
        return;
    }

    if( num == sorteado){
        alert('Parabéns, você acertou !');
    }
    else{

        if( erros.indexOf(num) > -1){
            alert(`Você já escolheu o número ${num}. Escolha outro`);
            return;
        }

        erros.push(num);
        numErros++;
        var numChances = CHANCES - numErros;        
      
        var dica = num > sorteado ? 'menor' : 'maior';

        outErros.innerText =`ERROS: ${numErros} (${erros})` ;
        outChances.innerText = `CHANCES: ${numChances}`;
        outDicas.innerText = `DICA: Tente um número ${dica} que ${num}`;

        if( numChances == 0){
            //outDicas.innerText = 'GAME OVER ! Número sorteado: '+sorteado;
            //btnApostar.disabled = true;
            alert('GAME OVER ! Número sorteado: '+sorteado);
            document.location.reload(true);
        }
       
    }

}

var btnApostar = document.getElementById('btnApostar');
btnApostar.addEventListener('click',apostar); 