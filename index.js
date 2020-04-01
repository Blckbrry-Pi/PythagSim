let sliderSize;
let sliderPercentage;
function setup() {
    createCanvas(innerWidth, innerHeight);
    
    textAlign(CENTER, CENTER);
    
    sliderSize = createSlider(50, 500, 50, 0.1);
    sliderPercentage = createSlider(10, 100, 50, 1);
}
function draw() {
    fill(0);
    background(255);
    
    rect(0, height/10*9,  width, height/10);
    text("Square Sizes", width/4, height/30*28);
    sliderPercentage.position(width/30, height - height/30);
    sliderPercentage.style('width', width/15*7);
}
