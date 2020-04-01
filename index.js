let sliderPercentage;
function setup() {
    createCanvas(innerWidth, innerHeight);
    
    textAlign(CENTER, CENTER);
    
    sliderPercentage = createSlider(10, 100, 50, 1);
}
function draw() {
    fill(255);
    background(255);
    
    rect(0, height/10*9,  width, height/10);
    text
    sliderPercentage.position(width/30, height - height/30);
    sliderPercentage.style('width', width/15*7);
}
