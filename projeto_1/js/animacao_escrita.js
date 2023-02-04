function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    //sem ser ES6 = textoArray.forEach(function(letra, i){ })
    textoArray.forEach((letra, i) => {
        //console.log(letra);
        //console.log(i);
        setTimeout(function(){
            elemento.innerHTML += letra;
        }, 200 * i) 
                //Primeiro Parâmetro dizendo que a cada letra adicionar mais 1 letra
                //Segundo parâmetro é o tempo que vai para cada "letra" ser adicionada
                //Colocando * i, vai criar o efeito em cadeia, se não colocar isso ele adiciona tudo de uma vez
    });
}

const text = window.document.querySelector('#text-1');
typeWrite(text);

const text_2 = window.document.querySelector('#text-2');
typeWrite(text_2);