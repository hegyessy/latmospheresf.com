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

		this.currentSlide() ? null : this.toggle([this.firstSlide()]);

		switch (this.config._type) {
			case "controlls":
				this.controlls.next();
				this.controlls.previous();
				break;
			case "auto":
				(APP.get(this.config._prevButtonClass)) ? APP.get(this.config._prevButtonClass).remove() : null;
				(APP.get(this.config._nextButtonClass)) ? APP.get(this.config._nextButtonClass).remove() : null;
				this.auto();
				break;
			default:
				console.log("Default removed from config. why would you do that?");
		}
	},

	allSlides: function() { return APP.getAll(this.config._class); },
	currentSlide: function() { return APP.get(this.config._showClass); },
	firstSlide: function() { return APP.getAll(this.config._class)[0]; },
	lastSlide: function() { return this.allSlides()[this.allSlides().length - 1 ]; },
	nextSlide: function() { return this.currentSlide().nextElementSibling ? this.currentSlide().nextElementSibling : this.firstSlide(); },
	previousSlide: function() { return this.currentSlide().previousElementSibling ? this.currentSlide().previousElementSibling : this.lastSlide(); },

	toggle: function (slides) {
		var slides = slides;
		for (var i = 0; i < slides.length; i++ ){
			slides[i].classList.toggle(this.config._hideClass.replace(".", ""));
			slides[i].classList.toggle(this.config._showClass.replace(".", ""));
		}
	},

	auto: function () {
		return setInterval( function(){
			APP.slideshow.toggle([APP.slideshow.nextSlide(), APP.slideshow.currentSlide()]);
		},  APP.slideshow.config._slideDuration );
	},

	controlls: {
		next: function() {
			var button = APP.get(APP.slideshow.config._nextButtonClass);
			button.addEventListener("click", function() {
				APP.slideshow.toggle([APP.slideshow.nextSlide(), APP.slideshow.currentSlide()]);
				APP.router.update();
			}, false);
		},

		previous: function() {
			var button = APP.get(APP.slideshow.config._prevButtonClass);
			button.addEventListener("click", function(){
				APP.slideshow.toggle([APP.slideshow.previousSlide(), APP.slideshow.currentSlide()]);
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
					APP.slideshow.toggle([slides[i], APP.slideshow.currentSlide()]);
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