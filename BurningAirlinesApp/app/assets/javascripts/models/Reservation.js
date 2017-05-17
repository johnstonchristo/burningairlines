var app = app || {};

app.Reservation = Backbone.Model.extend({
  //defaults, initialize, urlRoot
  urlRoot: "/flight/:id",

  defaults: {
    content: "Choose your seat"
  },

  initialize: function(){
    console.log("Choose your seat");
  }
});
