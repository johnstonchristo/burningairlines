var app = app || {};

// This view should be rendered for every flight in your application


app.FlightListView = Backbone.View.extend({
  tagName: "li",

  events: {
    'click' : 'showFlight',
  },

  showFlight: function (){

    var id = this.model.get("id");
    app.router.navigate("flights/" + id, true);
  },
  
  render: function(){
    // debugger;
    var message = "Origin: " + this.model.get("origin");
    message += " Destination: " + this.model.get("destination");
    message += " Plane ID: " + this.model.get("plane_id");
    message += " Time: " + this.model.get("date");
    this.$el.html(message);
    this.$el.appendTo("#flights");




  }
});
