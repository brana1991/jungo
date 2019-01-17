const $hamburgerOpenBtn = $('.js-open-nav'),
	$hamburgerCloseBtn = $('.js-close-nav');

$('.js-person:odd').addClass('team__person-even');

$hamburgerOpenBtn.on('click', () => {
	$('.main-navigation').css('right', '0px');
	setTimeout(function() {
		$('.main-navigation__hamburger-wrapper').css('opacity', '1');
		// $('.menu-item').animate({ left: '+=50' });
	}, 700);
	$('.site-overlay').css('display', 'block');
});
$hamburgerCloseBtn.on('click', () => {
	$('.main-navigation').css('right', '-100vw');
	$('.main-navigation__hamburger-wrapper').css('opacity', '0');
	$('.site-overlay').css('display', 'none');
});

$('.g-hero__side-scroll').on('click', function() {
	console.log('asd');
	var vheight = $(window).height();
	$('html, body').animate(
		{
			scrollTop: (Math.floor($(window).scrollTop() / vheight) + 1) * vheight,
		},
		500,
	);
});
