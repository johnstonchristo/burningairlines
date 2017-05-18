var app = app || {};

app.FlightView = Backbone.View.extend({
  el: "#app",

 render: function () {
   console.log("testing");
    var flight = this.model;
    // Store all of the HTML from #PostViewTemplate in a variable called templateMarkup
    var templateMarkup = $("#FlightViewTemplate").html();
    console.log(templateMarkup);
    var actualTemplate = _.template(templateMarkup);
    var compiledTemplate = actualTemplate(flight.toJSON());
    // Set the HTML of this.$el to be the templateMarkup
    this.$el.html( templateMarkup );


  }
});
