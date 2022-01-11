var bg, backgroundImg;
var player,playerImage;



function preload() {
  backgroundImg = loadImage("images/bg.jpg");
 playerImage=loadImage("images/iron.png")
  
}

function setup(){
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg)
  bg.velocityY=4
  bg.scale=2.5
   player=createSprite(200,500)
   player.addAnimation("runing",playerImage)
   player.scale=0.3
  
    
   
  
function draw() {
  if (keyDown("up")) {

    
  player.velocityY=-10;
  }
  if(keyDown("left")){
    player.x=player.x -5;
  }
   
  
  if(keyDown("right")){
    player.x=player.x+5;
  }
  if(bg.y>600){bg.y=300

  }
  player.velocityY=player.velocityY+1
    
     
    

    drawSprites();
   

    }
   


  }