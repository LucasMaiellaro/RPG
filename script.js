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


function compra(){
    let quantidadeDePocoes = document.querySelector('.input');
    dinheiro = dinheiro - (quantidadeDePocoes.value * 10);
    document.querySelector('.hacksilvers').innerHTML = dinheiro;
    document.querySelector('.pocoes').innerHTML = quantidadeDePocoes.value;
}

function mudarTexto(){
    document.querySelector('.h4-main').innerHTML = ' ';
    document.querySelector('.input').style.visibility = 'hidden';
    document.querySelector('.botao-main').style.visibility = 'hidden';
    document.querySelector('.texto').innerHTML = 'eai mermao eai carai mais um desafio hardcore';
}
