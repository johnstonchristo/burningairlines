var app = app || {};

app.Flights = Backbone.Collection.extend({
  url: "/search",

  model: app.Flight,

  initialize: function (){
    console.log("A new collection has been created");
  }
});
