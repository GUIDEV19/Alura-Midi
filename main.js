let buttons = document.querySelectorAll('.tecla');

function tocaSom (idAudio) {
    const element = document.querySelector(idAudio)
    if(element && element.localName === 'audio'){
            element.play()
    }else{
        console.log('Elemento não encontrado')
    }
}

for(let i = 0; i < buttons.length; i++){
    
    const tecla = buttons[i]
    const som = tecla.classList[1]
    tecla.addEventListener('click', () => {
        tocaSom('#som_' + som)
    });

    tecla.onkeydown = function (e) {
        
        if(e.keyCode == 13 || e.keyCode == 32) {
            tecla.classList.add('ativa');
        }else{
            return
        }
    }

    tecla.onkeyup =function () {
        tecla.classList.remove('ativa');
    }
}
