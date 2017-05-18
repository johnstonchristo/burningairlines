app = app || {};

app.AppView = Backbone.View.extend({
  el: "#app",

  initialize: function (){
    console.log("new view created");
  },

  render: function (){
    var templateMarkup = $("#AppViewTemplate").html();
    this.$el.html(templateMarkup);

    // console.log( this.collection );

    this.collection.each(function ( flight ) {
      // console.log( flight.toJSON() );
      var flv = new app.FlightListView({
        model:flight
      });
      flv.render();
    });

    // var flightsCollection = new app.Flights();
    //
    // flightsCollection.fetch().done(function(){
    //   flightsCollection.each(function(flight){
    //     console.log(flight.toJSON());
    //   });
    // });

    // Iterate through every flight in the collection that was provided
      // Create a new FlightListView, and render it (pass the model in as well)
  }
});
