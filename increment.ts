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
};

var purchases:Purchasable[] = [{
        button: <HTMLButtonElement>document.getElementById("buyButtoneer"),
        cost: 10,
        value: 1,
        count: 0,
    },{
        button: <HTMLButtonElement>document.getElementById("buyUnbuttoneer"),
        cost: -10,
        value: -1,
        count: 0,
    }
]

for(let i = 0; i < purchases.length; i++) {
    purchases[i].button.onmousedown = () => {
        clickCount -= purchases[i].cost;
        txtOut.innerHTML = clickCount.toString();
        purchases[i].count++;
    }
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