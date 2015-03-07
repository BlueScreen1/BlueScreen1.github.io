$(function(){
    Parse.initialize("WBRlhqorpX6TnA5e6VuM0236Oywvpy2YYLneqgjM", "ouyXtVJVajFMtQcPOY9rAtRNxrSb7kmGMYVcHR75");
    var url = new String(window.location);
    var components = url.split('?')
    var id = components[components.length-1];
    var Meeting = Parse.Object.extend("Meetings");
    var query = new Parse.Query(Meeting);
    query.get(id, {
        success: function(meeting){
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
});

 