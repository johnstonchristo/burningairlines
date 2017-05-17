var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'initializeFlights',
    '/search': 'test'
  },

  initializeFlights: function(){
    var appView = new app.AppView();
    appView.render();
  }


});
