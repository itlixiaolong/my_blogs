# :green_book: vue中使用ts

## :paperclip: 1.使用typeof 生成类型定义
- 我们一般先定义类型，再使用：
```js
interface Opt {
  timeout: number
}
const defaultOption: Opt = {
  timeout: 500
}
```
- 有时候反过来使用会减少很多代码
```js
const defaultOption = {
  timeout: 500
}
type Opt = typeof defaultOption
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210205234915708.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)
>当一个 interface 总有一个字面量初始值时，可以考虑这种写法以减少重复代码，至少减少了两行代码
## :paperclip: 2.使用keyof或者属性的名称
>TypeScript 允许我们遍历某种类型的属性，并通过 keyof 操作符提取其属性的名称。

>keyof 操作符是在 TypeScript 2.1 版本引入的，该操作符可以用于获取某种类型的所有键，其返回类型是联合类型。

>keyof 与 Object.keys 略有相似，只不过 keyof 取 interface 的键
```js
const person = {
  age: 3,
  text: 'hello world'
}

// type keys = "age" | "text"
type keys = keyof person
```
- 写一个方法获取对象里面的属性值时，一般人可能会这么写
```js
function get1(o: object, name: string) {
  return o[name];
}

const age1 = get1(persion, 'age');
const text1 = get1(persion, 'text');
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210205235218969.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)
>这时可以使用 keyof 来加强 get 函数的类型功能，有兴趣的同学可以看看 _.get 的 type 标记以及实现
```js
function get<T extends object, K extends keyof T>(o: T, name: K): T[K] {
  return o[name]
}
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210205235314996.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)
## :paperclip: 3.使用查找类型
```js
interface Person {
    addr: {
        city: string,
        street: string,
        num: number,
    }
}
```
- 当需要使用 addr 的类型时，除了把类型提出来
```js
interface Address {
    city: string,
    street: string,
    num: number,
}

interface Person {
    addr: Address,
}
```
- 也可以
```js
const addr: Person["addr"] = {
    city: 'string',
    street: 'string',
    num: 2
}
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210205235558716.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)
>有些场合后者会让代码更整洁、易读
## :paperclip: 4.查找类型+泛型+keyof
>泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性
```js
interface API {
    '/user': { name: string },
    '/menu': { foods: string[] }
}
const get = <URL extends keyof API>(url: URL): Promise<API[URL]> => {
    return fetch(url).then(res => res.json());
}

get('');
get('/menu').then(user => user.foods);
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210205235733998.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)
## :paperclip: 5.类型断言
>Vue 组件里面经常会用到 ref 来获取子组件的属性或者方法，但是往往都推断不出来有啥属性与方法，还会报错。
```js
<template>
  <div class="home">
    <HelloWorld
      ref="helloRef"
      msg="Welcome to Your Vue.js + TypeScript App"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  print() {
    const helloRef = this.$refs.helloRef;
    console.log("helloRef.msg: ", helloRef.msg); 
  }

  mounted() {
    this.print();
  }
}
</script>
```
>因为 this.$refs.helloRef 是未知的类型，会报错误提示：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210205235856492.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)
> 解决办法使用类型断言
```js
  print() {
    // const helloRef = this.$refs.helloRef;
    const helloRef = this.$refs.helloRef as any;
    console.log("helloRef.msg: ", helloRef.msg); // helloRef.msg:  Welcome to Your Vue.js + TypeScript App
  }
```
>但是类型断言为 any 时是不好的，如果知道具体的类型，写具体的类型才好，不然引入 TypeScript 冒似没什么意义了。


## :paperclip: 6.显示泛型
>$('button') 是个 DOM 元素选择器，可是返回值的类型是运行时才能确定的，除了返回 any ，还可以
```js
function $<T extends HTMLElement>(id: string): T {
    return (document.getElementById(id)) as T;
}

// 不确定 input 的类型
// const input = $('input');

// Tell me what element it is.
const input = $<HTMLInputElement>('input');
console.log('input.value: ', input.value);
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210206000136191.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)
>函数泛型不一定非得自动推导出类型，有时候显式指定类型就好。


## :paperclip: 7.DeepReadonly
>被 readonly 标记的属性只能在声明时或类的构造函数中赋值。

>之后将不可改（即只读属性），否则会抛出 TS2540 错误。

>与 ES6 中的 const 很相似，但 readonly 只能用在类（TS 里也可以是接口）中的属性上，相当于一个只有 getter 没有 setter 的属性的语法糖。

- 下面实现一个深度声明 readonly 的类型：
```js
type DeepReadonly<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
}

const a = { foo: { bar: 22 } }
const b = a as DeepReadonly<typeof a>
b.foo.bar = 33 // Cannot assign to 'bar' because it is a read-only property.ts(2540)
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210206000248829.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)


## :paperclip: 8.使用/** */注释编辑器会有很好的提示

```
/** This is a cool guy. */
interface Person {
  /** This is name. */
  name: string,
}

const p: Person = {
    name: 'cool'
}
```
>如果想给某个属性添加注释说明或者友好提示，这种是很好的方式了。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210206000526565.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)
## :paperclip: 9.接口继承
>和类一样，接口也可以相互继承。

>这让我们能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210206000732123.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)
>一个接口可以继承多个接口，创建出多个接口的合成接口。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210206000804854.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)
## :paperclip: 10. interface& type
>TypeScript 中定义类型的两种方式：接口（interface）和 类型别名（type alias）。

-比如下面的 Interface 和 Type alias 的例子中，除了语法，意思是一样的：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210206000900291.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)
>而且两者都可以扩展，但是语法有所不同。此外，请注意，接口和类型别名不是互斥的。接口可以扩展类型别名，反之亦然。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210206000928300.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)
>它们的差别可以看下面这图或者看 TypeScript: Interfaces vs Types。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210206000947592.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)
所以想巧用  interface & type 还是不简单的。

>如果不知道用什么，记住：能用 interface 实现，就用 interface , 如果不能就用 type 