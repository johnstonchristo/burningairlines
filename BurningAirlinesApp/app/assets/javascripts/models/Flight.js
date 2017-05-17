var app = app || {};

// app.Flight = Backbone.Model.extend({
//   //defaults, initialize, urlRoot
// });
// 	//
	// 1. Update the model, with the urlRoot, defaults, initialize.
	// var app = app || {};

	app.Flight = Backbone.Model.extend({
	  //defaults, initialize, urlRoot
	  urlRoot: "/search",

	  defaults: {
	    content: "This is one flight"
	  },

	  initialize: function(){
	    console.log("A new flight was created");
	  }
	});

	var newFlight1 = new app.Flight({origin: "SYD", destination: "SFO"});
	var newFlight2 = new app.Flight({origin: "LAX", destination: "SFO"});
	var newFlight3 = new app.Flight({origin: "LAX", destination: "SYD"});
