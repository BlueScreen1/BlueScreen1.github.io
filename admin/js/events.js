$(function() {
   Parse.initialize("WBRlhqorpX6TnA5e6VuM0236Oywvpy2YYLneqgjM", "ouyXtVJVajFMtQcPOY9rAtRNxrSb7kmGMYVcHR75");
   $("#add_event_button").click(function(){
     var topic = $("#title").val();
     var location = $("#location").val();
     var date = $("#datepicker").val();
     var time = $("#time").val();
     var descritpion = $("#description").val();
     var Meeting = Parse.Object.extend("Meetings");
     var meeting = new Meeting();
     meeting.set("topic" , topic);
     meeting.set("location" , location);
     meeting.set("date" , date);
     meeting.set("description" , descritpion);
     meeting.set("time" , time);
     meeting.save(null, {
        success: function(meeting) {
            alert('New object created with objectId: ' + meeting.id);
        },
        error: function(meeting, error) {
            alert('Failed to create new object, with error code: ' + error.message);
        }
     });
    });
});



