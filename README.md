[文档来源](https://www.jianshu.com/p/99321f292776)
# baseURl的取值
1. 用requirejs.config显示指定baseUrl；  
2. 如果指 定了Entry Point(data-main)文件,则baseUrl为Entry Point所在目录；  
3. 如果上述均未指定，则baseUrl为运行RequireJS的HTML文件所在目录。  
# module ID会被当做普通路径处理
1. 应用的module ID以.js结尾；
2. 以“/”开始(操作系统根目录/)；
3. 包含url协议：如"http:"、"https"。
# 主目录
指调用RequireJS的html文件所在的目录  
## 结论1.1：在RequireJS中，baseUrl的定义是“`相对于主目录`”的  
[例子1](./demo01)  
[例子2](./demo02)  
## 结论1.2：按照普通路径处理时候，引用路径是相对于主目录的
[例子3](./demo03)  
[例子4](./demo04)  
[例子5](./demo05)  
[例子6](./demo06)  
# 路径的级联处理
## 结论2.1：在一个模块的定义内寻找依赖时候会首先会进行./替换
`在定义模块时(define语句)声明的依赖中如果使用了./，在路径解析时./会被替换成使用该模块(require语句)时的路径前缀（路径中最后一个"/"前的所有部分），如果没有前缀则不进行替换。`
1. 如果写成：require(['js/lib/hello.js']，则路径的前缀为"js/lib/"；
2. 如果写成：require['hello.js']，则表示没有路径前缀。
[例子11](./demo11)  
[例子12](./demo12)  
[例子13](./demo13)  
`./log.js替换成log.js将不再进行替换`  
[例子14](./demo14)  
[例子15](./demo15)  
[例子16](./demo16)  
# 路径解析逻辑
结论3.1：RequireJS中路径的处理流程如下图所示  
![alt](/images/817398-444cbfb714073caf.png 我喜欢的狗狗)
综上所述，RequireJS中路径解析过程如上图所示。在级联处理中会首先进行./替换操作；然后再针对  
不以.js结尾的进行paths替换和baseUrl拼接；最后拼接上“主目录”。  
# 影响hello模块查找log.js主要在于几点：
* ./替换
* paths替换
* baseUrl
* 主目录
# 最佳实践
`baseUrl指向库文件lib`  
`path指向应用文件app`  
`lib/path同级目录,不要深层次嵌套`
