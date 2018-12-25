// Elements
const $start = $('#start'),
	$nextBtn = $('#next'),
	$nextBtnRemoveClass = $('.next-btn-toggle'),
	$newNextBtnAddedClass = $('.new-next-btn-toggle'),
	$cigaraBtn = $('#cigaraBtn'),
	$iqosBtn = $('#iqosBtn'),
	$radioOptionBtn = $('.radio-option'),
	$checkboxOptionBtn = $('.checkbox-option'),
	$skipToThankYouBtn = $('.skip-to-thankyou'),
	$skipToLastSlideBtn = $('#skip-to-last-slide'),
	//Screens
	$defaultScreen = $('.iqos__default-slider'),
	$welcomeScreen = $('.iqos__default-slider--welcome'),
	$welcomeStartQuest = $('.iqos__default-slider--welcome-start'),
	$iqosSmokerScreen = $('.iqos__iqos-smoker'),
	$cigareteSmokerScreen = $('.iqos__cigarete-smoker'),
	$thankYouScreen = $('.iqos__thank-you'),
	//Object field to PrefixAllGlobals
	$citySelect = $('#city-select'),
	$placeSelect = $('#prodajno-mesto-ankete'),
	$dateSelect = $('#datum-ankete'),
	$genderSelect = $('#pol-ispitanika'),
	$ageSelect = $('#godine-ispitanika'),
	$cigA1Radio = $('.cig-a1'),
	$cigA2Radio = $('.cig-a2'),
	$cigA3Check = $('.cig-a3'),
	$cigA4Radio = $('.cig-a4'),
	$cigA5Radio = $('.cig-a5'),
	$cigA6Check = $('.cig-a6'),
	$cigA7Check = $('.cig-a7'),
	$iqosA1Radio = $('.iqos-a1'),
	$iqosA2Check = $('.iqos-a2'),
	$iqosA3Radio = $('.iqos-a3'),
	$iqosA4Check = $('.iqos-a4'),
	$iqosA5Radio = $('.iqos-a5'),
	$iqosA6Radio = $('.iqos-a6'),
	$resultBox = $('.final-result'),
	$submitObjectBtn = $('#submit-answer'),
	$choiceBtn = $('.choice-btn');
const moveLeft = -100;
var currentDiv = $welcomeStartQuest;
let click = 0;
var state = '';
var id;
//Object
var resultObject = {
	city: 'I ZAGREBAČKA',
	place: 'IQOS Stručnjak',
	date: '27.12',
	gender: 'Ž',
	age: '19-29',
	iqosSmoker: true,
	smoker: 'Odrasli korisnik IQOS-a',
	cigareteA1: '',
	cigareteA2: '',
	cigareteA3: '',
	cigareteA4: '',
	cigareteA5: '',
	cigareteA6: '',
	cigareteA7: '',
	iqosA1: '',
	iqosA2: '',
	iqosA3: '',
	iqosA4: '',
	iqosA5: '',
	iqosA6: '',
};

// $('select').on('focus', function() {
// 	$(this)
// 		.parent()
// 		.addClass('option-wrapp-active');
// });
// $('option').on('click', function() {
// 	$(this)
// 		.parent()
// 		.removeClass('option-wrapp-active');
// });
$start.on('click', function() {
	$welcomeScreen.hide('slow');
	$welcomeStartQuest.show('slow');
	$nextBtn.css('display', 'flex');
});
//Next slide
$nextBtnRemoveClass.on('click', function() {
	console.log(resultObject);
	click += 1;
	if (state === '') {
		currentDiv.animate({ left: click * moveLeft + 'vw' }, 1000);
		currentDiv.next().animate({ left: click * moveLeft + 'vw' }, 1000);
		currentDiv = currentDiv.next();
		$nextBtn.addClass('disabled');
		//
	} else if (state === 'iqos') {
		//IQOS CURRENT
		currentDiv = $('.iqos__iqos-smoker--first');
		$defaultScreen.css('display', 'none');
		$iqosSmokerScreen.fadeIn('slow');
		$iqosSmokerScreen.css('display', 'flex');
		state = 'iqos-in';
		click = 0;
		$nextBtn.addClass('disabled');
		//
	} else if (state === 'cigarete') {
		//CIGARETE CURRENT
		currentDiv = $('.iqos__cigarete-smoker--first');
		$defaultScreen.css('display', 'none');
		$cigareteSmokerScreen.fadeIn('slow');
		$cigareteSmokerScreen.css('display', 'flex');
		state = 'cigarete-in';
		click = 0;
		//
	} else if (state === 'iqos-in') {
		// IQOS IN CURRENT
		currentDiv.animate({ left: click * moveLeft + 'vw' }, 1000);
		currentDiv.next().animate({ left: click * moveLeft + 'vw' }, 1000);
		currentDiv = currentDiv.next();
		$nextBtn.addClass('disabled');
		//
	} else if (state === 'cigarete-in') {
		//Cigarete in state
		currentDiv.animate({ left: click * moveLeft + 'vw' }, 1000);
		currentDiv.next().animate({ left: click * moveLeft + 'vw' }, 1000);
		currentDiv = currentDiv.next();
		$nextBtn.addClass('disabled');
		//
	} else if (state === 'thank-you') {
		// $iqosSmokerScreen.css('display', 'none');
		// $defaultScreen.css('display', 'none');
		// $cigareteSmokerScreen.css('display', 'none');
		// $thankYouScreen.fadeIn('slow');
		// $thankYouScreen.css('display', 'flex');
		let jsonObj = JSON.stringify(resultObject);
		$resultBox.val(jsonObj);
		$submitObjectBtn.click();
		//
	} else if (state === 'last-slide') {
		currentDiv.animate({ left: '-600vw' }, 1000);
		// currentDiv.next().animate({ left: click * moveLeft + 'vw' }, 1000);
		// currentDiv = currentDiv.next();
		$nextBtn.addClass('disabled');
	}
});

$newNextBtnAddedClass.on('click', function() {
	click += 1;
	currentDiv.animate({ left: click * moveLeft + 'vw' }, 1000);
	currentDiv.next().animate({ left: click * moveLeft + 'vw' }, 1000);
});

$iqosBtn.on('click', function() {
	state = 'iqos';
	resultObject.iqosSmoker = true;
});
$cigaraBtn.on('click', function() {
	state = 'cigarete';
	resultObject.iqosSmoker = false;
});
$skipToLastSlideBtn.on('click', function() {
	state = 'last-slide';
});
$skipToThankYouBtn.on('click', function() {
	state = 'thank-you';
	$nextBtn.removeClass('disabled');
	$nextBtn.addClass('finish');
});
$choiceBtn.on('click', function() {
	id = this.id;
	$(this)
		.siblings()
		.removeClass('active-btn');
	$(this).addClass('active-btn');
	$nextBtn.removeClass('disabled');
});

//
$radioOptionBtn.on('click', function() {
	$nextBtn.removeClass('disabled');
});
$checkboxOptionBtn.on('click', function() {
	$nextBtn.removeClass('disabled');
});

$citySelect.on('change', function() {
	resultObject.city = this.value;
});
$placeSelect.on('change', function() {
	resultObject.place = this.value;
});
$dateSelect.on('change', function() {
	resultObject.date = this.value;
});
$genderSelect.on('change', function() {
	resultObject.gender = this.value;
});
$ageSelect.on('change', function() {
	resultObject.age = this.value;
});
$choiceBtn.on('click', function() {
	if (this.value === 'Odrasli pušač cigareta') {
		resultObject.smoker = this.value;
	}
});
$cigA1Radio.on('click', function() {
	resultObject.cigareteA1 = this.value;
});
$cigA2Radio.on('click', function() {
	resultObject.cigareteA2 = this.value;
});
$cigA3Check.on('change', function() {
	if (resultObject.cigareteA3.includes(this.value)) {
		resultObject.cigareteA3 = resultObject.cigareteA3.replace(this.value, ' ');
	} else {
		resultObject.cigareteA3 += this.value;
	}
});
$cigA4Radio.on('click', function() {
	resultObject.cigareteA4 = this.value;
});
$cigA5Radio.on('click', function() {
	resultObject.cigareteA5 = this.value;
});
$cigA6Check.on('change', function() {
	if (resultObject.cigareteA6.includes(this.value)) {
		resultObject.cigareteA6 = resultObject.cigareteA6.replace(this.value, ' ');
	} else {
		resultObject.cigareteA6 += this.value;
	}
});
$cigA7Check.on('change', function() {
	if (resultObject.cigareteA7.includes(this.value)) {
		resultObject.cigareteA7 = resultObject.cigareteA7.replace(this.value, ' ');
	} else {
		resultObject.cigareteA7 += this.value;
	}
	// $resultBox.text(resultObject);
});
$iqosA1Radio.on('click', function() {
	resultObject.iqosA1 = this.value;
});
$iqosA2Check.on('change', function() {
	if (resultObject.iqosA2.includes(this.value)) {
		resultObject.iqosA2 = resultObject.iqosA2.replace(this.value, ' ');
	} else {
		resultObject.iqosA2 += this.value;
	}
});
$iqosA3Radio.on('click', function() {
	resultObject.iqosA3 = this.value;
});
$iqosA4Check.on('change', function() {
	if (resultObject.iqosA4.includes(this.value)) {
		resultObject.iqosA4 = resultObject.iqosA4.replace(this.value, ' ');
	} else {
		resultObject.iqosA4 += this.value;
	}
});
$iqosA5Radio.on('click', function() {
	resultObject.iqosA5 = this.value;
});
$iqosA6Radio.on('click', function() {
	resultObject.iqosA6 = this.value;
});
