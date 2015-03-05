$(function(){
    $('#datepicker').datepicker({
        dateFormat: "yy-mm-dd"
    });
    $('#time').timepicker({
       hourGrid: 4,
	   minuteGrid: 10,
	   timeFormat: "hh:mm tt"
    });
});