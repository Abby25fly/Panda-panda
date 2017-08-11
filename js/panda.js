// Desaparecer y aparecer el texto
function visbLeft() {
    var text1 = document.getElementById('textLeft');
    if (text1.style.visibility === 'hidden') {
        text1.style.visibility = 'visible';
    } else {
        text1.style.visibility = 'hidden';
    }
}

function visbRight() {
    var text2 = document.getElementById('textRight');
    if (text2.style.visibility === 'hidden') {
        text2.style.visibility = 'visible';
    } else {
        text2.style.visibility = 'hidden';
    }
}
