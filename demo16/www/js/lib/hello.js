// ---hello.js---
define(['log.js'], function(log) {
    var hello = function(msg) {
            log.log('www/js/lib/hello.js: ' + msg);
        };
    return {
        hello: hello
    };
});

// 替换步骤 ./
// app.js hello
// app.js调用的前缀: 空前缀
// log.js
// baseurl js
// 主目录 www/+ js/ + /log.js



// 不再进行替换
// www/log.js
