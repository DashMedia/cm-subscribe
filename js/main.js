$(function () {
		
		$('#subForm input').first().focus();
		
    $('#subForm').submit(function (e) {
        e.preventDefault();
        $.getJSON(
        this.action + "?callback=?",
        $(this).serialize(),
        function (data) {
            if (data.Status === 400) {
                alert("Error Message");
            } else { // 200
                alert("Success Message");
                $('#subForm').each(function(){
								        this.reset();
								});
            }
        });
    });
});