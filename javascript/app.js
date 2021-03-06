$(document).ready( function () {
    
    var config = {
        apiKey: "AIzaSyD4TbgvfKyEwgXwkDyz7P2AOFjwcw5mP8Q",
        authDomain: "employeedatabase-d86e4.firebaseapp.com",
        databaseURL: "https://employeedatabase-d86e4.firebaseio.com",
        projectId: "employeedatabase-d86e4",
        storageBucket: "employeedatabase-d86e4.appspot.com",
        messagingSenderId: "292766394594"
    };
    
    firebase.initializeApp(config);

    var database = firebase.database();

    var name = "";
    var role = "";
    var startDate = "";
    var monthlyRate = "";
    var monthsWorked;
    var billable;



    $("#submit").on("click", function() {

        event.preventDefault();

        name = $("#employeeName").val().trim();
        role = $("#role").val().trim();
        startDate = $("#startDate").val().trim();
        monthlyRate = $("#monthlyRate").val().trim();
        dateAdded = firebase.database.ServerValue.TIMESTAMP;

        database.ref().push({
            name: name,
            role: role,
            startDate: startDate,
            monthlyRate: monthlyRate,
            dateAdded: dateAdded,
        })
        console.log(database.ref())
    });

    database.ref().orderByChild("child_added").limitToLast(1).on("child_added", function(snapshot) {
        $("#CONTAINER").empty(); //avoids duplicates 
        // loop through the objects and create a new table row for each object (even if currently there)

        
        
        for (i = 0; i < employees.length; i++) {
            var tr = $("<tr>");
            for (j = 0; j < employees[i].length; j++) {
                var td = $("<td>");
                td.appendChild(snapshot.val(employees[i][j]));
                tr.appendChild(td)
            }
            $(".table").appendChild(tr);
        };
    }), 
    
    function(errorObject) {
        console.log("Errors handled: " + errorObject.code);
      };
 


    
});


