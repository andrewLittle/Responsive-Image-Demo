$(document).ready(function() {
	var baseDir = $('#baseImg').attr('data-basesrc'),
		screenSize = window.innerWidth,
		imgUrl;
		
	if(screenSize <= 400) {
		imgUrl = baseDir + 'field300.jpg';
	}
	if(screenSize > 400 && screenSize <= 800) {
		imgUrl = baseDir + 'field600.jpg';
	}
	if(screenSize > 800) {
		imgUrl = baseDir + 'field900.jpg';
	}
	$('#displayImg').attr('src', imgUrl);
}());
