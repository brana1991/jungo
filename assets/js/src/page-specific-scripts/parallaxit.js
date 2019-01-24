//
// parallaxIt
//
// Author: Thomas Whitehead
// Description: A simple plugin for giving any element a parallax effect.
//
$('.g-hero').mousemove(function(e) {
	parallaxIt(e, '.js-image-tilt', -80);
	parallaxItContra(e, '.js-title-tilt', -40);
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
// $('.g-hero').on('mousemove', e => {
//
// });
