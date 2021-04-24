$(document).ready(function() {
    $.returnDeferred = function() {
        // This object is unresolved initially
        var deferredObject = new $.Deferred();

        // return deferredObject.resolve();
        // return deferredObject.reject();

        var randomNumber = Math.floor(Math.random() * 100);

        if(randomNumber%2 !== 0) {
            // Resolve the object if it is an odd number
            deferredObject.resolve(randomNumber);
        }
        else {
            deferredObject.reject(randomNumber);
        }

        return deferredObject;
    }

    // $.returnDeferred().done(function() {
    //     $('body').append('The deferred object is resolved');
    // });

    $.returnDeferred().then(function(randomNumber) {
        $('body').append('The deferred object is resolved. Generated random number is: ' + randomNumber);
    }, function(randomNumber) {
        $('body').append('The deferred object is rejected. Generated random number is: ' + randomNumber);
    });
});