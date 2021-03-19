console.log('Message 1 - main program flow');

setTimeout(function() {
    console.log('Parallel flow - Asynchronous result - this callback function will be executed after 5 seconds timeout');
}, 5000);

console.log('Synchronous result - main program flow');