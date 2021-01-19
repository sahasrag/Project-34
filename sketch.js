//Create variables here
var dog, happyDog, database, foodS, foodStock;
function preload()
{
  //load images here
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250,50,50);
  database = firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(dogHappy);
}
  drawSprites();
  //add styles here
textSize(20);
fill("yellow");
stroke();
text("Note: Press up arrow Key to feed Drago Milk.", 300, 100);

}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
  }

function readStock(data){
foods=data.val();
}

