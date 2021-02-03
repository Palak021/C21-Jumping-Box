var canvas;
var music;
var surface1;
var surface2;
var surface3;
var surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,500);

    surface1=createSprite(100,470,200,50);
    surface1.shapeColor="blue";

    surface2=createSprite(300,470,200,50);
    surface2.shapeColor="pink";

    surface3=createSprite(500,470,200,50);
    surface3.shapeColor="yellow";

    surface4=createSprite(700,470,200,50);
    surface4.shapeColor="red";

    box=createSprite(random(20,750));
    box.width=50;
    box.height=50;
    box.shapeColor="white";
    box.velocityY=2;
   

   
}

function draw() {
    background(rgb(169,169,169));
     
    createEdgeSprites();

   if(surface1.isTouching(box) && box.bounceOff(surface1)){
       surface1.shapeColor = rgb(255,128,0);
       box.shapeColor = rgb(255,128,0);
       box.velocityY=0;
   }

   if(surface2.isTouching(box) && box.bounceOff(surface2)){
       surface2.shapeColor = rgb(200,160,20);
       box.shapeColor = rgb(200,160,20);
       box.velocityY=0;
   }

   if(surface3.isTouching(box) && box.bounceOff(surface3)){
       surface3.shapeColor = rgb(150,270,50);
       box.shapeColor = rgb(150,270,50);
       box.velocityY=0;
   }

   if(surface4.isTouching(box) && box.bounceOfff(surface4)){
       surface4.shapeColor = rgb(190,220,0);
       box.shapeColor = rgb(190,220,0);
       box.velocityY=0;
   }
    //add condition to check if box touching surface and make it box
    drawSprites();
}
