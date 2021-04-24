$(document).ready(function() {    
    var requestOne = $.ajax({
        url: 'https://httpbin.org/get'        
    });

    var requestTwo = $.ajax({
        url: 'https://httpbin.org/get'        
    });

    var requestThree = $.ajax({
        url: 'https://httpbin.org/get1'        
    });

    $.when(requestOne, requestTwo, requestThree).then(
        function() {
            $('body').append('All three ajax requests have been successfully resolved.');
        }, function() {
            $('body').append('At least one of the ajax requests is rejected.');
        }
    );
});