app = app || {};

app.AppView = Backbone.View.extend({
  el: "#app",

  events: {
    'click button' : 'search',
    'keyup textarea': 'search'
  },


  search: function(){

    var originSearch = $("#origin").val().toLowerCase();
    var destinationSearch = $("#destination").val().toLowerCase();
    var filteredFlights = app.flights.filter(function (flight) {
      return flight.get("origin").toLowerCase().startsWith( originSearch ) && flight.get("destination").toLowerCase().startsWith( destinationSearch );
    });

    var filteredColl = new app.Flights( filteredFlights );
    this.collection = filteredColl;

    this.render();


  },

  //
  initialize: function (){
    var templateMarkup = $("#AppViewTemplate").html();
    this.$el.html(templateMarkup);
  },

  render: function (){


    // console.log( this.collection );
    $("#flights").html('');
    this.collection.each(function ( flight ) {

      // console.log( flight.toJSON() );
      var flv = new app.FlightListView({
        model:flight
      });
      flv.render();
    });

  }
});
