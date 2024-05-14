function setup() {
    createCanvas(600, 500);
    background(0, 191, 255)
  }
  
  function draw() {
    stroke(0, 0, 139);
    fill("white");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  