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
 

  //gravity
  sy += g;

  //drag
  if (sx > 0){
    sx -= d;
  } else if (sx < 0){
    sx += d;
  }

  //collisions
  //pod
  if (y >= height - h/2){
    sy = 0;
    pod = true
  }
  else {
    pod = false
  }
  //nad
  if (y <= 25){
    sy = 0;
    y += 26 - y;
    nad = false
  }

  //buttons
  //w
  if (keyIsDown(87)){
    if (pod){
      sy = -600;
    }
  }
  //d
  if (keyIsDown(68)){
    sx = 10;
  }
  //a
  if (keyIsDown(65)){
    sx = -10;
  }
  x += sx;
  y += sy;

  //framerate
  if (millis() - 1000 >= l) {
    l = millis();
    f = frameCount - lf;
    lf = frameCount;
  }

  //reset
  background(0);

  //draw
  strokeWeight(0);
  fill(0,255,0);
  textSize(30);
  text("x: " + x + " y: " + y, 0, 30);
  text("sx: " + sx + " sy: " + sy, 0, 60);
  text("fps: " + f, 0, 90);

  strokeWeight(0);
  fill(255);
  rect(x,y,w,h)
  */ 

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