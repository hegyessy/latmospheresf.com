var simpleSlidehow = function (images, duration) {

	var gallery = images;
	var duration = duration;
	var slides = document.querySelectorAll(".slide");
	slides[0].className="slide show";
	var current = 0;
	var last = gallery.length - 1;

	setInterval(function() {
		
		if (current != last){
			var next = current + 1;
			var x = document.querySelectorAll(".slide");
			x[next].className="slide show";
			document.querySelector(".show").className="slide hide";
			++current;
		} else {
			document.querySelector(".show").className="slide hide";
			slides[0].className="slide show";
			current = 0;
		}
	}, duration);
};

simpleSlidehow(HEADER, 6000);
