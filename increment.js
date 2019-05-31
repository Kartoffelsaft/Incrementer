var button = document.getElementById("clicker");
var buttonImg = document.getElementById("buttonImg");
var unbutton = document.getElementById("unclicker");
var unbuttonImg = document.getElementById("unbuttonImg");
var clickCount = 0;
var txtOut = document.getElementById("txt out");
txtOut.innerHTML = clickCount.toString();
button.onmousedown = function () {
    clickCount++;
    buttonImg.src = "./imgs/button_click.png";
    txtOut.innerHTML = clickCount.toString();
};
button.onmouseup = function () {
    buttonImg.src = "./imgs/button.png";
};
unbutton.onmousedown = function () {
    clickCount--;
    unbuttonImg.src = "./imgs/unbutton_click.png";
    txtOut.innerHTML = clickCount.toString();
};
unbutton.onmouseup = function () {
    unbuttonImg.src = "./imgs/unbutton.png";
};
