APP = {};

APP.slideshow = {

	config: {
		_id: "slideshow",
		_class: ".slide",
		_type: "controlls",
		_transition: "crossFade",
		_nextButtonClass: ".right-controll",
		_prevButtonClass: ".left-controll"
	},

	init: function(){
		if(!document.querySelector(".show")){
			document.querySelector(".slide").classList.toggle("hide");
			document.querySelector(".slide").classList.toggle("show");
		}
		switch (CONFIG._type) {
			case "controlls":
				S.controlls.next();
				S.controlls.previous();
				break;
			case "auto":
				(document.querySelector(".left-controll")) ? query(".left-controll").remove() : null;
				(document.querySelector(".right-controll")) ? query(".left-controll").remove() : null;
				S.auto();
				break;
			default:
				console.log("Default removed from config. why would you do that?");
		}
	},

	lastSlide: function() {
		return document.querySelectorAll(".show").length;
	},

	nextSlide: function() {
		if (document.querySelector(".show").nextElementSibling) {
			var el = document.querySelector(".show").nextElementSibling;
			var slide = document.querySelector(".show");
			APP.slideshow.toggle(el, slide);
		} else {
			var el = document.querySelectorAll(".slide")[0];
			var slide = document.querySelector(".show");
			APP.slideshow.toggle(el, slide);
		}
	},

	prevSlide: function(){
		if (document.querySelector(".show").previousElementSibling) {
			var el = document.querySelector(".show").previousElementSibling;
			var slide = document.querySelector(".show");
			APP.slideshow.toggle(el, slide);
		} else {
			var el = document.querySelectorAll(".slide")[0];
			var slide = document.querySelector(".show");
			APP.slideshow.toggle(el, slide);
		}
	},

	toggle: function (slide, el) {
		if(slide){
			slide.classList.toggle("show");
			slide.classList.toggle("hide");
		}
		if(el){
			el.classList.toggle("show");
			el.classList.toggle("hide");
		}
	},

	auto: function () {
		return setInterval( function(){
			APP.slideshow.nextSlide();
		}, 6000);
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

APP.contact = {
	
	config: {
		_formId: "contact",
		_responseClass: ".response" 
	},
	
	init: function () {
		APP.contact.event.listen();
	},
	
	event: {
		listen: function() {
			var form = document.getElementById(APP.contact.config._formId);
			form.addEventListener("submit", function(event) {
				event.preventDefault();
				APP.contact.send(APP.contact.formData(form));
			}, false);
		}
	},

	formData: function (form) {
		var formData = new FormData(form);
		return formData;
	},

	message: function (response) {
		var res = response;
		console.log(res);
		var el = document.querySelector(APP.contact.config._responseClass);
		switch (res) {
			case "success":
				el.innerHTML="<p>Thank you. We'll contact you soon.</p>";
				break;
			case "failure":
				el.innerHTML="<p>There was an error sending the form, please try again.</p><p> If it fails you can also contact us at contact@latmosphere.com</p>"
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

S = APP.slideshow;
CONFIG = S.config;