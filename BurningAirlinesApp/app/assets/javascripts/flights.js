var app = app || {};

app.router = new app.AppRouter();

$(document).ready(function(){
  Backbone.history.start();
});
