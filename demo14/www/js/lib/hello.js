// ---hello.js---
define(['log.js'], function(log) {
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
// 没有baseurl
// 主目录 www+ js/lib/log.js



// 不再进行替换
// www/log.js
