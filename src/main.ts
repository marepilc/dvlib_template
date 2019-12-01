import "dvlib";
import { 
    createCanvas, dvStart, resizeCanvas, background, fill, 
    textAlign, TextAlign, textSize, text, width, height, green 
} from "dvlib";

dvStart(setup, draw);

function setup(): void {
    let body: HTMLElement = document.getElementsByTagName('body')[0];
    createCanvas(body);
    resizeCanvas(600, 300);
}

function draw() {
    background('#2d2f2f');
    fill(green);
    textAlign(TextAlign.center);
    textSize(48);
    text('Hello, World!', width / 2, height / 2);
}
