$(function() {
     Parse.initialize("WBRlhqorpX6TnA5e6VuM0236Oywvpy2YYLneqgjM", "ouyXtVJVajFMtQcPOY9rAtRNxrSb7kmGMYVcHR75");
    var Group = Parse.Object.extend("Groups");
    var query = new Parse.Query(Group);
    var objects;

    query.find({
        success: function(results) {
            for (var i = 0; i < results.length; i++) {
                objects = results;
                var object = results[i];
                var id = object.id;
                var name = object.get("name");
                var appendString = '<option>' + name + '</option>';
                $("#groups").append(appendString);

            }
        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });
    $("#new_message_button").click(function(){
        var title = $("#title").val();
        var content = $("#content").val();
        var group = $("#groups").val();
        var Message = Parse.Object.extend("Messages");
        var message = new Message();
        message.set("title" ,title);
        message.set("content" , content);
        message.set("group" , group);
        message.save(null, {
        success: function(message) {
            alert('Message Created' );
            window.location.replace('index.html');
        },
        error: function(message, error) {
            alert('Message Creation failed: ' + error.message);
        }
     });
    });
});