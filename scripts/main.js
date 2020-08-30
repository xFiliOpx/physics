let pl1 = new player();
let boxes = [];

// blocks
// [(x), (y), (w), (h)]
let maps = [
  [0, 890, 700, 1],
  [50, 750, 300, 50],
  [250, 300, 5, 500],
  [100, 555, 300, 50], 
  [200, 500, 200, 5],
  [300, 300, 200, 50],
  [400, 100, 100, 50]
];

let color = false;
//gravity, ground drag, air drag
let g = 1, gd = 1;
let showStats = true;
//framerate visualizer
let l = 0, lf = 0, f = 0;

function otherMap(){
  for (let i = 0; i < 100; i++){
    boxes[i] = new box(0,0,0,0)
  }
  for (let i = 0; i < maps.length; i++){
    boxes[i] = new box(maps[i][0], maps[i][1], maps[i][2], maps[i][3]);
  }
}

function setup() {
  frameRate(60);
  createCanvas(700, 900);
  rectMode(CORNER);

  otherMap();
}

function draw() {
 
  pl1.forces(g, gd);
  pl1.controls();
  pl1.collisions(boxes);


  if (color){background(0,0,255);}
  else {background(0);}
  
  for (let i = 0; i < boxes.length; i++){
    boxes[i].draw(color);
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