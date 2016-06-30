var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

window.addEventListener('keydown', function(evt) { onKeyDown(evt); }, false);
window.addEventListener('keyup', function(evt) { onKeyUp(evt); }, false);


var player = document.createElement("img");
player.src = "ship.png"

var KEY_SPACE = 32;
var KEY_LEFT = 37;
var KEY_UP = 38;
var KEY_RIGHT = 39;
var KEY_DOWN = 40;
var KEY_A = 65;
var KEY_D = 68;

var x = 10;
var y = 10;
var angle = 0;
//var GodSpeed = 0;

function onKeyDown(event)
{
	if(event.keyCode == KEY_UP)
	{
		var s = Math.sin(angle);
		var c = Math.cos(angle);
		var xSpeed = 0;
		var ySpeed = 1;
		x += (xSpeed * c) - (ySpeed * s);
		y += (xSpeed * s) + (ySpeed * c);
	}
	
	if(event.keyCode == KEY_DOWN)
	{
		var s = Math.sin(angle);
		var c = Math.cos(angle);
		var xSpeed = 0;
		var ySpeed = -1;
		x += (xSpeed * c) - (ySpeed * s);
		y += (xSpeed * s) + (ySpeed * c);
	}
	
	if(event.keyCode == KEY_LEFT)
	{
		angle -= 0.02;
	}
	
	if(event.keyCode == KEY_RIGHT)
	{
		angle += 0.02;
	}
	
	if(event.keyCode == KEY_A)
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
	}
}

function onKeyUp(event)
{
}

function run()
{
	context.fillstyle = "#ccc";
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	context.save();
		context.translate(x, y);
		context.rotate(angle);
		context.drawImage(player, -player.width/2, -player.height/2);
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