var backgroundimage
var catwalk,catstand,catsit
var mousetaunt,mousesit,mouseover
var cat,mouse
function preload() {
    //load the images here
    backgroundimage = loadImage("images/garden.png")
    catsit = loadAnimation("images/cat1.png")
    catwalk = loadAnimation("images/cat2.png","images/cat3.png")
    catstand = loadAnimation("images/cat4.png")
    mousesit = loadAnimation("images/mouse1.png")
    mousetaunt = loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseover= loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   cat = createSprite(850,600)
   cat.addAnimation("catidle",catsit)
   cat.scale = 0.2
   mouse = createSprite(130,600)
   mouse.addAnimation("mouseidle",mousesit)
   mouse.scale = 0.2
}

function draw() {

    background(backgroundimage);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
     cat.velocityX = 0;
     cat.addAnimation("catover",catstand)
     cat.changeAnimation("catover")
     mouse.addAnimation("mouseover",mouseover)
     mouse.changeAnimation("mouseover")
     cat.x = mouse.x + cat.x
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mousetaunt)
      mouse.changeAnimation("mouseTeasing")
      mouse.frameDelay = 20;
      cat.velocityX = -4
      cat.addAnimation("catruning",catwalk)
      cat.changeAnimation("catruning")
  }


}
