### 以下是我对ajax做的一些总结，仅供记录，有不对的地方欢迎指正。

1, ajax的出现改变了网页交互方式，之前是更新网页需要重复加载整个网页，ajax出现之后，只需要根据需求请求，然后根据返回数据更改页面需要变更的地方，大大提高了网页性能。
2, ajax的使用形式：
* 实例化一个XMLHttpRequest对象，
* 绑定readyState改变时调用的回调
* 使用open,send方法即可
代码如下：
```js
var xhr
// 实例化一个 XMLHttpRequest 对象
if (window.XMLHttpRequest) {
  xhr = new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE 6及以下
  xhr = new ActiveXObject("Microsoft.XMLHTTP");
}
// 绑定 xhr.readyState 改变时调用的回调
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText)
      console.log('请求成功')
    } else {
      console.log('请求错误')
    }
  }
}
// 初始化请求
xhr.open('GET', '/api/hello');
// 设置请求头（可选）
xhr.setRequestHeader('Accept', '*/*')
// 发出请求
xhr.send();
```
3, ajax实现异步请求，用户无需等待返回而在请求过程中可以继续浏览。
4, ajax请求返回有几种状态，根据每种状态做相应代码处理。
5, ajax可以设置请求头（提供的有方法）。
6，在html5之后，统一了XMLHttpRequest规范，更新了新的内容：
* 上传文件
* 设置http请求超时时间
* 可以获取服务端的二进制文件
* 支持跨域
* 获取数据传输的进度信息
* 通过formData发送表单信息

7, 关于跨域：ajax之前，是使用JSONP来解决跨域，之后选择CORS解决跨域（关于JSONP解决方法：https://www.cnblogs.com/chq1024/p/12685779.html，关于CORS解决方法：http://www.ruanyifeng.com/blog/2016/04/cors.html）

8，CORS与JSONP的使用目的相同，但是比JSONP更强大，JSONP只支持get请求，CORS支持所有类型的http请求，JSONP的优势在于支持老式的浏览器，以及向不支持CORS的网站请求数据。