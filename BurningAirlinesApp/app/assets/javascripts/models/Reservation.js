app = app || {};

app.Reservation = Backbone.Model.extend({
//url, defaults,
  urlRoot: "/reservations",

  initialize: function(){
    console.log("a new reservation has been made");
  }
});
