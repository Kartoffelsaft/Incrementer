var button = document.getElementById("clicker");
var buttonImg = document.getElementById("buttonImg");
var unbutton = document.getElementById("unclicker");
var unbuttonImg = document.getElementById("unbuttonImg");
var clickCount = 0;
var txtOut = document.getElementById("txt out");
var Purchasable = /** @class */ (function () {
    function Purchasable(newelementid, newcost, newvalue) {
        this.button = document.getElementById(newelementid);
        this.cost = newcost;
        this.value = newvalue;
        this.count = 0;
    }
    Purchasable.prototype.updatetooltip = function () {
        this.button.title =
            "cost: " + this.cost.toString() +
                "\nvalue: " + this.value.toString() +
                "\ncount: " + this.count.toString();
    };
    return Purchasable;
}());
;
var purchases = [
    new Purchasable("buyButtoneer", 50, 1),
    new Purchasable("buyUnbuttoneer", -50, -1),
];
var _loop_1 = function (i) {
    purchases[i].button.onmousedown = function () {
        clickCount -= purchases[i].cost;
        txtOut.innerHTML = clickCount.toString();
        purchases[i].count++;
        purchases[i].updatetooltip();
    };
    purchases[i].updatetooltip();
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
