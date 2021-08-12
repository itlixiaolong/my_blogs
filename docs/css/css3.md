##  一、minimist是什么

minimist是nodejs的命令行参数解析工具，是用于处理命令行调用node指令时，处理node之后的一系列参数的模块
#### 1. 参数格式
```js
var parseArgs = require('minimist')
var argv = parseArgs(args, opts={})
// args是node指令
// opts是一个对象，其值为数组或字符串

// cmd命令行 启动命令
node 文件路径/文件名 命令行
```
#### 2.关于opts
- opts.string
	- 字符串或字符串参数名称数组，始终视为字符串
- opts.boolean
	- 一个布尔值，字符串或字符串数组，始终被处理为布尔值。
	- 如果为`true`会将所有带`--`且没有`=`的参数处理为布尔值
- opts.alias
	- 一个对象，将字符串名称映射到`以将其用作别名的对象
- opts.default
	- 一个对象，将字符串参数名称映射为默认值
- opts.stopEarly
	- 值为`true`时，将第一个非参数字符串之后的所有参数放入`argv._`
- opts.['--']
	- 值为`true`时，将`--`以前的所有参数放入`argv._`,将`--`之后的所有参数放入`argv['--']
- opts.unknown
	- 定义一个函数，当出现opts中未定义的指令参数，该函数将会被调用，如果该函数返回`false`，则未知的参数将不会被放入`argv`

```js
// index.js
var args = require('minimist')(process.argv.slice(2),{
    string : ['port', 'language' ], // key=port|language返回的就是value的字符串
    boolean: ['debug'], // debug参数的value有就是ture,无就是false
    alias: {
        port: 'p', // p的value = port返回的value
        language: 'l'
    },
    default: {
        NODE_ENV: 'dev' // 默认设置的值
    },
    stopEarly: ['debug']
})
console.log(process.argv.slice(2))
console.log("----------------------");
console.log(args);
```

```js
// 启动命令
node index.js --debug=Enble --out=22 --port=3030 --language=cn -x

// 输出结果
[ '--debug=Enble', '--out=22', '--port=3030', '--language=cn', '-x' ]

----------------------

{ _: [],
  debug: true,
  out: 22,
  port: '3030',
  p: '3030',
  language: 'cn',
  l: 'cn',
  x: true,
  NODE_ENV: 'dev' 
}
```

注意：

1. 带有`-`或者`--`的参数都被解析成单独的key值，也就是独立的参数，而不带有参数选项的参数会被统一解析到` _ `数组中。
2. 带有`-`的多个字符会被分开解析，例如：'-ab' 被解析成{a: true, b: true} 
3. 带有`--`的多个字符不会被分开解析，例如：'--ab' 被解析成 {ab: true}

#### 3.特性

- short options
- long options
- Boolean 和 Number类型的自动转化
- option alias
## 二、minimist如何使用
#### 1. 安装
```js
  npm install minimist --save-dev
```
#### 2.实例

```js
// test.js
var args = require('minimist')(process.argv.slice(2));

console.log(args.hello);
```

```js
node test.js --hello=world
// world

node test.js --hello world
// world

node test.js --hello
// true 注意：不是空字符串而是true
```

从上面的实例可以看出

1. **一般情况下**，如果参数后面没有跟着的value的话，minimist会把参数的值解析成true；
2. 不过，minimist在解析接口当中提供的`string`选项来修改上面的解析过程。`string`选项可以传入一个数组，数组中的参数会被一直解析成字符串。

修改一下上边的test.js

```js
// test.js
var args = require('minimist')(process.argv.slice(2), {
    string: ['hello']
});

console.log(args.hello);
```

```js
node test.js --hello world
// world

node test.js --hello
// ""
```

在`string`选项当中添加了`hello`之后，`hello`的值会一直解析成字符串，如果去掉了`world`，那么`hello`将解析成空字符串。



`boolean`选项，与`string`选项相反，在`boolean`选项当中的参数，会被一直解析成`true`或`false`，比如下面的例子：

```js
var args = require('minimist')(process.argv.slice(2), {
    boolean: ['hello']
});

console.log(args.hello);
console.log(args);
```

```js
node test.js --hello world
// true
// { _: [ 'word' ], hello: true }
  
node test.js
// false
// { _: [], hello: false }
```

`hello`将一直被解析成`true`或`false`，添加的`world`会保存到`args`的`_`选项里面。



#### 3.注意事项

如果`boolean`选项与`string`选项中的参数一样，值为`true`时，会一直解析成字符串

```js
var args = require('minimist')(process.argv.slice(2),
{
    boolean: ['hello'],
    string: ['hello']
});

console.log(args.hello);
console.log(args);
```

```js
node test.js --hello world
// ''
// { _: [ 'word' ], hello: '' }
  
node test.js --hello
// ''
// { _: [], hello: '' }
  
node test.js
// false
// { _: [], hello: false}
```


