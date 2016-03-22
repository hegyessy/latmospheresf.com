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
		return APP.getAll(APP.slideshow.config._showClass).length;
	},

	nextSlide: function() {
		if (APP.get(APP.slideshow.config._showClass).nextElementSibling) {
			var slide = APP.get(APP.slideshow.config._showClass);
			var el = slide.nextElementSibling;
			APP.slideshow.toggle(el, slide);
		} else {
			var el = APP.getAll(APP.slideshow.config._class)[0];
			var slide = App.get(APP.slideshow.config._showClass);
			APP.slideshow.toggle(el, slide);
		}
	},

	prevSlide: function(){
		if (APP.get(APP.slideshow.config._showClass).previousElementSibling) {
			var el = APP.get(APP.slideshow.config._showClass).previousElementSibling;
			var slide = APP.get(APP.slideshow.config._showClass);
			APP.slideshow.toggle(el, slide);
		} else {
			var el = APP.getAll(APP.slideshow.config._class)[0];
			var slide = APP.get(APP.slideshow.config._showClass);
			APP.slideshow.toggle(el, slide);
		}
	},

	toggle: function (slide, el) {
		if(slide){
			slide.classList.toggle(APP.slideshow.config._showClass.replace(".", ""));
			slide.classList.toggle(APP.slideshow.config._hideClass.replace(".", ""));
		}
		if(el){
			el.classList.toggle(APP.slideshow.config._showClass.replace(".", ""));
			el.classList.toggle(APP.slideshow.config._hideClass.replace(".", ""));
		}
	},

	auto: function () {
		return setInterval( function(){
			APP.slideshow.nextSlide();
		},  APP.slideshow.config._slideDuration);
	},

	controlls: {
		next: function() {
			var button = document.querySelector(APP.slideshow.config._nextButtonClass);
			button.addEventListener("click", function() {
				APP.slideshow.nextSlide();
			}, false);
		},

		previous: function() {
			var button = document.querySelector(APP.slideshow.config._prevButtonClass);
			button.addEventListener("click", function(){
				APP.slideshow.nextSlide();
			}, false);
		}
	}
};

APP.router = {
	
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