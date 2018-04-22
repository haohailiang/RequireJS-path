// ----app.js----
requirejs.config ({
    baseUrl: 'js/lib',
});

require(['hello'], function(hello) {
    hello.hello("RquireJS");
});

// www/html/js/lib/hello.js
