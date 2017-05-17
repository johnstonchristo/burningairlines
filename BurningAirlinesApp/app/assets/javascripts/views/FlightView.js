var app = app || {};

app.FlightInputView = Backbone.View.extend({
  el: "#searchForm",

  render: function(){
    // debugger;
    var templateMarkup = $("#FlightInputTemplate").html();
    this.$el.html(templateMarkup);
  }
});
