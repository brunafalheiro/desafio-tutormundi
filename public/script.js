let starImg = document.getElementsByClassName('starImg');
let confirmarBtn = document.getElementById('confirmarBtn');

//desabilita botão confirmar
confirmarBtn.disabled = true;

function buttonFunction(clickedBtnId) {
    let btnId = parseInt(clickedBtnId);
    for (var i = 0; i <= btnId; i++) {
        starImg[i].style.backgroundImage = "url('./img/estrela_cheia.svg')";
        starImg[i].style.transition = 'all 0.5s';
    }

    //quantidade de estrelas que faltam serem preenchidas
    var dif = 4 - btnId;

    /*altera as estrelas de preenchidas para vazias 
    caso o usuário mude a avaliação para uma nota menor*/
    for (var j = 0; j < dif; j++) {
        if (dif === 0) { break; }
        starImg[4 - j].style.backgroundImage = "url('./img/estrela_vazia.svg')";
        starImg[i].style.transition = 'all 0.5s';
    }
    
    //altera configs do botão confirmar
    confirmarBtn.disabled = false;
    confirmarBtn.style.backgroundColor = '#2cc6d0';
    confirmarBtn.style.boxShadow = '2px 5px 15px #2cc6d0';
    confirmarBtn.style.transition = 'all 1s';
}