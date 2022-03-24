var tiorelx, fugindo;
var terra;
var imagempiso
var seivoar

function preload(){
    fugindo = loadAnimation("trex1.png","trex3.png","trex4.png");

    imagempiso=loadImage("ground2.png")
}
function setup(){
    createCanvas(1200,400);

    
    borda = createEdgeSprites();

    terra=createSprite(400,360,800,40);
    terra.addImage(imagempiso);
    terra.x=terra.width/2

    seivoar=createSprite(400,380,800,20);
    seivoar.visible=false;

    tiorelx = createSprite(100,320,40,100);
    tiorelx.addAnimation("fugindo",fugindo);

    var aleatorio = Math.round(random(1,100));
    console.log(aleatorio);
}
function draw(){
    background("lightgrey");

//console.log(tiorelx.y);

  if(keyDown("space")&&tiorelx.y>=300){

    tiorelx.velocityY = -20;
  }
    tiorelx.velocityY = tiorelx.velocityY + 2;
    terra.velocityX=-4;

  if(terra.x<0){

    terra.x=terra.width/2};

    tiorelx.collide(seivoar);

    numvemrandom();

  drawSprites();
}

function nuvemrandom(){

}