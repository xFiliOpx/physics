let pl1 = new player();
let boxes = [];



let color = false;
//gravity, drag
let g = 0, d = 1;
let showStats = true;
//framerate visualizer
let l = 0, lf = 0, f = 0;

function setup() {
  frameRate(60);
  createCanvas(700, 700);
  rectMode(CORNER);

  for (let i = 1; i <= 30; i++){
    boxes.push(new box(20*i, 25*i, 400, 40));
  }
}

function draw() {
 
  pl1.forces(g, d);
  //pl1.collisions();
  pl1.controls();

  if (color){background(0,0,255);}
  else {background(0);}
  

  for (let i = 0; i < boxes.length; i++){
    boxes[i].paint(color);
  }
  pl1.draw(color);


  //stats
  if (showStats){
    if (millis() - 1000 >= l) {
      l = millis();
      f = frameCount - lf;
      lf = frameCount;
    }
    if (color){
      stroke(0)
      strokeWeight(5);
      fill(255)
    } else {
      stroke(0)
      strokeWeight(5);
      fill(0,255,0)
    }
    textSize(30);
    text("x: " + pl1.x + " y: " + pl1.y, 10, 30);
    text("sx: " + pl1.sx + " sy: " + pl1.sy, 10, 60);
    text("fps: " + f, 10, 90);
  }
}