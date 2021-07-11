var player ,playerImg, platformsLeft,platformsRight,platformsImg ,platformsLeftGroup,platformsRightGroup ,invisibleGround;
var lava , lavaImg ,bg , leftEdge,rightEdge,topEdge;
var START = 0;
var PLAY = 1;
var END = 2;
var restart ,gameOver;

function preload(){

}

function setup(){
    createCanvas(500,1000)

    player = createSprite(250,800,50,100);

    invisibleGround = createSprite(250,900,500,10);

    platformsLeftGroup = new Group();
    platformsRightGroup = new Group();

    //invisibleGround.visible = false;

    leftEdge = createSprite(0,500,10,1000);
    rightEdge = createSprite(500,500,10,1000);
    topEdge  =createSprite(250,0,500,10);
}

function draw(){
    background(255);
        player.collide(invisibleGround);
        player.collide(leftEdge);
        player.collide(rightEdge);
        player.collide(topEdge);
        player.collide(platformsLeftGroup);
        player.collide(platformsRightGroup);
        
    if(keyDown(32)){
        player.velocityY = -10;
        invisibleGround.destroy();
        
    }
        player.velocityY += 1; 
 
    if(keyDown(LEFT_ARROW)){
        player.velocityX = -10;
    }

    if(keyDown(RIGHT_ARROW)){
        player.velocityX = 10;
    }

    if(player.y >= 900){
        text('Game Over',250,500);
    }
    drawSprites();
    spawnplatforms();
    
}

function spawnplatforms(){
   if(frameCount % 150 ===0 ){
       var randomY  = random(50,100);

       platformsLeft = createSprite(50,randomY+25);
        platformsLeft.velocityY = 2.5;
        platformsLeft.lifetime = 500;

        platformsRight = createSprite(450,randomY+100);
        platformsRight.velocityY = 2.5;
        platformsRight.lifetime = 500;

        platformsLeftGroup.add(platformsLeft);
        platformsRightGroup.add(platformsRight);

   }


}