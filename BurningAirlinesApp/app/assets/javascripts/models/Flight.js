var app = app || {};

// app.Flight = Backbone.Model.extend({
//   //defaults, initialize, urlRoot
// });
// 	//
	// 1. Update the model, with the urlRoot, defaults, initialize.
	// var app = app || {};

	app.Flight = Backbone.Model.extend({
	  //defaults, initialize, urlRoot
	  urlRoot: "/flights",

	  defaults: {
	    content: "This is one flight"
	  },

	  initialize: function(){
	    console.log("A new flight was created");
			this.on('change', function(){
				console.log("something has changed");
			});
	  }
	});

// 	var newFlight1 = new app.Flight({origin: "SYD", destination: "SFO"});
// // console.log(newFlight1.toJSON());
// 	var newFlight2 = new app.Flight({origin: "LAX", destination: "SFO"});
// // console.log(newFlight2.toJSON());
// 	var newFlight3 = new app.Flight({origin: "LAX", destination: "SYD"});
// console.log(newFlight3.toJSON());
