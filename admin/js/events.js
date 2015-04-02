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
            $("#title").val('');
            $("#location").val('');
            $("#date").val('');
            $("#description").val('');;
            var query = new Parse.Query(Parse.Installation);
            query.equalTo('channels' , '');
            Parse.Push.send({
                where: query,
                data: {
                    alert: "Don't miss " + topic
                }
            }, {
                success: function() {
                    console.log("Push was successful");
                },
                error: function(error) {
                    console.error(error);
                }
            });
            alert('Meeting saved');
           
        },
        error: function(meeting, error) {
            alert('Unable to save object: ' + error.message);
        }
     });
    });
});



