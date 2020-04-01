let sliderPercentage;
function setup() {
    textAlign(CENTER, CENTER);
    
    sliderPercentage = createSlider(10, 100, 50, 1);
    sliderPercentage.position(10, 10);
    sliderPercentage.style('width', '80px');

}
function draw() {
    createCanvas(innerWidth, innerHeight);
    fill(255);
    
    background(255);
}
