var app = app || {};

app.Reservations = Backbone.Collection.extend({
  url: "/reservations",

  model: app.Reservation,

  initialize: function (){
    console.log("A new reservation collection has been created");

  },

});
