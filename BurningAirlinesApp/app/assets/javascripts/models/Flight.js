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
