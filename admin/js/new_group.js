$(function() {
    Parse.initialize("WBRlhqorpX6TnA5e6VuM0236Oywvpy2YYLneqgjM", "ouyXtVJVajFMtQcPOY9rAtRNxrSb7kmGMYVcHR75");
    $("#new_group_button").click(function(){
        var name = $("#name").val();
        var description = $("#description").val();
        var Group = Parse.Object.extend("Groups");
        var group = new Group();
        group.set("name" ,name);
        group.set("description" , description);
        group.save(null, {
            success: function(message) {
                alert('Group Created' );
                window.location.replace('index.html');
            },
            error: function(message, error) {
                alert('Group Creation failed: ' + error.message);
            }
        });
    });
});
