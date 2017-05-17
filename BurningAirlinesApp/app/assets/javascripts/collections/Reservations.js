var app = app || {};

app.Reservations = Backbone.Collection.extend({
  url: "/search",

  model: app.Flight,

  initialize: function (){

var seatTable = function (flight.column, flight.row) {
var table = '';
var rows = flight.row;
var columns = flight.column;
for(var r = 0; r < rows; r ++) {
  table += '<tr>';
  for(var c = 0; c < columns; c ++) {
table += '<td>' + c + '</td>';
  }
  table += '</tr>';
}
}



  }
});
