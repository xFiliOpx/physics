let pl1 = new player();
let boxes = [];

let map1 = [
  [100, 600, 700, 50], 
  [300, 500, 600, 20],
  [500, 400, 500, 50]
];

let color = false;
//gravity, ground drag, air drag
let g = 1, gd = 1, ad = 0.25;
let showStats = true;
//framerate visualizer
let l = 0, lf = 0, f = 0;
//last map end
let lme = 0;

function setup() {
  frameRate(60);
  createCanvas(700, 700);
  rectMode(CORNER);

  for (let i = 0; i < map1.length; i++){
    boxes.push(new box(map1[i][0], map1[i][1], map1[i][2], map1[i][3]));
  }
}

function draw() {
 
  pl1.forces(g, gd, ad);
  pl1.controls();
  pl1.collisions(boxes, lme);


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