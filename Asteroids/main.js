var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

window.addEventListener('keydown', function(evt) { onKeyDown(evt); }, false);

var player = document.createElement("img");
player.src = "ship.png"

var x = 10;
var y = 10;

function run()
{
	context.fillstyle = "#ccc";
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	context.drawImage(player, x, y)
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