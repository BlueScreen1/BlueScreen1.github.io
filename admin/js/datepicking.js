$(function(){
    $('#datepicker').datepicker();
    $('#time').timepicker({
       hourGrid: 4,
	   minuteGrid: 10,
	   timeFormat: "hh:mm tt"
    });
});