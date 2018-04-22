// [引用hello.js的三种方式]
// ---方式1: 使用普通路径(不使用baseUrl)---
require(['js/lib/hello.js'], function(hello) {
    hello.hello("RquireJS");
});

// www/js/lib/hello.js
