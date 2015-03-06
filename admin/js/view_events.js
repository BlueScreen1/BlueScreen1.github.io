$(function() {
    Parse.initialize("WBRlhqorpX6TnA5e6VuM0236Oywvpy2YYLneqgjM", "ouyXtVJVajFMtQcPOY9rAtRNxrSb7kmGMYVcHR75");
    var Event = Parse.Object.extend("Meetings");
    var query = new Parse.Query(Event);
    query.find({
        success: function(results) {
            for (var i = 0; i < results.length; i++) {
                var object = results[i];
                var topic = object.get("topic");
                var date = (object.get("date")).toString();
                var time = object.get("time");
                var location = object.get("location");
                $("#events_table").append("<tr><td>"+topic+"</td>"+"<td>"+date+"</td>"+"<td>"+time+"</td>"+"<td>"+location+"</td></tr>" );
    
            }
        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });  
});