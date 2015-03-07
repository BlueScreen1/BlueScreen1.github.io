$(function() {
     Parse.initialize("WBRlhqorpX6TnA5e6VuM0236Oywvpy2YYLneqgjM", "ouyXtVJVajFMtQcPOY9rAtRNxrSb7kmGMYVcHR75");
    $("#new_message_button").click(function(){
        var title = $("#title").val();
        var content = $("#content").val();
        var Message = Parse.Object.extend("Messages");
        var message = new Message();
        message.set("title" ,title);
        message.set("content" , content);
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