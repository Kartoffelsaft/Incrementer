var button = document.getElementById("clicker");
var buttonImg = <HTMLImageElement>document.getElementById("buttonImg");
var unbutton = document.getElementById("unclicker");
var unbuttonImg = <HTMLImageElement>document.getElementById("unbuttonImg");

var clickCount = 0;
const txtOut: HTMLElement = document.getElementById("txt out");

class Purchasable {
    button: HTMLButtonElement;
    cost: number;
    value: number;
    count: number;

    constructor(
        newelementid: string,
        newcost: number,
        newvalue: number
    ){
        this.button = <HTMLButtonElement>document.getElementById(newelementid);
        this.cost = newcost;
        this.value = newvalue;
        this.count = 0;
    }
    
    updatetooltip() {
        this.button.title = 
            "cost: " + this.cost.toString() +
            "\nvalue: " + this.value.toString() +
            "\ncount: " + this.count.toString();
    }
};

var purchases:Purchasable[] = [
    new Purchasable(
        "buyButtoneer",
        50,
        1,
    ),
    new Purchasable(
        "buyUnbuttoneer",
        -50,
        -1,
    ),
]

for(let i = 0; i < purchases.length; i++) {
    purchases[i].button.onmousedown = () => {
        clickCount -= purchases[i].cost;
        txtOut.innerHTML = clickCount.toString();
        purchases[i].count++;
        purchases[i].updatetooltip();
    }
    purchases[i].updatetooltip();
}

const dogametick = () => {
    setTimeout(dogametick, 1000);
    purchases.forEach(e => {
        clickCount += 
            e.count * e.value;
    });
    txtOut.innerHTML = clickCount.toString();
}

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

dogametick();