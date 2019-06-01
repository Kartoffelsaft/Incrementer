var button = document.getElementById("clicker");
var buttonImg = document.getElementById("buttonImg");
var unbutton = document.getElementById("unclicker");
var unbuttonImg = document.getElementById("unbuttonImg");
var clickCount = 0;
var txtOut = document.getElementById("txt out");
var Purchasable = /** @class */ (function () {
    function Purchasable() {
    }
    return Purchasable;
}());
;
var purchases = [{
        button: document.getElementById("buyButtoneer"),
        cost: 10,
        value: 1,
        count: 0
    }, {
        button: document.getElementById("buyUnbuttoneer"),
        cost: -10,
        value: -1,
        count: 0
    }
];
var _loop_1 = function (i) {
    purchases[i].button.onmousedown = function () {
        clickCount -= purchases[i].cost;
        txtOut.innerHTML = clickCount.toString();
        purchases[i].count++;
    };
};
for (var i = 0; i < purchases.length; i++) {
    _loop_1(i);
}
var dogametick = function () {
    setTimeout(dogametick, 1000);
    purchases.forEach(function (e) {
        clickCount +=
            e.count * e.value;
    });
    txtOut.innerHTML = clickCount.toString();
};
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
dogametick();
