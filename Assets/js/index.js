var slideshow = {
	
	// mostly an independent slideshow library
	// but will probably cheat in order to get done in a resonable time.
	
	// Goddamit javascript
	_this: this,

	init: {

	},

	config: {
		directory: "images/"
		, _id: "slideshow"
		, _class: ".slide"
		, limit: false
		, repeat: true
		, random false
		, delay: 4000
		, transitionTime: 1000
		, transitionEffect: false //todo
	},

	collection: [],
	counter: null,

	controls: {
		start: function (){},
		pause: function (){},
		next: function (){},
		pause: function (){},
		shuffle: function (){}
	},

	loadCollection: function (arr){
		
		var arr = arr;
		
		if (this.collection.length === 0) {
			
		}
	},

	clearCollection: function () {
		// no real reason to have this function but you never know. Might be a good reset.
		// Don't reset an empty array (is there a memory issue that can be won here?)
		if (this.collection.length !== 0) {
			this.collection = [];
		}
	},

	timer: function () {
		// CSS event timers are better than javascript let's see what we can do.
		
	},
	
	// remove current slide from collection
	
	removeFromCollection: function () {
		
	}
	
}