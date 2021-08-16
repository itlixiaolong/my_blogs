# :green_book: any、void、never、unknown的区别
## :paintbrush: 1.含义区别
--|any | void |never|unknown
---|---|---|---|---
含义|任何类型|没有类型|永不存在的值的类型|未知的类型
使用场景|1.为在编程阶段还不清楚类型的变量指定一个类型<br><br>2.在为旧代码添加ts时，需要编辑器跳过类型校验的时候|当一个函数没有返回值时，返回类型为void|1.throw error的函数返回值类型为never<br><br>2.死循环的函数返回值为never|不知道未来的类型,不会丢失类型校验
## :paintbrush: 2.使用实例

- any
```
let notSure: any = 4
notSure = 'maybe a string instead'
notSure = false // 也可以是个 boolean

```
```
let list: any[] = [1, true, 'free']
list[1] = 100

```
- unknown
> any 任何类型，会忽略语法检查

> unknown 不可预知的类型，不会忽略语法检查（这就是最大区别）
```js
const bar: any = 10;
any.substr(1); // OK - any 会忽略所有类型检查

const foo: unknown = 'string';
foo.substr(1); // Error: 语法检查不通过报错
// (foo as string).substr(1) // OK
// if (typeof foo === 'string') { foo.substr(1) } // OK
```
- void
```
function warnUser(): void {
  console.log('This is my warning message')
}

```
- never
```
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message)
}

// 推断的返回值类型为never
function fail() {
  return error("Something failed")
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {
  }
}

```