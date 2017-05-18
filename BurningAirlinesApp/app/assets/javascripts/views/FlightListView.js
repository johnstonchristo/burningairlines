var app = app || {};

// This view should be rendered for every flight in your application


app.FlightListView = Backbone.View.extend({
  tagName: "li",

  events: {
    'click' : 'showFlight'
  },

  showFlight: function (){

    console.log("key went down");

    var id = this.model.get("id");
    app.router.navigate("/flights/" + id, true);



  },

  initialize: function(){
    console.log("a flight list view was created");
  },

  render: function(){
    // debugger;
    var message = "Origin: " + this.model.get("origin");
    message += "Destination: " + this.model.get("destination");
    this.$el.html(message);
    this.$el.appendTo("#flights");




  }
});
