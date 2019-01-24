if (window.innerWidth > 1200 && window.innerWidth < 1800) {
	const $imageTilt = $('.js-image-tilt');
	const $titleTilt = $('.js-image-tilt');
	$('.g-hero__background').tilt({
		maxTilt: 3,
		perspective: 800,
		// easing: 'cubic-bezier(.03,.98,.52,.99)',
		speed: 800,
		scale: 1,
	});
} else if (window.innerWidth >= 1800) {
	console.log('adssa');
	$('.g-hero__background').tilt({
		maxTilt: 2,
		perspective: 600,
		// easing: 'cubic-bezier(.03,.98,.52,.99)',
		speed: 800,
		scale: 1,
	});
}
