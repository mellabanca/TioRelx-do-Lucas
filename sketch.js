var tiorelx, fugindo;
var terra;
var imagempiso;
var seivoar;
var nuvemcomrandolice;
var imagemnuvem;
var cactea1;
var cactea2;
var cactea3;
var cactea4;
var cactea5;
var cactea6;
var tentativascomacerto;
var algodao;
var cacturne;
var inicio = 0;
var jogando = 1;
var derrotado = 2;
var estado = inicio;

function preload(){
    fugindo = loadAnimation("trex1.png","trex3.png","trex4.png");

    imagempiso=loadImage("ground2.png");
    cactea1=loadImage("obstacle1.png");
    cactea2=loadImage("obstacle2.png");
    cactea3=loadImage("obstacle3.png");
    cactea4=loadImage("obstacle4.png");
    cactea5=loadImage("obstacle5.png");
    cactea6=loadImage("obstacle6.png");

    imagemnuvem=loadImage("cloud.png");
}
function setup(){
    createCanvas(1200,400);
tentativascomacerto=0
    
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

    algodao = new Group();
    cacturne = new Group();
}
function draw(){
    background("darkgrey");
    //console.log(tiorelx.y);

    if(estado === inicio){
      terra.velocityX=0;
    }

  if(estado === inicio && keyDown("space")){
    estado = jogando;
  }
  else if(estado === jogando){
    if(keyDown("space")&&tiorelx.y>=300){

      tiorelx.velocityY = -28;
    }
    terra.velocityX=-4;
  }

  else if(estado === derrotado){

  }

  
    tiorelx.velocityY = tiorelx.velocityY + 2;
   

  if(terra.x<0){

    terra.x=terra.width/2};

    tiorelx.collide(seivoar);

    nuvemrandom();
    meteoro();

    drawSprites();
    textSize(24);
    text("record="+tentativascomacerto,1000,50);
tentativascomacerto+=Math.round(frameCount/60);
}

  function nuvemrandom(){

  if(frameCount%120===0){
  nuvemcomrandolice=createSprite(1200,200,80,20);
  nuvemcomrandolice.addImage(imagemnuvem);
  nuvemcomrandolice.y=Math.round(random(10,300));
  nuvemcomrandolice.velocityX=-3;
  nuvemcomrandolice.depth=tiorelx.depth;
  tiorelx.depth+=1;
  nuvemcomrandolice.lifetime = 450;

  algodao.add(nuvemcomrandolice);
}
}
  function meteoro(){
  if(frameCount%120===0){
 var cactea=createSprite(1200,330,20,80);
 cactea.velocityX=-6
 var imagecactea=Math.round(random(1,6))
 switch (imagecactea) {
   case 1:cactea.addImage(cactea1);
     break;
     case 2:cactea.addImage(cactea2);
     break;
     case 3:cactea.addImage(cactea3);
     break;
     case 4:cactea.addImage(cactea4);
     break;
     case 5:cactea.addImage(cactea5);
     break;
     case 6:cactea.addImage(cactea6);
     break;
   default:
     break;
 }
 cactea.lifetime=450;
 cacturne.add(cactea);
}
} 