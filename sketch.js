const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var papyrus;
var ground;
var house, houseimg;
var input, button;
var inside, insideimg;
var stick1, stick2, stick3;

var room3, room3img
var room1, room1img;
var room2, room2img
var room4, room4img;

var growling;
var gameState = "form"

var detic, deticimg;
var detic2, detic2img;
var detic3, detic3img;
var detic4, detic4img;

var shotg, shotgimg
var key1, keyimg;
var fuel, fuelimg;

var doneimg;
var player, ghost, playerimg, ghostimg;

function preload() {
  ghostimg = loadImage("Images/ghost.png");
  houseimg = loadAnimation("Images/house1.png", "Images/house2.png", "Images/house3.png", "Images/house4.png", "Images/house5.png", "Images/house6.png", "Images/house7.png");
  insideimg = loadAnimation("Images/entry1.png", "Images/entry2.png", "Images/entry3.png", "Images/entry4.png", "Images/entry5.png", "Images/entry6.png", "Images/entry7.png", "Images/entry8.png", "Images/ghost1.png", "Images/ghost2.png", "Images/ghost3.png", "Images/ghost4.png", "Images/ghost5.png", "Images/entry9.png", "Images/entry10.png", "Images/entry11.png", "Images/entry12.png", "Images/entry13.png", "Images/entry14.png", "Images/entry15.png");

  deticimg = loadAnimation("Images/det1(1).png", "Images/det1(2).png", "Images/det1(3).png", "Images/det1(4).png", "Images/det1(5).png", "Images/det1(6).png", "Images/det1(7).png", "Images/det1(8).png")
  detic2img = loadAnimation("Images/det2(1).png", "Images/det2(2).png", "Images/det2(3).png", "Images/det2(4).png", "Images/det2(5).png", "Images/det2(6).png")
  detic4img = loadAnimation("Images/det3(1).png", "Images/det3(2).png", "Images/det3(3).png", "Images/det3(4).png", "Images/det3(5).png", "Images/det3(6).png", "Images/det3(7).png", "Images/det3(8).png")
  detic3img = loadAnimation("Images/det4(1).png", "Images/det4(2).png", "Images/det4(3).png", "Images/det4(4).png", "Images/det4(5).png", "Images/det4(6).png", "Images/det4(7).png", "Images/det4(8).png");
  //growling = loadSound("growl.mp3");

  fuelimg = loadImage("Images/fuelcan.png");
  keyimg = loadImage("Images/key.png");
  doneimg = loadImage("Images/done.png");
  shotgimg = loadImage("Images/gshot.png");

  roomimg = loadAnimation("Images/room1(1).png", "Images/room1(2).png", "Images/room1(3).png", "Images/room1(4).png", "Images/room1(5).png", "Images/room1(6).png", "Images/room1(7).png", "Images/room1(8).png")
  room2img = loadAnimation("Images/room2(1).png", "Images/room2(2).png", "Images/room2(3).png", "Images/room2(4).png")
  room3img = loadAnimation("Images/room3(1).png", "Images/room3(2).png", "Images/room3(3).png", "Images/room3(4).png", "Images/room3(5).png", "Images/room3(6).png", "Images/room3(7).png", "Images/room3(8).png", "Images/room3(9).png", "Images/room3(10).png")
  room4img = loadAnimation("Images/e.png", "Images/e2.png", "Images/e3.png", "Images/e4.png", "Images/e5.png", "Images/e6.png", "Images/e7.png", "Images/e8.png", "Images/e9.png", "Images/e10.png");
}

function setup() {
  createCanvas(1200, 400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width / 2, 400, width, 10);

  house = createSprite(600, 220);
  house.addAnimation("hous", houseimg);
  house.scale = 1;

  inside = createSprite(600, 220);
  inside.addAnimation("ins", insideimg);
  inside.scale = 2;
  inside.visible = false;

  room1 = createSprite(600, 200);
  room1.addAnimation("rom", roomimg);
  room1.visible = false;

  room2 = createSprite(600, 200);
  room2.addAnimation("rom2", room2img);
  room2.visible = false;
  room2.scale = 2;

  room3 = createSprite(600, 200);
  room3.addAnimation("rom3", room3img);
  room3.visible = false;
  room3.scale = 2;

  room4 = createSprite(600, 200);
  room4.addAnimation("rom4", room4img);
  room4.visible = false;
  room4.scale = ;

  fuel = createSprite(700, 300);
  fuel.addImage(fuelimg);
  fuel.visible = false;

  shotg = createSprite(700, 300);
  shotg.addImage(shotgimg);
  shotg.visible = false;
  shotg.scale = 0.07;

  detic = createSprite(500, 300);
  detic.addAnimation("det1", deticimg);
  detic.visible = false;

  detic2 = createSprite(600, 330);
  detic2.addAnimation("det2", detic2img);
  detic2.visible = false;

  detic3 = createSprite(300, 350);
  detic3.addAnimation("det3", detic3img);
  detic3.visible = false;
  detic3.scale = 0.5;

  detic4 = createSprite(100, 280);
  detic4.addAnimation("det4", detic4img);
  detic4.visible = false;

  key1 = createSprite(800, 200);
  key1.addImage(keyimg);
  key1.visible = false;

  var title = createElement('h2')
  title.html("Horror Escape Game");
  title.position(500, 0);
  input = createInput("");
  button = createButton('Play');
  input.position(950, 160);
  button.position(1000, 200);
  // player = createSprite(600,200);
  // player.addAnimation("Horror",playerimg);
  // player.scale = 0.5;
  // next = createButton('Next Room');
  ghost = createSprite(200, 200);
  ghost.addImage(ghostimg);
  ghost.scale = 0.5;
  Engine.run(engine);
}


function draw() {
  background(0);
  drawSprites();
  if (gameState === "form") {
    button.mousePressed(() => {
      input.hide();
      button.hide();
      inside.visible = true;
      ghost.visible = true;
      gameState = "play";
    })
    if (gameState === "play") {
      textSize(15);
      fill("red");
      text("PRESS RIGHT ARROW", 400, 100);
    }
  }


  if (keyCode === RIGHT_ARROW && gameState === "play") {
    ghost.visible = false;
    room1.visible = true;
    inside.visible = false;
    house.visible = false;
    room1.scale = 3;
    detic.visible = true;
    detic.scale = 0.5
    fuel.visible = true;
    fuel.scale = 0.008;
    textSize(15);
    fill("red");
    text("PRESS UP ARROW IF COLLECTED", 500, 100);
    if (mousePressedOver(fuel)) {
      fuel.addImage(doneimg)
      fuel.scale = 0.2;
      //growling.play();
      gameState = "gonext";
    }

  }
  if (keyCode === UP_ARROW && gameState === "gonext") {
    ghost.visible = false;
    room1.visible = false;
    inside.visible = false;
    house.visible = false;
    room1.scale = 3;
    detic.visible = false;
    detic.scale = 0.5
    detic2.visible = true;
    detic2.scale = 0.5;
    fuel.visible = false;
    fuel.scale = 0.008;
    room2.visible = true;
    key1.visible = true;
    key1.scale = 0.05;
    textSize(15);
    fill("red");
    text("PRESS LEFT ARROW IF COLLECTED", 500, 100);
    if (mousePressedOver(key1)) {
      key1.addImage(doneimg)
      key1.scale = 0.2;
      //growling.play();
      gameState = "nextroom";
    }
  }
  if (keyCode === LEFT_ARROW && gameState === "nextroom") {
    ghost.visible = false;
    room1.visible = false;
    inside.visible = false;
    house.visible = false;
    room1.scale = 3;
    detic.visible = false;
    detic.scale = 0.5
    detic2.visible = false;
    detic2.scale = 0.5;
    fuel.visible = false;
    fuel.scale = 0.008;
    room2.visible = false;
    key1.visible = false;
    key1.scale = 0.05;
    room3.visible = true;
    detic3.visible = true;
    shotg.visible = true;
    textSize(15);
    fill("red");
    text("PRESS DOWN ARROW IF COLLECTED", 500, 100);
    if (mousePressedOver(shotg)) {
      shotg.addImage(doneimg)
      shotg.scale = 0.2;
      //growling.play();
      gameState = "laststage";
    }
  }
  if (keyCode === DOWN_ARROW && gameState === "laststage") {
    ghost.visible = false;
    room1.visible = false;
    inside.visible = false;
    house.visible = false;
    room1.scale = 3;
    detic.visible = false;
    detic.scale = 0.5
    detic2.visible = false;
    detic2.scale = 0.5;
    fuel.visible = false;
    fuel.scale = 0.008;
    room2.visible = false;
    key1.visible = false;
    key1.scale = 0.05;
    room3.visible = false;
    detic3.visible = false;
    shotg.visible = false;
    room4.visible = true;
    detic4.visible = true;
  }

  ground.display();
}
