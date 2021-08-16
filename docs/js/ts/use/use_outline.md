# :green_book: ts使用概要
## :paintbrush: 1.对于一个变量我希望它既可以是string也可以是number类型,这是就用到了联合类型 用符号 | 表示
```
let a:string | number=7
```
## :paintbrush: 2.对于对象需要利用接口,理论上接口形状一旦定义就不能多也不能少,但是可以通过添加?变成可选属性来解决,可选属性的含义是该属性可以不存在
这时仍然不允许添加未定义的属性：
```
interface IPerson{
    readonly id: number;
    name: string;
    age?: number; 
}

```
## :paintbrush: 3.数组的定义:==类型+[]==  或者 使用==接口定义数组==
```
let arr:number[]=[1,2]
let arr:string[]=['1','2']
let arr:boolean[]=[true,false]

interface NumberArray {
    [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];

//对于类数组的定义,如arguments，应该使用接口描述
function sum() {
    let args: number[] = arguments; //报错
}

// Type 'IArguments' is missing the following properties from type 'number[]': pop, push, concat, join, and 24 more.

function sum() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}

//或者

interface Argument {
    [index: number]: number;
    length: number;
    callee: Function;
}
function sum() {
    let args:Argument= arguments;
}

```
- 3.1 如果数组中既有string，又有number
```
let arr:(string|number)[]=['1234',12]
```

- 3.2.如果数组中即想使用string又想使用number,而且必须限制第一个是string类型，第二个是number类型可以说采用元组

```
let arr:[string,number]=['1',2]

```
## :paintbrush: 4.命名空间
在代码量较大的情况下，为了避免各种变量命名相冲突，可将相似功能的函数、类、接口等放置到命名空间内
TypeScript的命名空间可以将代码包裹起来，只对外暴露需要在外部访问的对象。

命名空间和模块的区别

- 命名空间：内部模块，主要用于组织代码，避免命名冲突。
- 模块：ts外部模块的简称，侧重代码的复用，一个模块里可能会有多个命名空间。
```js
// modules/Animal.ts
export namespace A {
  interface Animal {
    name: String;
    eat(): void;
  }

  export class Dog implements Animal {
    name: String;
    constructor(theName: string) {
      this.name = theName;
    }
    eat() {
      console.log("我是" + this.name);
    }
  }
}

export namespace B {
  interface Animal {
    name: String;
    eat(): void;
  }

  export class Dog implements Animal {
    name: String;
    constructor(theName: string) {
      this.name = theName;
    }
    eat() {}
  }
}
```
```js
 import { A, B } from "./modules/Animal";
 let ee = new A.Dog("小贝");
 ee.eat();
```


## :paintbrush: 5.函数的定义

```
function sum(x:number,y:number):number{
    return x+y
}
const sum:(x:number,y:number)=>number=function(x:number,y:number):number{
    return x+y
}

interface ISumFn{
    (x:number,y:number):number
}
const sum:ISumFn=(x:number,y:number):number{
    return x+y
}

```

## :paintbrush: 6.泛型

- 6.1 泛型中数组的使用

```
// 写法一：
function myFun<T>(params: T[]) {
  return params;
}
myFun < string > ["123", "456"];

// 写法二：
function myFun<T>(params: Array<T>) {
  return params;
}
myFun < string > ["123", "456"];

```

- 6.2 泛型中类的使用

```
// 写法一：
class SelectGirl<T> {
  constructor(private girls: T[]) {}
  getGirl(index: number): T {
    return this.girls[index];
  }
}

const selectGirl = new SelectGirl() < string > ["大脚", "刘英", "晓红"];
console.log(selectGirl.getGirl(1));

```
- 6.3 泛型中函数的使用

```
function getDate<T>(value: T): T {
  return value;
}
console.log(getDate<number>(123));

```
- 6.4 泛型中接口的使用(==tips:接口的泛型只针对函数类型的接口==)

```
// 写法一:
interface ConfigFn {
  //规范参数类型,返回值类型
  <T>(value: T): T;
}

let getData: ConfigFn = function <T>(value: T): T {
  return value;
};

console.log(getData<string>("z11"));

// 写法二:

interface ConfigFn<T> {
  //参数类型 ，返回值类型
  (value: T): T;
}

//接口方法
function getData<T>(value: T): T {
  return value;
}

//使用接口
let myGetDate: ConfigFn<string> = getData;
console.log(myGetDate("3"));

```


- 6.5 泛型中多个参数的使用

```
function join<T, P>(first: T, second: P) {
  return `${first}${second}`;
}
join(1, "2");

```

- 6.6 泛型约束

```
//方法一： 通过interface使用extends约束
interface Girl {
  name: string;
}
class SelectGirl<T extends Girl> {
 ...
}

// 这句代码的意思是泛型里必须有一个name属性，因为它继承了Girl接口。

//扩展：泛型可以集成多个接口
class SelectGirl<T extends number | string> {
  //.....
}

```

- 6.7 泛型默认类型
```
function createArray<T = string>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
```

- 6.8 类型别名
```
语法： type  类型别名 = 具体类型

type unionTypes = string | number | boolean

let a:unionTypes = 1

//相当于

let a：string | number | boolean = 1
```

## :paintbrush: 7.接口
- 7.1 可索引接口
> 约束数组
```js
  interface Arr{
    [index:number]: string
  }
  let arr:Arr=['1']
```

>约束对象
```js
 interface Obj{
     [index:string]: string
 }
 let obj:Obj=['1']
```
- 7.2 类类型接口
> 对类进行约束,类似抽象类的实现
```js
interface Animals {
  name: string;
  eat(): void;
}

class Dogs implements Animals {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  eat() {}
}
```
> 接口继承--接口可以继承接口
```js
interface Dog {
  eat(): void;
}

interface Persons extends Dog {
  work(): void;
}

class Cat {
  code() {
    console.log("猫在敲代码");
  }
}

//可继承类后再实现接口
class SuperMan extends Cat implements Persons {
  eat(): void {
    console.log(1);
  }
  work(): void {
    console.log(2);
  }
}
let superMan = new SuperMan();
superMan.code();


```
## :paintbrush:注：以下都可以“欺骗”编译器跳过语法检查

## :paintbrush: 8.使用注释屏蔽ts的校验

- 单行忽略
```
// @ts-ignore
```

- 忽略全文
```
// @ts-nocheck
```

- 取消忽略全文
```
// @ts-check
```
有时候不想处理不相干的错误
```js
const num1: number = 100
num1.substr() // Error 语法检查错误

const num2: number = 200
// @ts-ignore
num2.substr() // Ok 语法检查通过
```
## :paintbrush: 9.当你确定一个类型可以使用as语法告诉ts不需要做类型校验了

```
let fn=(test as any).fun


interface Waiter {
  anjiao: boolean;
  say: () => {};
}

interface Teacher {
  anjiao: boolean;
  skill: () => {};
}
// 方法一：as
function judgeWho(animal: Waiter | Teacher) {
  if (animal.anjiao) {
    (animal as Teacher).skill();
  }else{
    (animal as Waiter).say();
  }
}

// 方法二： in
function judgeWhoTwo(animal: Waiter | Teacher) {
  if ("skill" in animal) {
    animal.skill();
  } else {
    animal.say();
  }
}

// 方法三： typeof

function add(first: string | number, second: string | number) {
  return first + second;
}

function add(first: string | number, second: string | number) {
  if (typeof first === "string" || typeof second === "string") {
    return `${first}${second}`;
  }
  return first + second;
}

// 方法四： instanceof
class NumberObj {
  count: number;
}

function addObj(first: object | NumberObj, second: object | NumberObj) {
  return first.count + second.count;
}

function addObj(first: object | NumberObj, second: object | NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count;
  }
  return 0;
}
```
## :paintbrush: 10.使用非空断言操作符 !排除值为 null undefined的情况

>即告诉编译器：xx 变量肯定不是 null 或 undefined ，你放心吧～

==注意: 运行时有可能出错==
```js
// 例子 1
function fn(a: string | null | undefined) {
    let s: string = ''
    s = a // Error 语法检查失败
    s = a! // OK —— 【注意】如果 a 真的是 null 或者 undefined ，那么 s 也会是 null 或者 undefined ，可能会带来 bug ！！！
}
// fn(null)

// 例子 2
type NumGenerator = () => number;

function myFunc(numGenerator: NumGenerator | undefined) {
  const num1 = numGenerator(); // Error 语法检查失败
  const num2 = numGenerator!(); // OK
}

// myFunc(undefined) // 【注意】，如果真的传入 undefined ，也会去执行，当然会执行报错！！！

// 例子 3
let a: number
console.log(a) // Error - Variable 'n' is used before being assigned.
let b!: number
console.log(b) // OK - `!` 表示，你会给 b 一个赋值，不用编译器关心
```
## :paintbrush: 11.Ts中时间的类型

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210329185402197.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)

相关的继承关系如下:

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210329185338967.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)
