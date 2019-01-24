//
// parallaxIt
//
// Author: Thomas Whitehead
// Description: A simple plugin for giving any element a parallax effect.
//
const $shapeObjects = $('.g-hero__shape').children('svg');
var $svgMainObject = $shapeObjects.addClass('svg-object');
var $svgFirstChildrens = $svgMainObject.children();
var $svgChildrens = $svgFirstChildrens.children();
var $svgCircle = $svgFirstChildrens.children('circle');
console.log($svgChildrens[2]);

$('.g-hero').mousemove(function(e) {
	parallaxIt(e, '.js-image-tilt', -80);
	parallaxItContra(e, '.js-title-tilt', -40);
	parallaxItContra(e, $svgChildrens[0], -200);
	parallaxIt(e, $svgChildrens[1], +50);
	parallaxItContra(e, $svgChildrens[2], -100);
	// parallaxItContra(e, $svgChildrens[5], -200);

	// parallaxIt(e, "img", -30);
});

function parallaxIt(e, target, movement) {
	var $this = $('.g-hero');
	var relX = e.pageX - $this.offset().left;
	var relY = e.pageY - $this.offset().top;

	TweenMax.to(target, 1, {
		x: (relX - $this.width() / 2) / $this.width() * movement,
		y: (relY - $this.height() / 2) / $this.height() * movement,
	});
}

function parallaxItContra(e, target, movement) {
	var $this = $('.g-hero');
	var relX = e.pageX - $this.offset().left;
	var relY = e.pageY - $this.offset().top;

	TweenMax.to(target, 1, {
		x: (-relX + $this.width() / 2) / $this.width() * movement,
		y: (-relY + $this.height() / 2) / $this.height() * movement,
	});
}
function parallaxItObj(e, target, movement) {
	var $this = $('.g-hero');
	var relX = e.pageX - $this.offset().left;
	var relY = e.pageY - $this.offset().top;

	TweenMax.to(target, 1, {
		x: (relX + $this.width() / 1.1) / $this.width() * movement,
		y: (relY + $this.height() / 1.1) / $this.height() * movement,
	});
}

// $('.g-hero').on('mousemove', e => {
//
// });
