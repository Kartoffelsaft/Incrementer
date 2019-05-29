var button = document.getElementById("clicker");
var unbutton = document.getElementById("unclicker");

var clickCount = 0;
const txtOut: HTMLElement = document.getElementById("txt out");

txtOut.innerHTML = clickCount.toString();
button.onclick = () => {
    clickCount++;
    txtOut.innerHTML = clickCount.toString();
}

unbutton.onclick = () => {
    clickCount--;
    txtOut.innerHTML = clickCount.toString();
}