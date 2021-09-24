# :green_book: js中的骚操作

## :paperclip: 1、最简单的单行评级组件
```js
"★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate); 
```
定义一个变量 rate 是 1 到 5 的值，然后执行上面代码，如下
![在这里插入图片描述](https://img-blog.csdnimg.cn/8fa00ae46ba84993b40b629b8f33b1b0.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAaXRsaXhpYW9sb25n,size_13,color_FFFFFF,t_70,g_se,x_16)
## :paperclip: 2、JS 错误处理的方式的正确姿势（直接定位错误原因）
```js
try {
    // something
} catch (e) {
    window.location.href =
        "http://stackoverflow.com/search?q=[js]+" + e.message;
} 
```

## :paperclip: 3、从一行代码里面学点 JavaScript（如何快速知道所有元素边框）
```js
[].forEach.call($$("*"),function(a){
    a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)
})
```
换成另一种比较常见的写法就是：
```js
Array.prototype.forEach.call(document.querySelectorAll( * ), 
dom => dom.style.outline = `1px solid #${parseInt(Math.random() * 
Math.pow(2,24)).toString(16)}`)
```
接下来在浏览器控制看看：
![在这里插入图片描述](https://img-blog.csdnimg.cn/2654b9f354b440c3b1ceb38d4063b79e.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAaXRsaXhpYW9sb25n,size_19,color_FFFFFF,t_70,g_se,x_16)
## :paperclip: 4、史上最快清除缓存方法
```js
<a href="javascript:alert( 清除成功 );">清除缓存</a>
```

## :paperclip: 5、在元素后插入一串 HTML

开发 Web 应用程序，使用 JavaScript 更新 DOM 是一件很常见的事情。有一些基本的方法可以完成工作，但是当情况变得复杂时，就很难克服。

这是在 HTML 元素之后立即注入一串 HTML 的单行代码。通过几分钟的思考和谷歌搜索，我相信你可以找到这个单行的之前版本。

```js
const insertHTMLAfter = (html, el) => el.insertAdjacentHTML('afterend', html)
```

## :paperclip: 6、打乱数组

打乱数组在开发中混洗一组数据是你随时可能遇到的常见情况，不幸的是，JavaScript 中没有内置数组的混洗方法。但是，这是你可以每天使用的 shuffle one-liner：

```js
const shuffle = arr => arr.sort(() => 0.5 - Math.random())

```
它利用数组的排序方法，在数组的前一个元素之前或之后进行随机排序。


## :paperclip: 7、在网页上获取选定的文本

浏览器在全局 windows 对象上有一个名为 getSelection 的内置方法。

使用此方法，你可以创建一个单行，返回网页上突出显示或选定的文本。

```js
const getSelectedText = () => window.getSelection().toString()
```

## :paperclip: 8、 获取一个随机布尔值

在编程时，尤其是在编写游戏时，有时你会想要随机采取行动。在这种情况下，下面的单行非常方便。

```js
const getRandomBoolean = () => Math.random() >= 0.5
```

上面的单行有 50/50 的机会返回 true 或 false。因为生成的随机数大于 0.5 的概率等于较小的概率。

但是，例如，如果你想获得一个概率为 70% 错误的随机布尔值，那么，你可以简单地将 0.5 更改为 0.7，依此类推。

## :paperclip: 9、计算数组的平均值

可以使用多种方法计算数组的平均值。但道理对所有人都是一样的。你必须获得数组及其长度的总和；然后除法给出平均值。

```js 
const average = (arr) => arr.reduce((a, b) => a + b) / arr.length
```
在平均单行中，我们使用 reduce 来获取一行中的数组的总和，而不是使用循环。然后，我们将其除以数组长度，这是数组的平均值。