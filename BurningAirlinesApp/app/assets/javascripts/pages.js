var app = app || {};
//
app.flights = new app.Flights();

app.router = new app.AppRouter();
//
$(document).ready(function(){
    app.flights.fetch().done(function(){
        Backbone.history.start();
    });
});
