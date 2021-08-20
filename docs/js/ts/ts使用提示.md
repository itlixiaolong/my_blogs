# :green_book: ts使用Tip

## :paperclip: 1.使用参数默认值代替||表达式
```ts
//错误:
function createBlogPost(text: string, author: string, date?: Date) {
  return {
    text: text,
    author: author,
    date: date || new Date()
  }
}
//正确
function createBlogPost(text: string, author: string, date: Date = new Date()) {
  return {
    text: text,
    author: author,
    date: date
  }
}
```
## :paperclip: 2.使用unknown类型代替any
```ts
interface Product {
  id: string;
  name: string;
  price: string;
  num: number
}
async function loadProducts(): Promise<Product[]> {
  const response = await fetch('https://api.mysite.com/products')
  const products: any = await response.json()
  return products
}
async function loadProducts(): Promise<Product[]> {
  const response = await fetch('https://api.mysite.com/products')
  const products: unknown = await response.json()
  return products as Product[]
}

```
## :paperclip: 3.使用类型守卫( type guard )代替强制类型推断(as)
```ts
interface Product {
  id: string;
  name: string;
  price: string;
  num: number;
}

//错误
async function loadProducts(): Promise<Product[]> {
  const response = await fetch('https://api.mysite.com/products')
  const products: unknown = await response.json()
  return products as Product[]
}

//正确
function isProduct(obj: unknown): obj is Product {
  return obj != null && typeof (obj as Product).id === 'string'
}
function isArrayOfProducts(obj: unknown): obj is Product[] {
  return Array.isArray(obj) && obj.every(isProduct)
}

async function loadProducts(): Promise<Product[]> {
  const response = await fetch('https://api.mysite.com/products')
  const products: unknown = await response.json()
  if (!isArrayOfProducts(products)) {
    throw new TypeError('Received malformed products API response')
  } 
  return products
}

```
[ type guard 参考 ](https://blog.csdn.net/u010730126/article/details/107402749)

## :paperclip: 4.编写测试用例时,创建mock数据代替any
```ts
interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string
}
//错误
test('createEmailText returns text that greats the user by first name', () => {
  const user: User = { firstName: 'John' } as any
  expect(createEmailText(user)).toContain(user.firstName)
}

//正确 
class MockUser implements User {
  id = 'id'
  firstName = 'John'
  lastName = 'Doe'
  email = 'john@doe.com'
  }
test('createEmailText returns text that greats the user by first name', () => {
  const user = new MockUser()
  expect(createEmailText(user)).toContain(user.firstName)
}

```

## :paperclip: 5.使用组合接口代替接口的可选属性,让数组模型固定
```ts
//错误
interface Product {
  id: string;
  type: 'digital' | 'physical';
  weightInKg?: number;
  sizeInMb?: number;
}

//正确
interface Product {
  id: string;
  type: 'digital' | 'physical';
}
interface DigitalProduct extends Product {
  type: 'digital';
  sizeInMb: number;
}
interface PhysicalProduct extends Product {
  type: 'physical';
  weightInKg: number;
}

```
## :paperclip: 6.使用有明确含义的单词代替单字母的泛型
```ts
//错误
function head(arr: T[]): T | undefined {
  return arr[0]
}

//正确
function head(arr: Element[]): Element | undefined {
  return arr[0]
}


```
## :paperclip: 7.使用if语句判断布尔值时,明确我们想要判断的情况
```ts
//错误
function createNewMessagesResponse(countOfNewMessages?: number) {
  if (countOfNewMessages) {
    return `You have ${countOfNewMessages} new messages`
  }
  return 'Error: Could not retrieve number of new messages'
}

function createNewMessagesResponse(countOfNewMessages?: number) {
  if (!!countOfNewMessages) {
    return `You have ${countOfNewMessages} new messages`
  } return 'Error: Could not retrieve number of new messages'
}


//正确
function createNewMessagesResponse(countOfNewMessages?: number) {
  if (countOfNewMessages !== undefined) {
    return `You have ${countOfNewMessages} new messages`
  } return 'Error: Could not retrieve number of new messages'
}

//上面的示例处理了 countOfNewMessages 为 0 的不同情况。

```

## :paperclip: 8.判断不是null或者undefined的时候,明确我们想要判断的类型
```ts
//错误
function createNewMessagesResponse(countOfNewMessages?: number) {
  if (countOfNewMessages != null) { //!= null 允许我们同时检查 null 和 undefined。
    return `You have ${countOfNewMessages} new messages`
  }
  return 'Error: Could not retrieve number of new messages'
}

//正确
function createNewMessagesResponse(countOfNewMessages?: number) {
  if (countOfNewMessages !== undefined) { //我们明确只检查undefined的情形
    return `You have ${countOfNewMessages} new messages`
  }
  return 'Error: Could not retrieve number of new messages'
}

```