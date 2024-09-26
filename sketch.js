function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  background(0);
  rectMode(CENTER);
}
function draw() {
  background(20, random(90, 60), 60, 30);
  stroke(0, 0, 0);
  fill(mouseY, mouseX, 200);
  stroke(20, 400, 20);
  circle(mouseX, mouseY, 30, 30);
  stroke(20, 100, 20);
  rect(mouseX, mouseY, 20, 20);
  rotate(mouseX);
  stroke(0, 0, 0);
  fill(mouseY, mouseX, 200);
  circle(mouseX - 50, mouseY, 30, 30);
  rotate(mouseX, mouseY);
  stroke(20, 100, 20);
  rect(mouseX - 50, mouseY, 20, 20);
  stroke(300, 300, 300);
  triangle(20, 20, 20, 20, mouseX, mouseY);
  fill(mouseX, mouseY, 200);
  rect(mouseX, 40, 30, 30);
}
