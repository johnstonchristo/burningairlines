var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    'search': 'index',
    'flights/:id': 'showFlight',
    // 'reservations/:id': 'showReservation'

  },

  index: function(){
    // Pass a collection of app.flights into the appview

    var appView = new app.AppView({
      collection: app.flights
    });
    appView.render();
  },

  showFlight: function ( id ){
    // debugger;
    var flight = app.flights.get( id );
    console.log( flight.toJSON() );

    var flightView = new app.FlightView({
      model:flight
    });
    flightView.render();
  }
  //
  // showReservation: function(){
  //
  // }



});




// var app = app || {};
//
// // Think of this like config/routes.rb + all controllers
// app.AppRouter = Backbone.Router.extend({
//   routes: {
//     'posts': 'index',
//     'posts/:id': 'showPost'
//   },
//
//   index: function(){
//     var appView = new app.AppView({
//       collection: app.posts
//     });
//     appView.render();
//   },
//
//   showPost: function ( id ){
//     // Post.find_by(id: params[:id])
//     var post = app.posts.get( id );
//     console.log( post.toJSON() );
//
//     var postView = new app.PostView({
//       model: post // passing the above variable into a view.
//     });
//     postView.render();
//   }
// });
