function setup() {
    textAlign(CENTER, CENTER);

}

let sliderPercentage
function draw() {
    createCanvas(innerWidth, innerHeight);
    fill(255);
    
    background(255);
    
    slider = createSlider(.1, 1, 0.5, 0.01);
    slider.position(10, 10);
    slider.style('width', '80px');
}
