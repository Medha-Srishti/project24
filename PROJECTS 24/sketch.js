const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, plane;;
var rubber, bouncy, squishy, mashy, fluffy, floofy, fuzzy, blobby;
var iron, strongArm, elite, battleAngel, bolt, metalBeard, idkWhatToNameThis;
var stone, rock, stoney, hard, tiny, gravel;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,580,1200,100)
    hammer = new Hammer(300,0);
    rubber = new Rubber(999, 0, 50);
    iron = new Iron(786, 0, 50, 50);
    stone = new Stone(96, 0, 50, 50);
    bouncy = new Rubber(82, 0, 51);
    squishy = new Rubber(103, 0, 52);
    mashy = new Rubber(920, 0, 53);
    fluffy = new Rubber(752, 0, 49);
    floofy = new Rubber(100, 0, 48);
    fuzzy = new Rubber(303, 0, 47);
    blobby = new Rubber(467, 0, 54);
    strongArm = new Iron(304, 0, 50, 50); 
    elite= new Iron(615, 0, 51, 51); 
    battleAngel = new Iron(810, 0, 52, 52);
    bolt = new Iron(715, 0, 53, 53);
   metalBeard = new Iron(356, 0, 54, 54); 
      idkWhatToNameThis = new Iron(613, 0, 55, 55);
      rock = new Stone(346, 0, 50, 50);
    stoney = new Stone(677, 0, 50, 50);
     hard = new Stone(930, 0, 50, 50);
    tiny = new Stone(1094, 0, 50, 50);
    gravel = new Stone(488, 0, 50, 50);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    iron.display();
    stone.display();
    bouncy.display(); 
    squishy.display(); 
    mashy.display(); 
    fluffy.display(); 
    floofy.display(); 
    fuzzy.display();
    blobby.display();
    strongArm.display();
     elite.display(); 
     battleAngel.display();
      bolt.display(); 
      metalBeard.display(); 
      idkWhatToNameThis.display();
      rock.display();
       stoney.display();
       hard.display();
       tiny.display(); 
       gravel.display();
    
 
}