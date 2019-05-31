var button = document.getElementById("clicker");
var buttonImg = <HTMLImageElement>document.getElementById("buttonImg");
var unbutton = document.getElementById("unclicker");
var unbuttonImg = <HTMLImageElement>document.getElementById("unbuttonImg");

var clickCount = 0;
const txtOut: HTMLElement = document.getElementById("txt out");

txtOut.innerHTML = clickCount.toString();
button.onmousedown = () => {
    clickCount++;
    buttonImg.src = "./imgs/button_click.png";
    txtOut.innerHTML = clickCount.toString();
}
button.onmouseup = () => {
    buttonImg.src = "./imgs/button.png";
}

unbutton.onmousedown = () => {
    clickCount--;
    unbuttonImg.src = "./imgs/unbutton_click.png";
    txtOut.innerHTML = clickCount.toString();
}
unbutton.onmouseup = () => {
    unbuttonImg.src = "./imgs/unbutton.png";
}