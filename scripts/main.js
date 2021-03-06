let pl1 = new player();
let boxes = [];

let audio = [new Audio('../addons/song.mp3'), new Audio('../addons/song2.mp3')]

let color = false;
//gravity, ground drag, air drag
let g = 1, gd = 1;
let showStats = true;
//framerate visualizer
let l = 0, lf = 0, f = 0;

let mapNum = 0;
let audioNum = 1, laudio = 1;

function setup() {
  frameRate(60);
  createCanvas(700, 900);
  rectMode(CORNER);

  pl1.init()

  loadMap(mapNum);
}

function draw() {

  switch (audioNum){
    case 1:
      audio[laudio].pause();
      audio[0].load();
      audio[0].play();
      laudio = 0;
      audioNum = 0;
      break;
    case 2:
      audio[laudio].pause();
      audio[1].load();
      audio[1].play();
      laudio = 1;
      audioNum = 0;
      break;
  }

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