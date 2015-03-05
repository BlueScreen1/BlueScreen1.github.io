$(function() {
     Parse.initialize("WBRlhqorpX6TnA5e6VuM0236Oywvpy2YYLneqgjM", "ouyXtVJVajFMtQcPOY9rAtRNxrSb7kmGMYVcHR75");
    $("#new_message_button").click(function(){
        var title = $("#title").val();
        var content = $("#content").val();
        var Message = Parse.Object.extend("Messages");
        var message = new Message();
        message.set("title" ,title);
        message.set("conent" , content);
        message.save(null, {
        success: function(message) {
            alert('New object created with objectId: ' + message.id);
        },
        error: function(message, error) {
            alert('Failed to create new object, with error code: ' + error.message);
        }
     });
    });
});