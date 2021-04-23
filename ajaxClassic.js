$(document).ready(function() {
    $.ajax({
        url: 'https://httpbin.org/get',
        success: function() {
            $('body').append('Ajax call is successful.');
        }, 
        error: function() {
            $('body').append('Ajax call could not be completed successfully.');
        }
    });
});