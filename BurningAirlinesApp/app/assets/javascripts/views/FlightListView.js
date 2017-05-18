var app = app || {};

app.FlightListView = Backbone.View.extend({
  el: "#flights",

  initialize: function(){
    console.log("a flight list view was created");
  },

  render: function(){
    // debugger; In here, I need to loop through the collection list and append to the li
    var templateMarkup = $("#SearchResultsTemplate").html();
    this.$el.html(templateMarkup);
  }
});

//
// </script>
// <div id="flights">
//   <h2>A list of flights should show here</h2>
//
// <script type="html/template" id="SearchResultsTemplate">
//   <h2>Flight Search Results</h2>
//   <p>
//     <ul id="flights">
//     </ul>
//   </p>
//   </div>
// </script>
