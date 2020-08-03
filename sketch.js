var hr, min, sc;
var  secAngle, minAngle, hrAngle;
var scLine, minLine, hrLine;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

 let hr = hour();
 let min = minute();
 let sc = second();

}

function draw() {
  background(0,0,0);  


angleMode(DEGREES);

scAngle = map(sc,0,60, 0, 360);
minAngle = map(min,0, 60, 0 ,360);
hrAngle = map(hr, 0, 11, 0, 360);

rotate(scAngle);
stroke(225,0,0);
strokeWeight(7);
line(200, 200, 400, 200);
arc(50, 50, 80, 80, 0, PI + QUARTER_PI, OPEN);

rotate(minAngle);
stroke(0,225,0);
strokeWeight(7);
line(200,210,400,200);

rotate(hrAngle);
stroke(0,0,225);
strokeWeight(7);
line(200,220,400,200);

  drawSprites();
}