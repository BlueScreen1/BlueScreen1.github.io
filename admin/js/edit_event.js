$(function(){
    Parse.initialize("WBRlhqorpX6TnA5e6VuM0236Oywvpy2YYLneqgjM", "ouyXtVJVajFMtQcPOY9rAtRNxrSb7kmGMYVcHR75");
    var url = new String(window.location);
    var components = url.split('?');
    var id = components[components.length-1];
    var Meeting = Parse.Object.extend("Meetings");
    var query = new Parse.Query(Meeting);
    var result;
    query.get(id, {
        success: function(meeting){
            result = meeting;
            $("#title").val(meeting.get("topic"));
            $("#location").val(meeting.get("location"));
            $("#datepicker").val((meeting.get("date")).toString());
            $("#time").val(meeting.get("time"));
            $("#description").val(meeting.get("description"));
        },
        error: function(object, error){
            alert(error.message);
        }
    });
    $("#cancel_event_button").click(function(){
        window.location.replace("view_events.html");
    });
    $("#edit_event_button").click(
        function(){ 
            result.save(null, {
            success: function(result){
                var new_topic = $("#title").val();
                var new_location = $("#location").val();
                var date_s = $("#datepicker").val();
                var new_date = new Date(date_s);
                var new_time = $("#time").val();
                var new_description = $("#description").val();
                result.set("topic" , new_topic);
                result.set("location" , new_location);
                result.set("date" , new_date);
                result.set("time" , new_time);
                result.set("description" , new_description);
                result.save();
                var Message = Parse.Object.extend("Messages");
                var message = new Message();
                message.set("title", new_topic + " updated");
                message.set("content" , new_topic  + " has been updated be sure to check information.");
                message.save(null, {
                    success: function(message){
                    }
                });
                alert("Event updated, message will be sent out.");
                window.location.replace("view_events.html");
            },
            error: function(object , error){
                alert(error.message);
            }
            });
        });
});

 