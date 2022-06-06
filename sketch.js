var PLAY = 1
var END = 0
var gameState = PLAY;
var score = 0;
var alien,floor,mouse,bread,cupcake;
var mouseGroup,breadGroup,cupcakeGroup;
var alienAnimation,mouseAnimation,breadImg,cupcakeImg,floorImg;

function preload () {
    alienAnimation = loadAnimation("B1M0.png","B1M1.png","B1M2.png","B1M3.png","B1M4.png","B1M5.png","B1M6.png");
    floorImg = loadImage("floor.png");
    mouseAnimation = loadAnimation("mouse1.png", "mouse2.png");
    breadImg = loadImage("bread.png");
    cupcakeImg = loadImage("cupcake.png");
}

function setup () {

    createCanvas(windowWidth,windowHeight);
   /* 
    floor = createSprite (windowWidth/2,windowHeight/2);
    floor.addImage (floorImg);
    floor.velocityY = 1;
    floor.scale = 1*/
    
    alien = createSprite (windowWidth/2,windowHeight/4*3,20,20);
    alien.addAnimation ("alien",alienAnimation);
    alien.scale = 0.3

    

    mouseGroup = new Group();
    breadGroup = new Group();
    cupcakeGroup = new Group();

}

function draw (){

   
    

    if (gameState === PLAY) {
    background(0);

    if (floor.y > windowHeight/2) {
        floor.y = height/2;
    }

    edges = createEdgeSprites();
    alien.collide(edges);


        if (keyDown("D")) {
        alien.x = alien.x + 5;
        }

        if (keyDown("A")) {
        alien.x = alien.x - 5;
        }
     

     createMouse();
     createBread();
     createCupcake();



     if (breadGroup.isTouching(alien)) {
         score = score + 50
         breadGroup.destroyEach();
     } 
     if (cupcakeGroup.isTouching(alien)) {
         score = score + 100
         cupcakeGroup.destroyEach();
     } 
     
     if (mouseGroup.isTouching(alien)); {
        gameState = END;
        }
     fill ("blue");
    textSize(24);
    text("score:"+ score, windowWidth-100, 20);
    } else if (gameState === END) {
       // alien.destroy();
        //mouseGroup.destroyEach();
        //cupcakeGroup.destroyEach();
        //breadGroup.destroyEach();

        mouseGroup.setVelocityYEach(0);
        breadGroup.setVelocityYEach(0);
        cupcakeGroup.setVelocityYEach(0);

        fill ("red");
        textSize(24);
        text("Caught...",width/2,height/2)
     }

        

     
     drawSprites();
    

}

function createMouse() {
    if (World.frameCount % 200 == 0) {
        var mouse = createSprite(Math.round(random(50,windowWidth-50)),40,20,20);
        mouse.addAnimation (mouseAnimation);
        mouse.velocityY = 3 + (score/400);
        mouse.lifetime = 150;
        mouseGroup.add (mouse);
     }
}

function createBread() {
    if (World.frameCount % 200 == 0) {
        var bread = createSprite (Math.round(random(50,windowWidth-50)),40,20,20);
        bread.addImage(breadImg)
        bread.velocityY = 3 + (score/400);
        bread.lifetime = 150;
        breadGroup.add (bread);
    }
}

function createCupcake() {
    if (World.frameCount % 200 == 0) {
        var cupcake = createSprite (Math.round(random(50,windowWidth-50)),40,20,20);
        cupcake.addImage(cupcakeImg)
        cucake.velocityY = 3 + (score/400);
        cupcake.lifetime = 150;
        cupcakeGroup.add (cupcake);
    } } 
