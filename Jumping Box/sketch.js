var canvas;
var music;
var boxsprite;
var rectangle1;
var rectangle2;
var rectangle3;
var rectangle4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    //create 4 different surfaces
    boxsprite = createSprite(400,300,40,40)
    boxsprite.shapeColor = "black"
    rectangle1 = createSprite(100,590,180,20)
    rectangle1.shapeColor = "blue"
    rectangle2 = createSprite(300,590,180,20)
    rectangle2.shapeColor = "orange"
    rectangle3 = createSprite(500,590,180,20)
    rectangle3.shapeColor = "red"
    rectangle4 = createSprite(700,590,180,20)
    rectangle4.shapeColor = "green"

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    
    edges = createEdgeSprites()
   
    boxsprite.bounceOff(edges)
  


    if(keyDown("LEFT_ARROW")){
        boxsprite.velocityX = -7
        boxsprite.velocityY = 7
    }
    if(boxsprite.isTouching(rectangle1) && boxsprite.bounceOff(rectangle1)){
        boxsprite.shapeColor = "blue"
    }
    if(boxsprite.isTouching(rectangle3) && boxsprite.bounceOff(rectangle3)){
        boxsprite.shapeColor = "red"
    }
    if(boxsprite.isTouching(rectangle4) && boxsprite.bounceOff(rectangle4)){
        boxsprite.shapeColor = "green"
    }

    if(boxsprite.isTouching(rectangle2)){
        boxsprite.shapeColor = "orange"
        boxsprite.velocityX = 0
        boxsprite.velocityY = 0
    }

    //create edgeSprite


drawSprites()
    //add condition to check if box touching surface and make it box
}
