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
let pocoes = document.querySelector('.pocoes');
let novoTexto = 'Você acha estranho aquele anão com vários equipamentos de ferreiro te vender apenas algumas poções, esses game designers estão cada vez mais preguiçosos. Então você continua sua jornada. Você está no pé da montanha. Odin preocupado com o seu sucesso, revive um Troll que estava morto ali mesmo, para que te impeça de chegar ao topo da montanha. Rapaz o bicho é grande! Ele tem 400 de vida. Seu HP máximo é 200. Boa sorte!';
let vida = 200;
let vidaTroll = 400;
let quantidadeDePocoes = document.querySelector('.input');

document.querySelector('.hacksilvers').innerHTML = dinheiro;
document.querySelector('.botao-main-2').style.display = 'none';
document.querySelector('.botao-main-3').style.display = 'none';
document.querySelector('.troll').style.display = 'none';
document.querySelector('.h2-main').style.display = 'none';
document.querySelector('.vida').innerHTML = vida;
document.querySelector('.troll').innerHTML = vidaTroll;
document.querySelector('.game-over').style.display = 'none';
document.querySelector('.voce-venceu').style.display = 'none';


function compra(){
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

function atacar(){
    vidaTroll = vidaTroll - 47;
    document.querySelector('.troll').innerHTML = vidaTroll;
    if (vidaTroll <= 0){
        vidaTroll = 0;
        document.querySelector('.troll').innerHTML = vidaTroll;
        alert('Você tirou 47 de vida do troll.');
        alert('Parabéns! Você venceu!');
        setTimeout(voceVenceu, 2000);
    }
    else{
        alert('Você tirou 47 de vida do troll.');
        alert('O Troll te ataca e você perde 68 de vida!');
        vida = vida - 68;
    }
    document.querySelector('.vida').innerHTML = vida;
    if (vida <= 0){
        vida = 0;
        document.querySelector('.vida').innerHTML = vida;
        alert('Você perdeu.')
        document.querySelector('.botao-main-2').style.display = 'none';
        document.querySelector('.botao-main-3').style.display = 'none';
        document.querySelector('.game-over').style.display = 'initial';
    }
}

function beberPocao(){
    quantidadeDePocoes.value = quantidadeDePocoes.value - 1;
    document.querySelector('.pocoes').innerHTML = quantidadeDePocoes.value;
    alert('Você bebe a poção e recupera 130 de vida');
    alert('Porém o Troll te ataca enquanto enquanto você bebia e você perde 29 de vida');
    if (quantidadeDePocoes.value <= 0){
        alert('Suas poções acabaram.')
        document.querySelector('.botao-main-3').style.display = 'none';
    } 
    vida = vida + 130;
    if (vida >= 200){
        vida = 200;
        vida = vida - 29;
    }
    else{
        vida = vida - 29;
    }
    document.querySelector('.vida').innerHTML = vida;
}

function voceVenceu(){
    document.querySelector('.botao-main-2').style.display = 'none';
    document.querySelector('.botao-main-3').style.display = 'none';
    document.querySelector('.troll').style.display = 'none';
    document.querySelector('.h2-main').style.display = 'none';
    document.querySelector('.h3-main').style.display = 'none';
    document.querySelector('.h3-main-2').style.display = 'none';
    document.querySelector('.h3-main-3').style.display = 'none';
    document.querySelector('.hacksilvers').style.display = 'none';
    document.querySelector('.pocoes').style.display = 'none';
    document.querySelector('.vida').style.display = 'none';
    document.querySelector('.voce-venceu').style.display = 'initial';
    novoTexto = 'AAAAAAAAAAAAAAEEEEEEEEEEEEE CARAIOOOO! Tu ganhou mano aí sim em cara. Vamo terminar a história então. Você sobe a montanha e encontra a Pedra e então diz: "Desejo a queda dos Aesir". Então Freya, uma Deusa Vanir e primeira rainha das Valquírias aparece junto com todos os outros Deuses rivais de Odin. Vocês se encaminham a Asgard em busca de vingança enquanto Odin, Thor, Modi e Magni os aguardam para travar a segunda guerra entre os Deuses Nórdicos. Continua...';
    document.querySelector('.texto').innerHTML = novoTexto;
    typeWriter(texto);
}