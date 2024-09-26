function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(144);
  background(0);
  rectMode(CENTER);
}
function draw() {
  background(20, random(90, 60), 60);
  fill(mouseY, 20, 200);
  circle(mouseX + 20, mouseY - 50, mouseX);
  fill(100, 50, 100);
  rect(mouseX, mouseY, 20, 50);
}
