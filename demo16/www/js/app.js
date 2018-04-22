// ---方式3: 使用paths定义---
requirejs.config ({
    baseUrl: 'js',
    paths: {
        "hello": "lib/hello"
    }
});

require(['hello'], function(hello) {
    hello.hello("RquireJS");
});

// www/js/lib/hello.js
