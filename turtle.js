/// <reference path="./lib/Intellisense/js-turtle_hy.ts" />
//DOCUMENTATION: https://hanumanum.github.io/js-turtle/
/*
showGrid(20);      
forward(distance)  
right(angle)       
left(angle) 	   
goto(x,y) 	       
clear() 	       
penup() 	       
pendown() 	       
reset() 	       
angle(angle)	   
width(width)       

color(r,g,b)
color([r,g,b])
color("red")
color("#ff0000")
*/
const screen = new TurtleCanvas("canvas", 1200, 600);
screen.setBackground("white");

// Create a turtle object 
const pointer = new Turtle(screen);
pointer.setSpeed(2);
pointer.setColor("blue"); // Set color of the turtle pointer 

// Function to write "Eemil" with the turtle pointer 
function write_eemil() {
    pointer.moveTo(-200, 0); // Set starting position 
}

function write_E() {
    pointer.turnLeft(90);
    pointer.forward(100);
    pointer.turnRight(90);
    pointer.forward(50);
    pointer.turnRight(90);
    pointer.forward(10);
    pointer.turnRight(90);
    pointer.forward(40);
    pointer.turnLeft(90);
    pointer.forward(35);
    pointer.turnLeft(90);
    pointer.forward(40);
    pointer.turnRight(90);
    pointer.forward(10);
    pointer.turnRight(90);
    pointer.forward(40);
    pointer.turnLeft(90);
    pointer.forward(35);
    pointer.turnLeft(90);
    pointer.forward(40);
    pointer.turnRight(90);
    pointer.forward(10);
    pointer.turnLeft(90);
    pointer.forward(20);
}

function write_M() {
    pointer.turnLeft(80);
    pointer.forward(100);
    pointer.turnRight(130);
    pointer.forward(50);
    pointer.turnLeft(100);
    pointer.forward(50);
    pointer.turnRight(130);
    pointer.forward(100);
    pointer.turnRight(100);
    pointer.forward(10);
    pointer.turnRight(80);
    pointer.forward(75);
    pointer.turnLeft(130);
    pointer.forward(40);
    pointer.turnRight(100);
    pointer.forward(40);
    pointer.turnLeft(130);
    pointer.forward(75);
    pointer.turnLeft(100);
    pointer.forward(105);
}

function write_I() {
    pointer.turnLeft(90);
    pointer.forward(100);
    pointer.turnRight(90);
    pointer.forward(10);
    pointer.turnRight(90);
    pointer.forward(100);
    pointer.turnLeft(90);
}

function write_L() {
    pointer.forward(20);
    pointer.turnLeft(90);
    pointer.forward(100);
    pointer.turnRight(90);
    pointer.forward(10);
    pointer.turnRight(90);
    pointer.forward(90);
    pointer.turnLeft(90);
    pointer.forward(60);
    pointer.turnRight(90);
    pointer.forward(10);
    pointer.turnRight(90);
    pointer.forward(355);
    pointer.turnRight(180);
    pointer.forward(360);
    pointer.turnLeft(90);
    pointer.penUp();
    pointer.forward(70);
    pointer.penDown();
}

function write_heart() {
    pointer.beginFill("red");
    pointer.turnLeft(50);
    pointer.forward(60);
    pointer.circle(-30, 200);
    pointer.setHeading(60);
    pointer.circle(-30, 200);
    pointer.forward(60);
    pointer.endFill();
    pointer.turnLeft(50);
    pointer.penUp();
    pointer.forward(70);
    pointer.turnLeft(90);
    pointer.forward(10);
    pointer.penDown();
    pointer.setColor("DeepPink");
    pointer.forward(25);
    pointer.turnLeft(90);
    pointer.forward(10);
    pointer.turnRight(90);
}

function write_S() {
    pointer.forward(10);
    pointer.circle(18, 160);
    pointer.circle(-28, 170);
    pointer.turnRight(90);
    pointer.forward(10);
    pointer.turnRight(90);
    pointer.circle(18, 170);
    pointer.circle(-28, 160);
    pointer.turnRight(180);
    pointer.forward(45);
}

function write_U() {
    pointer.forward(30);
    pointer.turnLeft(180);
    pointer.circle(-30, 90);
    pointer.forward(70);
    pointer.turnRight(90);
    pointer.forward(10);
    pointer.turnRight(90);
    pointer.forward(70);
    pointer.circle(20, 180);
    pointer.forward(70);
    pointer.turnRight(90);
    pointer.forward(10);
    pointer.turnRight(90);
    pointer.forward(70);
    pointer.circle(-30, 90);
}

function write_V() {
    pointer.turnRight(180);
    pointer.forward(80);
    pointer.turnLeft(110);
    pointer.forward(105);
    pointer.turnRight(110);
    pointer.forward(10);
    pointer.turnRight(70);
    pointer.forward(95);
    pointer.turnLeft(140);
    pointer.forward(95);
    pointer.turnRight(70);
    pointer.forward(10);
    pointer.turnRight(110);
    pointer.forward(105);
    pointer.turnLeft(110);
    pointer.forward(50);
}

// Main function 
function main() {
    write_eemil();
    write_E();
    write_E();
    write_M();
    write_I();
    write_L();
    write_heart();
    write_S();
    write_U();
    write_V();
    write_I();
    pointer.turnLeft(180);
    pointer.forward(270);
}

main();
