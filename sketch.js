var tiorelx, fugindo;
var terra;
var imagempiso
function preload(){
fugindo = loadAnimation("trex1.png","trex3.png","trex4.png");
imagempiso=loadImage("ground2.png")
}
function setup(){
createCanvas(1200,400);
tiorelx = createSprite(100,320,40,100);
tiorelx.addAnimation("fugindo",fugindo);
borda = createEdgeSprites();
terra=createSprite(400,360,800,40);
terra.addImage(imagempiso);
terra.x=terra.width/2
}
function draw(){
background("lightgrey");
if(keyDown("space")){
tiorelx.velocityY = -20;
}
tiorelx.velocityY = tiorelx.velocityY + 2;
terra.velocityX=-4;
if(terra.x<0)
{terra.x=terra.width/2};
tiorelx.collide(terra);
drawSprites();
}
