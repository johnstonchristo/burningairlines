var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'initializeFlights',
    '/search': 'searchView'

  },

  initializeFlights: function(){
    var appView = new app.AppView();
    appView.render();
  },

  searchView: function(){

  }


});
