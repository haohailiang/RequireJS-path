// hello.js
define(['./log.js'], function(log) {
    var hello = function(msg) {
            log.log('www/js/lib/hello.js: ' + msg);
        };

    return {
        hello: hello
    };
});

// --------------------------------------
// 官方文档[进行paths+baseurl替换]
// 进行./替换(./->lib)，得到lib/log
// 进行paths替换(lib->js/lib)，得到js/lib/log
// 进行baseUrl拼接，得到./js/lib/log
// 进行“主目录”拼接，得到www/./js/lib/log。最终指向www/js/lib/log.js(非级联处理中./表示当前目录，可以省略)

// 自我理解[进行paths+baseurl替换]
// require(['lib/hello'] --> lib前缀
// 当前路径拼接 lib/ + log --> lib/log
// baseUrl拼接  ./ + lib/log --> ./js/lib/log
// 拼接主目录 www/ + ./js/lib/log --> www/./js/lib/log.js

// 不进行baseurl + path 替换
// 进行./替换(./->lib)，得到lib/log.js
// 进行“主目录”拼接，得到www/lib/log.js
// --------------------------------------
