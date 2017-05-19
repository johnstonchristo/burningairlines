var app = app || {};

app.FlightView = Backbone.View.extend({
    el: "#app",
    events: {
        'click button':'makeReservation'
        },

    makeReservation: function(){
        console.log("reservation saved");
    },


    render: function() {
        console.log("testing");
        var flight = this.model;
        // Store all of the HTML from #PostViewTemplate in a variable called templateMarkup
        var templateMarkup = $("#FlightViewTemplate").html();
        // console.log(templateMarkup);
        var actualTemplate = _.template(templateMarkup);
        var compiledTemplate = actualTemplate(flight.toJSON());
        // Set the HTML of this.$el to be the templateMarkup
        this.$el.html(compiledTemplate);


var data = flight.toJSON();
// console.log(data.id);



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
                        td.setAttribute("id", (i + 1) + "" + (j + 1));
                        td.style.border = '1px solid black';
                        // if (i == 1 && j == 1) {
                        //     // td.setAttribute('rowSpan');
                        // }
                    }

                    var addEventListener = function ( td, row, col ) {
                        td.addEventListener("click", function() {

                            alert("Your seat has been selected!");
                            // console.log(td.id);
                            $(this).css("background", "green");
                            var seat = $(this).attr('id');
                            console.log("your seat is: " + seat);
                            var newRes = new app.Reservation({
                                row: row,
                                col: col,
                                flight_id: data.id
                            });
                            newRes.save();



                        });
                    };

                    addEventListener( td, i + 1, j + 1 );

                }
            }
            seatMap.appendChild(tbl);
        }
        tableCreate();


        this.model.get("reservations").forEach(function (res) {
            // console.log(res);
            var row = res.row;
            var col = res.col;
            var rowcol = row + col;
            console.log(rowcol);
            $("#rowcol").css("background", "red");
            // Use the row and col, select the element with the ID of #rowcol
                // Change the background
        });

    },

});
