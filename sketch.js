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
var descanso;
var meespetei;
var fraseperdeu;
var imagemperdeu;
var fraserecomecar;
var imagemvoltei;
var avisoquepulei;
var f;
var salvo;

function preload(){
    fugindo = loadAnimation("trex1.png","trex3.png","trex4.png");
    descanso=loadAnimation("trex1.png");
    imagempiso=loadImage("ground2.png");
    cactea1=loadImage("obstacle1.png");
    cactea2=loadImage("obstacle2.png");
    cactea3=loadImage("obstacle3.png");
    cactea4=loadImage("obstacle4.png");
    cactea5=loadImage("obstacle5.png");
    cactea6=loadImage("obstacle6.png");
    imagemperdeu=loadImage("gameOver.png");
    imagemvoltei=loadImage("restart.png");
    f=loadSound("die.mp3");
    salvo=loadSound("checkPoint.mp3");
    imagemnuvem=loadImage("cloud.png");
    meespetei=loadAnimation("trex_collided.png");

    avisoquepulei = loadSound("jump.mp3");    
}
function setup(){
    createCanvas(1200,400);
    tentativascomacerto=0
    fraseperdeu=createSprite(600,200);
    fraseperdeu.addImage(imagemperdeu);
    borda = createEdgeSprites();
    fraserecomecar=createSprite(600,280);
    fraserecomecar.addImage(imagemvoltei);
    terra=createSprite(400,360,800,40);
    terra.addImage(imagempiso);
    terra.x=terra.width/2

    seivoar=createSprite(400,380,800,20);
    seivoar.visible=false;

    tiorelx = createSprite(100,320,40,100);
    tiorelx.addAnimation("descanso",descanso);
    tiorelx.addAnimation("machucado",meespetei);
    tiorelx.addAnimation("fugindo",fugindo);

    var aleatorio = Math.round(random(1,100));
    //console.log(aleatorio);

    algodao = new Group();
    cacturne = new Group();

    tiorelx.debug = false;
    tiorelx.setCollider("circle",0,0,40);

   
    
}
function draw(){
    background("darkgrey");
    //console.log(tiorelx.y);
    //var mensagem = "Isso é uma mensagem";
    //console.log(mensagem);
    if(estado === inicio){
      terra.velocityX=0;
      fraseperdeu.visible=false;
      fraserecomecar.visible=false;
    }

  if(estado === inicio && keyDown("space")){
    estado = jogando;
  }
  else if(estado === jogando){
    tiorelx.changeAnimation("fugindo",fugindo);
    if(keyDown("space")&&tiorelx.y>=300){
      avisoquepulei.play();
      tiorelx.velocityY = -28;
    }
    terra.velocityX=-(8+tentativascomacerto/200);
    tiorelx.velocityY = tiorelx.velocityY + 2;
    fraseperdeu.visible=false;
    fraserecomecar.visible=false;
    if(tentativascomacerto % 500===0&&tentativascomacerto>0){
      salvo.play();
    }
    if(terra.x<0){

      terra.x=terra.width/2};
      nuvemrandom();
      meteoro();
      tentativascomacerto+=Math.round(frameRate()/60);
      if(cacturne.isTouching(tiorelx)){
        estado=derrotado;
      f.play();
      }
      
  }

  else if(estado === derrotado){
      terra.velocityX=0;
      algodao.setVelocityXEach(0);
      cacturne.setVelocityXEach(0);
      tiorelx.changeAnimation("machucado",meespetei);
      algodao.setLifetimeEach(-12);
      cacturne.setLifetimeEach(-10);
      tiorelx.velocityY=0
      fraseperdeu.visible=true;
      fraserecomecar.visible=true; 
      if(mousePressedOver(fraserecomecar)){
        resetar();
      }
  }

   
   
    tiorelx.collide(seivoar);

   
    drawSprites();
    textSize(24);
    text("record="+tentativascomacerto,1000,50);

}

  function resetar(){
    estado=jogando;
   algodao.destroyEach();
   cacturne.destroyEach();
   tentativascomacerto=0;
  }

  function nuvemrandom(){

  if(frameCount%120===0){
  nuvemcomrandolice=createSprite(1200,200,80,20);
  nuvemcomrandolice.addImage(imagemnuvem);
  nuvemcomrandolice.y=Math.round(random(10,300));
  nuvemcomrandolice.velocityX=-6;
  nuvemcomrandolice.depth=tiorelx.depth;
  tiorelx.depth+=1;
  nuvemcomrandolice.depth=fraseperdeu.depth;
  fraseperdeu.depth+=1;
  nuvemcomrandolice.depth=fraserecomecar.depth;
  fraserecomecar.depth+=1;
  nuvemcomrandolice.lifetime = 450;

  algodao.add(nuvemcomrandolice);
}
}
  function meteoro(){
  if(frameCount%120===0){
 var cactea=createSprite(1200,330,20,80);
 cactea.velocityX=-(12+tentativascomacerto/200);
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