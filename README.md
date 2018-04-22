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
