// ----app.js----
requirejs.config ({
    baseUrl: 'js/lib',
});

require(['./hello.js'], function(hello) {
    hello.hello("RquireJS");
});

// www/html/./hello.js
