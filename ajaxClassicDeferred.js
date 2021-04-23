$(document).ready(function() {
    // Capture the response of the ajax request
    var deferredObject = $.ajax({
        url: 'https://httpbin.org/get'        
    });

    // success
    deferredObject.done(function() {
        $('body').append('Ajax call is successful - success callback on the deferred object is called. <br /><br />');
    }); 

    // error
    deferredObject.fail(function() {
        $('body').append('Ajax call could not be completed successfull - error callback on the deferred object is called. <br /><br />');
    });

    // complete
    deferredObject.always(function() {
        $('body').append('Regardless of success or failure, the "always" callback will always be fired. <br /><br />');
    });

    /**
     * .then() is an alternative to .done + .fail (success + error).
     * It takes two arguments - a success callback & error callback
     */
    deferredObject.then(function() {
        $('body').append('then.success callback - an alternative to .done <br /><br />');
    }, function() {
        $('body').append('then.error callback - an alternative to .fail <br /><br />');
    });
});