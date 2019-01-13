if (window.innerWidth > 1200) {
	$('.js-tilt').tilt({
		glare: true,
		maxGlare: 0.5,
	});
	const $imageTilt = $('.js-image-tilt');
	const $titleTilt = $('.js-image-tilt');
	// $imageTilt.tilt({
	// 	// glare: true,
	// 	maxTilt: 10,
	// 	// maxGlare: 0.5,
	// });
	// $imageTilt.on('tilt.mouseEnter', function(e) {
	// $titleTilt.tilt({ maxTilt: 5 });
	// });
}
