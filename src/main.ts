import "dvlib";
import { 
    createCanvas, dvStart, resizeCanvas, background, fill, 
    textAlign, HAlignment, textSize, text, width, height, greenLight 
} from "dvlib";

dvStart(setup, draw);

function setup(): void {
    let body: HTMLElement = document.getElementsByTagName('body')[0];
    createCanvas(body);
    resizeCanvas(600, 300);
}

function draw() {
    background('#2d2f2f');
    fill(greenLight);
    textAlign(HAlignment.center);
    textSize(48);
    text('Hello, World!', width / 2, height / 2);
}
