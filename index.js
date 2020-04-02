let sliderSize;
let sliderPercentage;
function setup() {
    createCanvas(innerWidth, innerHeight);
    
    textAlign(CENTER, CENTER);
    
    sliderSize = createSlider(50, 500, 50, 0.1);
    sliderPercentage = createSlider(10, 100, 55, 1);
}
function draw() {
    fill(255);
    background(255);
    rect(0, height/10*9,  width, height/10);
    
    
    fill(0);
    stroke(0);
    text("Square Sizes", width/4, height/30*28);
    text("A:B ratio", width/4*3, height/30*28);
    sliderSize.position(width/30, height - height/30);
    sliderPercentage.position(width/30*16, height - height/30);
}

function drawSquaresAB(size, ratio){
    for(let y = -ceil(size * (1 + ratio) * height / width * 2); y < ceil(size * (1 + ratio) * height / width * 2); y++){
        for(let x = 0; x < ceil(width/size); x++){
            drawA(y, x, size*ratio, size);
            drawB(y, x, size*ratio, size);
        }
    }
}

function drawA(lateral, vertical, sizeA, sizeB){
    fill(100);
    rect(lateral * sizeA + lateral * (sizeB + 1), (sizeB - sizeA) * (lateral + 1) + vertical * sizeA);
}

function drawB(lateral, vertical, sizeA, sizeB){
    fill(200);
    
}

function drawSquaresC(){
    
}
