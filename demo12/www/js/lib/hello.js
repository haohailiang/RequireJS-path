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
// app.js hello
// app.js调用的前缀: 空前缀
// log.js
// baseurl js/lib
// 主目录 www+ js/lib + /log.js
// www/js/lib/log.js
