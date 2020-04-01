let sliderPercentage;
function setup() {
    textAlign(CENTER, CENTER);
    
    sliderPercentage = createSlider(10, 100, 50, 1);
    sliderPercentage.position(width/30, height - height/30);
    sliderPercentage.style('width', width/15*14);

}
function draw() {
    createCanvas(innerWidth, innerHeight);
    fill(255);
    background(255);
    
    sliderPercentage.position(width/30, height - height/30);
}
