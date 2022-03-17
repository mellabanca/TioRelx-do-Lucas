var tiorelx, fugindo;

function preload(){
  fugindo = loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(1200,400);
  tiorelx = createSprite(100,320,40,100);
  tiorelx.addAnimation("fugindo",fugindo);
  borda = createEdgeSprites();
 
}

function draw(){
  background("lightgrey");

  if(keyDown("space")){
    tiorelx.velocityY = -20;
  }
  tiorelx.velocityY = tiorelx.velocityY + 2;

  tiorelx.collide(borda[3]);
  
  drawSprites();
}
