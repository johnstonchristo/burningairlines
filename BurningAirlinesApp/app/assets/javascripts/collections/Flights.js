var app = app || {};

app.Flights = Backbone.Collection.extend({
  url: "/flights",

  model: app.Flight,

  initialize: function (){
    console.log("A new collection has been created");

  },

});

var flightsCollection = new app.Flights();

flightsCollection.fetch().done(function(){
  flightCollection.each(function(flight){
    var origin = flight.get("origin");
    console.log(origin);
  });
});


// var newCollection = new app.Flights();
//
//
// newCollection.add({origin: "LAX", destination: "SFO"});
// newCollection.add({origin: "SFO", destination: "LAX"});
// newCollection.add({origin: "SYD", destination: "JFK"});
// newCollection.add({origin: "JFK", destination: "IST"});
// newCollection.add({origin: "SYD", destination: "LAX"});
// var flightList = newCollection.toJSON();
// // console.log(flightList);
