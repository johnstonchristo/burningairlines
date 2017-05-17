app = app || {};

app.AppView = Backbone.View.extend({
  el: "#app",

  initialize: function (){
    console.log("new view created");
  },

  render: function (){
    var templateMarkup = $("#AppViewTemplate").html();
    this.$el.html(templateMarkup);
  }
});
