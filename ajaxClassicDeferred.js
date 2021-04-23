$(document).ready(function() {
    // Capture the response of the ajax request
    var deferredObject = $.ajax({
        url: 'https://httpbin.org/get'        
    });

    deferredObject.done(function() {
        $('body').append('Ajax call is successful - success callback on the deferred object is called.');
    }); 

    deferredObject.fail(function() {
        $('body').append('Ajax call could not be completed successfull - error callback on the deferred object is called.');
    });
});