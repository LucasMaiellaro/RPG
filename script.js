function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach(function(letra, i){
        setTimeout(function(){
            elemento.innerHTML += letra;

        }, 75 * i)
    })
}

const texto = document.querySelector('.texto');
typeWriter(texto);

let dinheiro = 100; 
let hacksilvers = document.querySelector('.hacksilvers').innerHTML = dinheiro;
let pocoes = document.querySelector('.pocoes');
let novoTexto = 'Você acha estranho aquele anão com vários equipamentos de ferreiro te vender apenas algumas poções, esses game designers estão cada vez mais preguiçosos. Então você continua sua jornada. Você está no pé da montanha. Odin preocupado com o seu sucesso, revive um Troll que estava morto ali mesmo, para que te impeça de chegar ao topo da montanha. Rapaz o bicho é grande! Ele tem 400 de vida. Boa sorte!';
let visible = true;

document.querySelector('.botao-main-2').style.display = 'none';
document.querySelector('.botao-main-3').style.display = 'none';
document.querySelector('.troll').style.display = 'none';
document.querySelector('.h2-main').style.display = 'none';


function compra(){
    let quantidadeDePocoes = document.querySelector('.input');
    dinheiro = dinheiro - (quantidadeDePocoes.value * 10);
    document.querySelector('.hacksilvers').innerHTML = dinheiro;
    document.querySelector('.pocoes').innerHTML = quantidadeDePocoes.value;
}

function colocaNovosItens(){
    document.querySelector('.botao-main-2').style.display = 'initial';
    document.querySelector('.botao-main-3').style.display = 'initial';
    document.querySelector('.troll').style.display = 'initial';
    document.querySelector('.h2-main').style.display = 'initial';
}

function mudarTexto(){
    document.querySelector('.h4-main').innerHTML = ' ';
    document.querySelector('.input').style.visibility = 'hidden';
    document.querySelector('.botao-main').style.display= 'none';
    document.querySelector('.texto').innerHTML = novoTexto;
    typeWriter(texto);
    colocaNovosItens();
}

