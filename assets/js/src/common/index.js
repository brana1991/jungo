const $hamburgerOpenBtn = $('.js-open-nav'),
	$hamburgerCloseBtn = $('.js-close-nav');

// if (window.innerWidth < 1200) {
$('.js-person:odd').addClass('team__person-even');
console.log('test');
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
// }
