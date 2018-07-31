//gif mzking variables
let gifLength=255*2;
let canvas;
const recording =false;


//lazy storage of the dots positions on the canvas
let dotsX = [];
let dotsY = [];

let nbDots=24;


function setup() {
  var p5canvas = createCanvas(600,600);
  canvas = p5canvas.canvas;
  for(let i=0;i<nbDots;i++){
    dotsX.push(300+cos(i*TWO_PI/nbDots)*100);
    dotsY.push(300+sin(i*TWO_PI/nbDots)*100);
  }

  if(recording) capturer.start();
}

function draw() {
  blendMode(BLEND);
  background(210);
  blendMode(DIFFERENCE);
  noStroke();

  for(let i=0;i<nbDots;i++){
    let blueAndSizeValue= (frameCount/2)%255;
    fill(i%2?255:0,i%2?0:255, blueAndSizeValue);
    ellipse(dotsX[i],dotsY[i],50+blueAndSizeValue);
  }

  //gif making logic
  if(recording){
    if(frameCount < gifLength){
      console.log("test");
      capturer.capture(canvas);
    } else if (frameCount === gifLength){
        capturer.stop();
        capturer.save();
    }
  }

}
