console.log('iqos data');
var cigareteSmokers = [];
var iqosSmokers = [];
const quotationMark = '"';
const singleQuotationMark = "'";

function getQuestionnaireData() {
	return new Promise((resolve, reject) => {
		$.getJSON(
			'http://www.anketa.ellectadigital.com/wp-json/questionnaire/v1/questionnaire-data',
			function(data) {
				resolve(data);
			},
		);
	});
}
getQuestionnaireData()
	.then(data => {
		const iqosData = data;
		for (var i = 0; i < iqosData.length; i++) {
			let stringObject = iqosData[i][2];
			const questionnaireObjectData = JSON.parse(stringObject);
			if (questionnaireObjectData.iqosSmoker === true) {
				iqosSmokers.push(iqosData[i]);
			} else {
				cigareteSmokers.push(iqosData[i]);
			}
		}
	})
	.then(data => {
		for (var i = 0; i < iqosSmokers.length; i++) {
			console.log();
			let stringIqosObject = iqosSmokers[i][2];
			const iqosSmokersObject = JSON.parse(stringIqosObject);
			console.log(iqosSmokersObject);
			$('.data-page__iqos-smokers')
				.append(`<div class="data-page__cigarete-table">
        <div class="data-page__table-place">
          ${[i + 1]}
        </div>
        <div class="data-page__table-place">
          ${iqosSmokersObject.city}
        </div>
        <div class="data-page__table-place">
          ${iqosSmokersObject.place}
        </div>
        <div class="data-page__table-place">
          ${iqosSmokersObject.date}
        </div>
        <div class="data-page__table-place">
          ${iqosSmokersObject.gender}
        </div>
        <div class="data-page__table-place">
          ${iqosSmokersObject.age}
        </div>
        <div class="data-page__table-place">
          ${iqosSmokersObject.iqosA1}
        </div>
        <div class="data-page__table-place">
          ${iqosSmokersObject.iqosA2}
        </div>
        <div class="data-page__table-place">
          ${iqosSmokersObject.iqosA3}
        </div>
        <div class="data-page__table-place">
          ${iqosSmokersObject.iqosA4}
        </div>
        <div class="data-page__table-place">
          ${iqosSmokersObject.iqosA5}
        </div>
        <div class="data-page__table-place">
          ${iqosSmokersObject.iqosA6}
        </div>
        `);
		}
		for (var i = 0; i < cigareteSmokers.length; i++) {
			let stringCigareteObject = cigareteSmokers[i][2];
			const cigareteSmokersObject = JSON.parse(stringCigareteObject);
			$('.data-page__cigarete-smokers')
				.append(`<div class="data-page__cigarete-table">
        <div class="data-page__table-place">
          ${[i + 1]}
        </div>
        <div class="data-page__table-place">
          ${cigareteSmokersObject.city}
        </div>
        <div class="data-page__table-place">
          ${cigareteSmokersObject.place}
        </div>
        <div class="data-page__table-place">
          ${cigareteSmokersObject.date}
        </div>
        <div class="data-page__table-place">
          ${cigareteSmokersObject.gender}
        </div>
        <div class="data-page__table-place">
          ${cigareteSmokersObject.age}
        </div>
        <div class="data-page__table-place">
          ${cigareteSmokersObject.cigareteA1}
        </div>
        <div class="data-page__table-place">
          ${cigareteSmokersObject.cigareteA2}
        </div>
        <div class="data-page__table-place">
          ${cigareteSmokersObject.cigareteA3}
        </div>
        <div class="data-page__table-place">
          ${cigareteSmokersObject.cigareteA4}
        </div>
        <div class="data-page__table-place">
          ${cigareteSmokersObject.cigareteA5}
        </div>
        <div class="data-page__table-place">
          ${cigareteSmokersObject.cigareteA6}
        </div>
        <div class="data-page__table-place">
          ${cigareteSmokersObject.cigareteA7}
        </div>
        `);
		}
	});

$('.chose-table-btn').on('click', function() {
	$('.chose-table-btn').toggleClass('active');
});
$('#cigarete-smoker').on('click', function() {
	$('.data-page__cigarete-smokers').show();
	$('.data-page__iqos-smokers').hide();
});
$('#iqos-smoker').on('click', function() {
	$('.data-page__cigarete-smokers').hide();
	$('.data-page__iqos-smokers').show();
});
