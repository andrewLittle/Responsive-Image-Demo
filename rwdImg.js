$(document).ready(function() {
	//Figure out base image directory and screen size
	var baseDir = $('#baseImg').attr('data-basesrc'),
		screenSize = window.innerWidth,
		imgUrl;
		
	// Based on screen size append set suffix to image
	if(screenSize <= 400) {
		imgUrl = baseDir + 'field300.jpg';
	}
	if(screenSize > 400 && screenSize <= 800) {
		imgUrl = baseDir + 'field600.jpg';
	}
	if(screenSize > 800) {
		imgUrl = baseDir + 'field900.jpg';
	}
	// Set the src in the empty img tag in the markup
	$('#displayImg').attr('src', imgUrl);
}());
