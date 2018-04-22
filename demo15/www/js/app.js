// ---方式2: 使用baseUrl---
requirejs.config ({
    baseUrl: 'js/lib',
});

require(['hello'], function(hello) {
    hello.hello("RquireJS");
});

// www/js/lib/hello + .js
