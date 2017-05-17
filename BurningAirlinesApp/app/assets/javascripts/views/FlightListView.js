var app = app || {};

app.FlightListView = Backbone.View.extend({
  el: "#flights",

  initialize: function(){
    console.log("a flight list view was created");
  },

  render: function(){
    // debugger;
    var templateMarkup = $("#SearchResultsTemplate").html();
    this.$el.html(templateMarkup);
  }
});
