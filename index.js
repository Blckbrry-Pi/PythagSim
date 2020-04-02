let sliderSize;
let sliderPercentage;
function setup() {
    createCanvas(innerWidth, innerHeight);
    
    textAlign(CENTER, CENTER);
    
    sliderSize = createSlider(50, 500, 50, 0.1);
    sliderPercentage = createSlider(10, 100, 55, 1);
}
function draw() {
    frameRate(10);
    fill(255);
    background(255);
    rect(0, height/10*9,  width, height/10);
    
    
    fill(0);
    stroke(0);
    text("Square Sizes", width/4, height/30*28);
    text("A:B ratio", width/4*3, height/30*28);
    sliderSize.position(width/30, height - height/30);
    sliderPercentage.position(width/30*16, height - height/30);
    drawSquaresAB(sliderSize.value(), sliderPercentage.value() / 100);
}

function drawSquaresAB(size, ratio){
    for(let y = -ceil(width / size / (1 + ratio)); y < ceil(width / size / (1 + ratio)); y++){
        for(let x = 0; x < ceil(width/size); x++){
            console.log(x + ", " + y);
            drawA(x, y, size*ratio, size);
            drawB(x, y, size*ratio, size);
        }
    }
}

function drawA(lateral, vertical, sizeA, sizeB){
    fill(100);
    rect(lateral * sizeA + lateral * (sizeB + 1) + vertical * sizeB, (sizeB - sizeA) * (lateral + 1) + vertical * sizeA, sizeA, sizeA);
}

function drawB(lateral, vertical, sizeA, sizeB){
    fill(200);
    rect(lateral * sizeA + lateral * sizeB, (sizeB - sizeA) * (lateral + 1) + vertical * sizeA, sizeB, sizeB);
}

function drawSquaresC(){
    
}
