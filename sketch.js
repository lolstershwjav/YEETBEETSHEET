var runner, running;
var path, groundImage
function preload(){
  //pre-load images
 runner = loadAnimation("Runner-1.png", "Runner-2.png")
 groundImage = loadAnimation("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here

  path = createSprite(200,0);
  path.addAnimation("ground", groundImage)
path.sclae = 1.2;

  running = createSprite(200, 300)
  running.addAnimation("running", runner)
  running.scale = 0.08;
}

function draw() {
  background(0);

  path.velocityY = 4
  
  if(path.y > 400){
    path.y = 20
  }
drawSprites();
}
