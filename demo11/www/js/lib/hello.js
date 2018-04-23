// ---hello.js---
define(['./log'], function(log) {
    var hello = function(msg) {
            log.log('www/js/lib/hello.js: ' + msg);
        };
    return {
        hello: hello
    };
});

// 替换步骤
// app.js js/lib/hello.js
// app.js调用的前缀: js/lib/
// js/lib/log.js
// 没有baseurl 默认baseurl js
// 主目录 www/ + js/ + js/lib/log.js
// www/js/js/lib/log.js
