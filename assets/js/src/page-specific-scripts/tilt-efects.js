$(document).ready(function() {
	var movementStrength = 25;
	var height = movementStrength / $(window).height();
	var width = movementStrength / $(window).width();
	$('.g-hero__background').mousemove(function(e) {
		var pageX = e.pageX - $(window).width() / 2;
		var pageY = e.pageY - $(window).height() / 2;
		var newvalueX = width * pageX * -1 - 50;
		var newvalueY = height * pageY * -1 - 25;
		$('.g-hero__background').css(
			'background-position',
			newvalueX + 'px     ' + newvalueY + 'px',
		);
	});
});
