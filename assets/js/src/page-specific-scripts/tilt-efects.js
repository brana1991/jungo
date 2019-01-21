if (window.innerWidth > 1200 && window.innerWidth < 1800) {
	// $('.js-tilt').tilt({
	// 	glare: true,
	// 	maxGlare: 0.5,
	// });
	const $imageTilt = $('.js-image-tilt');
	const $titleTilt = $('.js-image-tilt');
	$('.g-hero__background').tilt({
		maxTilt: 5,
		perspective: 1400,
		easing: 'cubic-bezier(.03,.98,.52,.99)',
		speed: 1100,
		scale: 1.01,
	});
	$imageTilt.tilt({
		maxTilt: 11,
		perspective: 1000,
		easing: 'cubic-bezier(.03,.98,.52,.99)',
		speed: 1400,
		scale: 1.01,
	});

	// $imageTilt.tilt({
	// 	// glare: true,
	// 	maxTilt: 10,
	// 	// maxGlare: 0.5,
	// });
	// $imageTilt.on('tilt.mouseEnter', function(e) {
	// $titleTilt.tilt({ maxTilt: 5 });
	// });
} else if (window.innerWidth >= 1800) {
	$('.g-hero__background').tilt({
		maxTilt: 3,
		perspective: 600,
		easing: 'cubic-bezier(.03,.98,.52,.99)',
		speed: 1000,
		scale: 1.01,
	});
	$imageTilt.tilt({
		maxTilt: 11,
		perspective: 1000,
		easing: 'cubic-bezier(.03,.98,.52,.99)',
		speed: 1400,
		scale: 1.01,
	});
}

// $('.multiple-items').slick({
// 	infinite: true,
// 	slidesToShow: 3,
// 	slidesToScroll: 3,
// });
