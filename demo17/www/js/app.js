// ---path替换---
requirejs.config ({
    baseUrl: "./",
    paths: {
        "lib": "js/lib"
    }
});

require(['lib/hello'], function(hello) {
    hello.hello("RquireJS");
});
