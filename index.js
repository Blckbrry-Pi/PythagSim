let sliderSize;
let sliderPercentage;
function setup() {
    createCanvas(innerWidth, innerHeight);
    
    textAlign(CENTER, CENTER);
    
    sliderSize = createSlider(50, 500, 50, 0.1);
    sliderPercentage = createSlider(0, 100, 55, 0.1);
}
function draw() {
    frameRate(30);
    background(255);
    stroke(255, 0, 0);
    drawSquaresAB(sliderSize.value(), sliderPercentage.value() / 100);
    stroke(0, 0, 255);
    drawSquaresC(sliderSize.value(), sliderPercentage.value() / 100);
    
    
    fill(255);
    rect(0, height/10*9,  width, height/10);
    
    
    fill(0);
    stroke(0, 0, 0);
    text("Square Sizes", width/4, height/30*28);
    text("A:B ratio", width/4*3, height/30*28);
    sliderSize.position(width/30, height - height/30);
    sliderPercentage.position(width/30*16, height - height/30);
}

function drawSquaresAB(size, ratio){
    for(let y = -ceil(width / size / (1 - ratio / 2)); y < ceil(width / size / (1 - ratio / 2)); y++){
        for(let x = 0 - ceil(height/size); x < ceil(width/size); x++){
            drawA(x, y, size*ratio, size);
            drawB(x, y, size*ratio, size);
        }
    }
}

function drawA(lateral, vertical, sizeA, sizeB){
    fill(0, 255, 0);
    rect(lateral * sizeA + (lateral + 1) * sizeB + vertical * sizeA, (sizeB - sizeA) * (lateral + 1) + vertical * sizeB, sizeA, sizeA);
}

function drawB(lateral, vertical, sizeA, sizeB){
    fill(255, 255, 0);
    rect(lateral * sizeA + lateral * sizeB + vertical * sizeA, (sizeB - sizeA) * lateral + vertical * sizeB, sizeB, sizeB);
}

function drawSquaresC(size, ratio){
    for(let y = -ceil(width / size / (1 - ratio / 2)); y < ceil(width / size / (1 - ratio / 2)); y++){
        for(let x = 0 - ceil(height/size); x < ceil(width/size); x++){
            drawC(x, y, size*ratio, size);
        }
    }
}

function drawC(lateral, vertical, sizeA, sizeB){
    fill(0, 255, 0);
    line(lateral * sizeA + (lateral + 1) * sizeB + vertical * sizeA, (sizeB - sizeA) * (lateral + 1) + vertical * sizeB, (lateral + 1) * sizeA + (lateral + 2) * sizeB + (vertical - 1) * sizeA, (sizeB - sizeA) * (lateral + 2) + (vertical - 1) * sizeB);
    line(lateral * sizeA + (lateral + 1) * sizeB + vertical * sizeA, (sizeB - sizeA) * (lateral + 1) + vertical * sizeB, lateral * sizeA + (lateral + 1) * sizeB + (vertical - 1) * sizeA, (sizeB - sizeA) * (lateral + 1) + (vertical - 1) * sizeB);
}
