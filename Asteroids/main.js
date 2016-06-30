var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

window.addEventListener('keydown', function(evt) { onKeyDown(evt); }, false);
window.addEventListener('keyup', function(evt) { onKeyUp(evt); }, false);



var KEY_SPACE = 32;
var KEY_LEFT = 37;
var KEY_UP = 38;
var KEY_RIGHT = 39;
var KEY_DOWN = 40;
var KEY_A = 65;
var KEY_D = 68;

var SCREEN_WIDTH = canvas.width;
var SCREEN_HEIGHT = canvas.height;

var ASTEROID_SPEED = 0.8;
var GOD_SPEED = 1;
var GOD_TURN_SPEED = 0.04;
var BULLET_SPEED = 1.5;

var god =
{
	image: document.createElement("img"),
	x: SCREEN_WIDTH/2,
	y: SCREEN_HEIGHT/2,
	width: 93,
	height: 80,
	directionX: 0,
	directionY: 0,
	angularDirection: 0,
	rotation: 0
};

god.image.src = "ship.png";


function onKeyDown(event)
{
	if(event.keyCode == KEY_UP)
	{
		god.directionY = 1;
	}
	
	if(event.keyCode == KEY_DOWN)
	{
		god.directionY = -1;
	}
	
	if(event.keyCode == KEY_LEFT)
	{
		god.angularDirection = -1;
	}
	
	if(event.keyCode == KEY_RIGHT)
	{
		god.angularDirection = 1;
	}
	
	/*if(event.keyCode == KEY_A)
	{
		var s = Math.sin(angle);
		var c = Math.cos(angle);
		var xSpeed = -1;
		var ySpeed = 0;
		x += (xSpeed * c) - (ySpeed * s);
		y += (xSpeed * s) + (ySpeed * c);
	}
	
	if(event.keyCode == KEY_D)
	{
		var s = Math.sin(angle);
		var c = Math.cos(angle);
		var xSpeed = 1;
		var ySpeed = 0;
		x += (xSpeed * c) - (ySpeed * s);
		y += (xSpeed * s) + (ySpeed * c);
	}*/
}

function onKeyUp(event)
{
	if(event.keyCode == KEY_UP)
	{
		god.directionY = 0;
	}
	if(event.keyCode == KEY_DOWN)
	{
		god.directionY = 0;
	}
	if(event.keyCode == KEY_LEFT)
	{
		god.angularDirection = 0;
	}
	if(event.keyCode == KEY_RIGHT)
	{
		god.angularDirection = 0;
	}
}

function run()
{
	context.fillStyle = "#000066";
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	var s = Math.sin(god.rotation);
	var c = Math.cos(god.rotation);
	
	var xDir = (god.directionX * c) - (god.directionY * s);
	var yDir = (god.directionX * s) + (god.directionY * c);
	var xVel = xDir * GOD_SPEED;
	var yVel = yDir * GOD_SPEED;
	
	god.x += xVel;
	god.y += yVel
	
	god.rotation += god.angularDirection * GOD_TURN_SPEED;
	
	context.save();
		context.translate(god.x, god.y);
		context.rotate(god.rotation);
		context.drawImage(god, -god.width/2, -god.height/2);
	context.restore();
	
}

//-----------------------Don't edit anything below here------------------------------

(function() {
 var onEachFrame;
 if (window.requestAnimationFrame) {
 onEachFrame = function(cb) {
 var _cb = function() { cb(); window.requestAnimationFrame(_cb); }
 _cb();
 };
 } else if (window.mozRequestAnimationFrame) {
 onEachFrame = function(cb) {
 var _cb = function() { cb();
window.mozRequestAnimationFrame(_cb); }
 _cb();
 };
 } else {
 onEachFrame = function(cb) {
 setInterval(cb, 1000 / 60);
 }
 }

 window.onEachFrame = onEachFrame;
})();
window.onEachFrame(run);