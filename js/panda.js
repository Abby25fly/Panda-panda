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

function hideImg1(){
    document.getElementById("myImg1").style.visibility = "hidden";
    document.getElementById("mySpan1").style.visibility = "hidden";
}

function hideImg2(){
    document.getElementById("myImg2").style.visibility = "hidden";
    document.getElementById("mySpan2").style.visibility = "hidden";
}

function hideImg3() {
    document.getElementById("myImg3").style.visibility = "hidden";
    document.getElementById("mySpan3").style.visibility = "hidden";
}

function hideImg4() {
    document.getElementById("myImg4").style.visibility = "hidden";
    document.getElementById("mySpan4").style.visibility = "hidden";
}

function showImg() {
    document.getElementById("myImg1").style.visibility = "visible";
    document.getElementById("myImg2").style.visibility = "visible";
    document.getElementById("myImg3").style.visibility = "visible";
    document.getElementById("myImg4").style.visibility = "visible"; 
}
