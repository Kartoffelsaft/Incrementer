var button = document.getElementById("clicker");
var buttonImg = document.getElementById("buttonImg");
var unbutton = document.getElementById("unclicker");
var unbuttonImg = document.getElementById("unbuttonImg");
var clickCount = 0;
var txtOut = document.getElementById("txt out");
var Purchasable = /** @class */ (function () {
    function Purchasable(newelementid, newcost, newvalue) {
        var _this = this;
        this.button = document.getElementById(newelementid);
        this.cost = newcost;
        this.value = newvalue;
        this.count = 0;
        this.button.onmousedown = function () {
            clickCount -= _this.cost;
            txtOut.innerHTML = clickCount.toString();
            _this.count++;
            _this.updatetooltip();
        };
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
for (var i = 0; i < purchases.length; i++) {
    purchases[i].updatetooltip();
}
var Upgrade = /** @class */ (function () {
    function Upgrade(newbutton, newconditioncheck, newonpurchase) {
        var _this = this;
        this.button = document.getElementById(newbutton);
        this.conditioncheck = newconditioncheck;
        this.onpurchase = newonpurchase;
        this.button.onmousedown = function () {
            if (_this.conditioncheck() && !_this.purchased) {
                _this.purchased = true;
                _this.onpurchase();
                _this.button.style.visibility = "hidden";
            }
        };
    }
    return Upgrade;
}());
;
var upgrades = [
    new Upgrade("upgradeButtoneer", function () { return clickCount >= 1000; }, function () { purchases[0].value++; purchases[0].updatetooltip(); }),
    new Upgrade("upgradeUnbuttoneer", function () { return clickCount <= -1000; }, function () { purchases[1].value--; purchases[1].updatetooltip(); }),
];
var dogametick = function () {
    setTimeout(dogametick, 1000);
    purchases.forEach(function (e) {
        clickCount +=
            e.count * e.value;
    });
    upgrades.forEach(function (e) {
        if (e.conditioncheck() && !e.purchased) {
            e.button.style.visibility = "visible";
        }
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
