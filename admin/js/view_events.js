$(function() {
    Parse.initialize("WBRlhqorpX6TnA5e6VuM0236Oywvpy2YYLneqgjM", "ouyXtVJVajFMtQcPOY9rAtRNxrSb7kmGMYVcHR75");
    var Event = Parse.Object.extend("Meetings");
    var query = new Parse.Query(Event);
    var objects;
 
    query.find({
        success: function(results) {
            for (var i = 0; i < results.length; i++) {
                objects = results;
                var object = results[i];
                var id = object.id;
                var topic = object.get("topic");
                var date = (object.get("date")).toString();
                var time = object.get("time");
                var location = object.get("location");
                var appendString = '<tr id="'+id+'"><td>'+topic+'</td>'+'<td>'+date+'</td><td>'+time+'</td>'+'<td>'+location+'</td></tr>';
                $("#events_table").append(appendString);
                $("tr").click(function(){window.location.replace('edit_event.html?'+this.id)});

            }
        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
    }); 
   
    
    
});


    