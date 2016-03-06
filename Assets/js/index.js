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
		if(CONFIG._type==="controlls"){
			S.controlls.next();
			S.controlls.previous();				
		}
		if(CONFIG._type==="auto"){
			if(document.querySelector(".left-controll")){
				document.querySelector(".left-controll").remove();
			}
			if(document.querySelector(".right-controll")){
				document.querySelector(".right-controll").remove();
			}
			S.auto();
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
}

S = APP.slideshow;
CONFIG = S.config;