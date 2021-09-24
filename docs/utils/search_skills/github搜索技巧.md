# :green_book: github搜索技巧

> 搜索学习资料
awesome + 搜索内容

```js
awesome vue //查找vue的学习资料
```
> 同性交友 location:地区 language:语言
```js
location:beijing language:vue //查找北京地区vue的大佬
```

> 高亮显示github中代码文件的某一行   项目URL#L+要高亮的行号

```js
项目URL#L20 //高亮第二十行
```

> 高亮显示github中代码文件的某一段代码   项目URL#L+要高亮的起始行号-L要高亮的结束行号

```js
项目URL#L20-L40 //高亮第二十行到第40行
```


> in:name(项目名称)|description(项目描述)|readme(项目帮助文档)

```js
//单独使用

vue in:name //搜索项目名字中带vue的项目

//组合使用

vue in:name,description,readme//搜索项目名字,描述,帮助文档中都带vue的项目
```

> stars:>=number(数字)|stars:<=number(数字)|stars:number1(数字)..number2(数字)

> fork:number1..number2

```js
//单独使用

vue stars:>=2000 //搜索star数大于2000的vue的项目
vue fork:100..200 //搜索fork数大于100小于200的vue的项目

//组合使用以空格分割

vue stars:100..200 fork:100..200//搜索star数在100到200之间并且fork数大于100小于200的vue的项目

```