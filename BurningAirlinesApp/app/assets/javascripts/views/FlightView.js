var app = app || {};

app.FlightView = Backbone.View.extend({
    el: "#app",

    render: function() {
        console.log("testing");
        var flight = this.model;
        // Store all of the HTML from #PostViewTemplate in a variable called templateMarkup
        var templateMarkup = $("#FlightViewTemplate").html();
        console.log(templateMarkup);
        var actualTemplate = _.template(templateMarkup);
        var compiledTemplate = actualTemplate(flight.toJSON());
        // Set the HTML of this.$el to be the templateMarkup
        this.$el.html(compiledTemplate);


var data = flight.toJSON();




        debugger;

        function tableCreate() {
            var seatMap = document.getElementById("seatMap");
            tbl = document.createElement('table');
            tbl.style.width = '100px';
            tbl.style.border = '1px solid black';
            var column = data.col;
            var row = data.row;
            for (var i = 0; i < column; i++) {
                var tr = tbl.insertRow();
                for (var j = 0; j < row; j++) {
                    if (i == column && j == row) {
                        break;
                    } else {
                        var td = tr.insertCell();

                        td.appendChild(
                            document.createTextNode((i + 1) + " " + (j + 1))
                        );
                        td.setAttribute("id", (i + 1) + " " + (j + 1));
                        td.style.border = '1px solid black';
                        // if (i == 1 && j == 1) {
                        //     // td.setAttribute('rowSpan');
                        // }
                    }

                    td.addEventListener("click", function() {
                        alert("Your seat has been selected!");
                        console.log(td.id);
                        $(this).css("background", "green");



                    });
                }
            }
            seatMap.appendChild(tbl);
        }
        tableCreate();



    }
});
