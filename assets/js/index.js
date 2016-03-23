APP = {};

APP.get = function (element) { return document.querySelector(element); }
APP.getAll = function (elements) { return document.querySelectorAll(elements); }

APP.slideshow = {

	config: {
		_id: "slideshow",
		_class: ".slide",
		_type: "controlls",
		_showClass: ".show",
		_hideClass: ".hide",
		_nextButtonClass: ".right-controll",
		_prevButtonClass: ".left-controll",
		_slideDuration: 6000
	},

	init: function(){
		if(!APP.get(APP.slideshow.config._showClass)){
			APP.get(APP.slideshow.config._class).classList.toggle(APP.slideshow.config._hideClass.replace(".", ""));
			APP.get(APP.slideshow.config._class).classList.toggle(APP.slideshow.config._showClass.replace(".", ""));
		}
		switch (APP.slideshow.config._type) {
			case "controlls":
				APP.slideshow.controlls.next();
				APP.slideshow.controlls.previous();
				break;
			case "auto":
				(APP.get(APP.slideshow.config._prevButtonClass)) ? APP.get(APP.slideshow.config._prevButtonClass).remove() : null;
				(APP.get(APP.slideshow.config._nextButtonClass)) ? APP.get(APP.slideshow.config._nextButtonClass).remove() : null;
				APP.slideshow.auto();
				break;
			default:
				console.log("Default removed from config. why would you do that?");
		}
	},

	lastSlide: function() {
		return APP.getAll(APP.slideshow.config._class).length;
	},

	nextSlide: function() {
		
		var slides;
		
		if (APP.get(APP.slideshow.config._showClass).nextElementSibling) {
			slides = [
				APP.get(APP.slideshow.config._showClass),
				APP.get(APP.slideshow.config._showClass).nextElementSibling
			];
		} else {
			slides = [
				APP.get(APP.slideshow.config._showClass),
				APP.getAll(APP.slideshow.config._class)[0]
			];			
		}
		APP.slideshow.toggle(slides);
	},

	prevSlide: function(){
		
		var slides;
		
		if (APP.get(APP.slideshow.config._showClass).previousElementSibling) {
			slides = [
				APP.get(APP.slideshow.config._showClass).previousElementSibling,
				APP.get(APP.slideshow.config._showClass)
			];
		} else {
			slides = [
				APP.getAll(APP.slideshow.config._class)[(APP.slideshow.lastSlide()-1)],
				APP.get(APP.slideshow.config._showClass)
			];
		}
		APP.slideshow.toggle(slides);
	},

	toggle: function (slides) {
		var slides = slides;
		for (var i = 0; i < slides.length; i++ ){
			slides[i].classList.toggle(APP.slideshow.config._hideClass.replace(".", ""));
			slides[i].classList.toggle(APP.slideshow.config._showClass.replace(".", ""));
		}
	},


	auto: function () {
		return setInterval( function(){
			APP.slideshow.nextSlide();
		},  APP.slideshow.config._slideDuration);
	},

	controlls: {
		next: function() {
			var button = APP.get(APP.slideshow.config._nextButtonClass);
			button.addEventListener("click", function() {
				APP.slideshow.nextSlide();
				APP.router.update();
			}, false);
		},

		previous: function() {
			var button = APP.get(APP.slideshow.config._prevButtonClass);
			button.addEventListener("click", function(){
				APP.slideshow.prevSlide();
				APP.router.update();
			}, false);
		}
	}
};

APP.router = {
	
	gallery: function () {
		if (window.location.pathname === "/gallery"){
			var slides = APP.getAll(".slide");
			var imageInURL = window.location.hash.replace("#", "");
			for (var i = 0; i < slides.length; i++ ){
				if(imageInURL===slides[i].getAttribute("id")){
					APP.slideshow.toggle(slides[i]);
				}
			}
		}
	},

	update: function () {
		window.location.hash = APP.get(".show").getAttribute("id");
	}
}

APP.contact = {

	config: {
		_formClass: ".form",
		_responseClass: ".response",
		_errorMessage: "<p>There was an error sending the form, please try again.<br/> You can also contact us diectly at contact@latmosphere.com</p>",
		_successMessage: "<p>Thank you. We'll contact you soon.</p>"
	},

	init: function () {
		APP.contact.event.listen();
	},

	event: {
		listen: function() {
			var form = document.querySelector(APP.contact.config._formClass);
			form.addEventListener("submit", function(event) {
				event.preventDefault();
				APP.contact.send(APP.contact.formData(form));
			}, false);
		}
	},

	formData: function (form) { 
		return new FormData(form);
	},

	message: function (response) {
		var el = document.querySelector(APP.contact.config._responseClass);
		switch (response) {
			case "success":
				el.innerHTML=APP.contact.config._successMessage;
				el.classList.add(response);
				break;
			case "failure":
				el.innerHTML=APP.contact.config._errorMessage;
				el.classList.add(response);
				break;
			default:
				console.log("Do or do not, there is no try.");
		}
	},

	send: function (data) {
		var xhr = new XMLHttpRequest();
		xhr.open("POST", "/contact", true);
		xhr.onreadystatechange = function() {
			console.log(xhr.responseText);
			(xhr.readyState == XMLHttpRequest.DONE) ? APP.contact.message(xhr.responseText) : null;
		}
		xhr.send(data);
	}	
};

APP.router.gallery();