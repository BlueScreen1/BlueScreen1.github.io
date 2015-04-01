$(function() {
   Parse.initialize("WBRlhqorpX6TnA5e6VuM0236Oywvpy2YYLneqgjM", "ouyXtVJVajFMtQcPOY9rAtRNxrSb7kmGMYVcHR75");
   $("#add_event_button").click(function(){
     var topic = $("#title").val();
     var location = $("#location").val();
     var date = $("#date").datepicker("getDate");
     date = date.toISOString();
     date = new Date(date);
     var descritpion = $("#description").val();
     var Meeting = Parse.Object.extend("Meetings");
     var meeting = new Meeting();
     meeting.set("topic" , topic);
     meeting.set("location" , location);
     meeting.set("date" , date);
     meeting.set("description" , descritpion);
     meeting.save(null, {
        success: function(meeting) {
            alert('Meeting saved');
            window.location.replace('index.html');
        },
        error: function(meeting, error) {
            alert('Unable to save object: ' + error.message);
        }
     });
    });
});



