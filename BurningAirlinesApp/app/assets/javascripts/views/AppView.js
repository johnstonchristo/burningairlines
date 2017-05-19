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




  }
});
