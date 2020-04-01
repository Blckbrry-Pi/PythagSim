function setup() {
    textAlign(CENTER, CENTER);

}

let memory = 0;


let currentVal = 1;
let CVDecimal = false;

let operatingVal = 0;
let OVDecimal = false;

let displaySwitch = 0;


let currentFunc = undefined;
let currentState = "num";
//states are num, oper, and out


let boundingBoxes;


function draw() {
    stroke(125);
    boundingBoxes =  
        [
            {
                x:width/60,
                y:height/70,
                wid:width*58/60,
                hei:height/10,
                roun:10,
                col:color(255),
                
                
                txt: (1-displaySwitch)*currentVal + displaySwitch*operatingVal + " ",
                
                txtSze: innerHeight/15,
                txtCol: color(0),
                beginFunc: function(objIn)
                    {
                        textAlign(RIGHT, CENTER);
                        objIn.x += objIn.wid / 2;
                        return(objIn);
                    },
                endFunc: function(objIn)
                    {
                        textAlign(CENTER, CENTER);
                        objIn.x -= objIn.wid / 2;
                        return(objIn);
                    },
                
                
                onClick:function(){}
            },
            {
                x:width/60,
                y:height/7,
                wid:width*13/105,
                hei:height/10,
                roun:10,
                col:color(68, 34, 238),
                activCol:color(34, 17, 119),
                
                
                txt: "mem add",
                txtSze: width/50,
                txtCol: color(255),
                
                
                onClick:function(){memCall("MA")}
            },
            {
                x:(width/60)*2 + (width*13/105)*1,
                y:height/7,
                wid:width*13/105,
                hei:height/10,
                roun:10,
                col:color(68, 34, 238),
                activCol:color(34, 17, 119),
                
                
                txt: "mem subt",
                txtSze: width/50,
                txtCol: color(255),
                
                
                onClick:function(){memCall("MS")}
            },
            {
                x:(width/60)*3 + (width*13/105)*2,
                y:height/7,
                wid:width*13/105,
                hei:height/10,
                roun:10,
                col:color(68, 34, 238),
                activCol:color(34, 17, 119),
                
                
                txt: "mem clear",
                txtSze: width/50,
                txtCol: color(255),
                
                
                onClick:function(){memCall("MC")}
            },
            {
                x:(width/60)*4 + (width*13/105)*3,
                y:height/7,
                wid:width*13/105,
                hei:height/10,
                roun:10,
                col:color(68, 34, 238),
                activCol:color(34, 17, 119),
                
                
                txt: "mem read",
                txtSze: width/50,
                txtCol: color(255),
                
                
                onClick:function(){memCall("MR")}
            },
            {
                x:(width/60)*5 + (width*13/105)*4,
                y:height/7,
                wid:width*13/105,
                hei:height/10,
                roun:10,
                col:color(25),
                
                
                txt: "√",
                txtSze: width/50,
                txtCol: color(255),
                
                
                onClick:function(){functionIn("sqrt")}
            },
            {
                x:(width/60)*6 + (width*13/105)*5,
                y:height/7,
                wid:width*13/105,
                hei:height/10,
                roun:10,
                col:color(25),
                
                
                txt: "+/-",
                txtSze: width/50,
                txtCol: color(255),
                
                
                onClick:function(){functionIn("times neg one")}
            },
            {
                x:(width/60)*4 + (width*11/48)*3,
                y:height*17/70 + (height/70)*1 + (height*12/70)*0,
                wid:width*11/48,
                hei:height*12/70,
                roun:20,
                col:color(247, 146, 49),
                
                
                txt: "÷",
                txtSze: width/50,
                txtCol: color(255),
                
                
                onClick: function(){functionIn("divide")}
            },
            {
                x:(width/60)*4 + (width*11/48)*3,
                y:height*17/70 + (height/70)*2 + (height*12/70)*1,
                wid:width*11/48,
                hei:height*12/70,
                roun:20,
                col:color(247, 146, 49),
                
                
                txt: "x",
                txtSze: width/50,
                txtCol: color(255),
                
                
                onClick: function(){functionIn("multiply")}
            },
            {
                x:(width/60)*4 + (width*11/48)*3,
                y:height*17/70 + (height/70)*3 + (height*12/70)*2,
                wid:width*11/48,
                hei:height*12/70,
                roun:20,
                col:color(247, 146, 49),
                
                
                txt: "-",
                txtSze: width/50,
                txtCol: color(255),
                
                
                onClick: function(){functionIn("subtract")}
            },
            {
                x:(width/60)*4 + (width*11/48)*3,
                y:height*17/70 + (height/70)*4 + (height*12/70)*3,
                wid:width*11/48,
                hei:height*12/70,
                roun:20,
                col:color(247, 146, 49),
                
                
                txt: "+",
                txtSze: width/50,
                txtCol: color(255),
                
                
                onClick: function(){functionIn("add")}
            },
            {
                x:(width/60)*1 + (width*11/48)*0,
                y:height*17/70 + (height/70)*4 + (height*12/70)*3,
                wid:width*11/48,
                hei:height*12/70,
                roun:20,
                col:color(45),
                
                
                txt: "0",
                txtSze: width/50,
                txtCol: color(255),
                
                
                onClick: function(){digitIn(0)}
            },
            {
                x:(width/60)*1 + (width*11/48)*0,
                y:height*17/70 + (height/70)*3 + (height*12/70)*2,
                wid:width*11/48,
                hei:height*12/70,
                roun:20,
                col:color(45),
                
                
                txt: "1",
                txtSze: width/50,
                txtCol: color(255),
                
                
                onClick: function(){fdigitIn(1)}
            },
            {
                x:(width/60)*2 + (width*11/48)*1,
                y:height*17/70 + (height/70)*3 + (height*12/70)*2,
                wid:width*11/48,
                hei:height*12/70,
                roun:20,
                col:color(45),
                
                
                txt: "2",
                txtSze: width/50,
                txtCol: color(255),
                
                
                onClick: function(){digitIn(2)}
            },
            {
                x:(width/60)*3 + (width*11/48)*2,
                y:height*17/70 + (height/70)*3 + (height*12/70)*2,
                wid:width*11/48,
                hei:height*12/70,
                roun:20,
                col:color(45),
                
                
                txt: "3",
                txtSze: width/50,
                txtCol: color(255),
                
                
                onClick: function(){digitIn(3)}
            },
            {
                x:(width/60)*1 + (width*11/48)*0,
                y:height*17/70 + (height/70)*2 + (height*12/70)*1,
                wid:width*11/48,
                hei:height*12/70,
                roun:20,
                col:color(45),
                
                
                txt: "4",
                txtSze: width/50,
                txtCol: color(255),
                
                
                onClick: function(){digitIn(4)}
            },
            {
                x:(width/60)*2 + (width*11/48)*1,
                y:height*17/70 + (height/70)*2 + (height*12/70)*1,
                wid:width*11/48,
                hei:height*12/70,
                roun:20,
                col:color(45),
                
                
                txt: "5",
                txtSze: width/50,
                txtCol: color(255),
                
                
                onClick: function(){digitIn(5)}
            },
            {
                x:(width/60)*3 + (width*11/48)*2,
                y:height*17/70 + (height/70)*2 + (height*12/70)*1,
                wid:width*11/48,
                hei:height*12/70,
                roun:20,
                col:color(45),
                
                
                txt: "6",
                txtSze: width/50,
                txtCol: color(255),
                
                
                onClick: function(){digitIn(6)}
            },
            {
                x:(width/60)*1 + (width*11/48)*0,
                y:height*17/70 + (height/70)*1 + (height*12/70)*0,
                wid:width*11/48,
                hei:height*12/70,
                roun:20,
                col:color(45),
                
                
                txt: "7",
                txtSze: width/50,
                txtCol: color(255),
                
                
                onClick: function(){digitIn(7)}
            },
            {
                x:(width/60)*2 + (width*11/48)*1,
                y:height*17/70 + (height/70)*1 + (height*12/70)*0,
                wid:width*11/48,
                hei:height*12/70,
                roun:20,
                col:color(45),
                
                
                txt: "8",
                txtSze: width/50,
                txtCol: color(255),
                
                
                onClick: function(){digitIn(8)}
            },
            {
                x:(width/60)*3 + (width*11/48)*2,
                y:height*17/70 + (height/70)*1 + (height*12/70)*0,
                wid:width*11/48,
                hei:height*12/70,
                roun:20,
                col:color(45),
                
                
                txt: "9",
                txtSze: width/50,
                txtCol: color(255),
                
                
                onClick: function(){digitIn(9)}
            },
            {
                x:(width/60)*2 + (width*11/48)*1,
                y:height*17/70 + (height/70)*4 + (height*12/70)*3,
                wid:width*11/48,
                hei:height*12/70,
                roun:20,
                col:color(45),
                
                
                txt: ".",
                txtSze: width/50,
                txtCol: color(255),
                
                
                onClick: function(){digitIn(0)}
            },
            {
                x:(width/60)*3 + (width*11/48)*2,
                y:height*17/70 + (height/70)*4 + (height*12/70)*3,
                wid:width*11/48,
                hei:height*12/70,
                roun:20,
                col:color(247, 146, 49),
                
                
                txt: "=",
                txtSze: width/50,
                txtCol: color(255),
                
                
                onClick: function(){functionIn("equal")}
            }
        ]
    createCanvas(innerWidth, innerHeight);
    fill(255);
    
    background(20);
    
    //console.log(inBounds(width/60, height/70, width*58/60, height/10, 5));
    drawBoundingBoxes(boundingBoxes);
}

function inBounds(x, y, wid, hei) {
    return(mouseX > x-1  &&  mouseX < x+wid+1  &&  mouseY > y-1  &&  mouseY < y+hei+1);
}

function digitIn(digit) {
    pSwitch(digit,
        {
            
        }, {

    })
}

function functionIn(func) {
    pSwitch(func, [
        {
            case:"sqrt",
            run:function(){
                if(currentState === "oper"){
                    operatingVal = sqrt(operatingVal);
                } else {
                    currentVal = sqrt(currentVal);
                }
            }
        },
        {
            case:"times neg one",
            run:function(){
                if(currentState === "oper"){
                    operatingVal = 0-operatingVal;
                } else {
                    currentVal = 0-currentVal;
                }
            }
        },
        {
            case:"divide",
            run:function(){
                if(currentState === "oper"){
                    doCalc();
                }
                currentFunc = 4;
                displaySwitch = 0;
                currentState = "oper";
            }
        },
        {
            case:"multiply",
            run:function(){
                if(currentState === "oper"){
                    doCalc();
                }
                currentFunc = 3;
                displaySwitch = 0;
                currentState = "oper";
            }
        },
        {
            case:"subtract",
            run:function(){
                if(currentState === "oper"){
                    doCalc();
                }
                currentFunc = 2;
                displaySwitch = 0;
                currentState = "oper";
            }
        },
        {
            case:"add",
            run:function(){
                if(currentState === "oper"){
                    doCalc();
                }
                currentFunc = 1;
                displaySwitch = 0;
                currentState = "oper";
            }
        },
        {
            case:"equal",
            run:function(){
                if(currentState === "oper" && displaySwitch === 0) {
                    //doAbolutelyNothing();
                } else if(currentState === "oper") {
                    doCalc();
                    displaySwitch = 0;
                    currentState = "out";
                } else {
                    if(!currentFunc === undefined){
                        doCalc();
                        currentState = "out";
                    }
                }
            }
        }
    ]);
}

function memCall(memCommand) {
    pSwitch(memCommand, [
        {
            case:"MC",
            run:function() {memory = 0}
        },
        {
            case:"MR",
            run:function() {
                if(currentState === "oper"){
                    operatingVal = memory;
                    displaySwitch = 1;
                } else {
                    currentVal = memory;
                }
            }
        }
    ])
}

function drawBoundingBoxes(boundingBoxArray) {
    for(let currBox = 0; currBox<boundingBoxArray.length; currBox++){
        stroke(45);
        strokeWeight(5);
        fill(boundingBoxArray[currBox].col);
        
        rect(boundingBoxArray[currBox].x, boundingBoxArray[currBox].y, boundingBoxArray[currBox].wid, boundingBoxArray[currBox].hei, boundingBoxArray[currBox].roun);
        
        
        if (typeof boundingBoxArray[currBox].beginFunc !== 'undefined') {
            boundingBoxArray[currBox] = boundingBoxArray[currBox].beginFunc(boundingBoxArray[currBox]);
        }
        noStroke();
        textSize(boundingBoxArray[currBox].txtSze);
        fill(boundingBoxArray[currBox].txtCol);
        text(boundingBoxArray[currBox].txt, boundingBoxArray[currBox].x + boundingBoxArray[currBox].wid/2, boundingBoxArray[currBox].y + boundingBoxArray[currBox].hei/2);
        
        if (typeof boundingBoxArray[currBox].endFunc !== 'undefined') {
            boundingBoxArray[currBox] = boundingBoxArray[currBox].endFunc(boundingBoxArray[currBox]);
        }
    }
}

function mousePressed() {
    for(let currBox = 0; currBox < boundingBoxes.length; currBox++){
        if(inBounds(boundingBoxes[currBox].x, boundingBoxes[currBox].y, boundingBoxes[currBox].wid, boundingBoxes[currBox].hei)){
            boundingBoxes[currBox].onClick();
        }
    }
}

function pSwitch(input, cases) {
    for(let caseNum = 0; caseNum < cases.length; caseNum++){
        if(input === cases[caseNum].case){
            cases[caseNum].run();
        }
    }
}



function doCalc(){
    
}
