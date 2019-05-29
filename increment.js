var button = document.getElementById("clicker");
var unbutton = document.getElementById("unclicker");
var clickCount = 0;
var txtOut = document.getElementById("txt out");
txtOut.innerHTML = clickCount.toString();
button.onclick = function () {
    clickCount++;
    txtOut.innerHTML = clickCount.toString();
};
unbutton.onclick = function () {
    clickCount--;
    txtOut.innerHTML = clickCount.toString();
};
