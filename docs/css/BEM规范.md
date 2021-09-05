# :green_book: BEM规范
### 一、命名规则

​	**block-name__elem-name--mod-name**

- 名称以小写字母书写；
- 复杂单词由连字符（ - ）分隔；
- 块名称为其元素和修饰符定义命名空间；
- 元素名称与块名称由**双下划线**（ __ ）分隔；
- 修饰符名称与块或元素名称由**双连字符**（ -- ）分隔；

### 二、什么是BEM

##### B：block块

​	本身就有意义的独立实体，可以重用的功能独立的页面组件

​	**特征：**
1. 不影响其环境，这意味着不应该为块设置外边距或定位；
2. 块可以相互嵌套；

##### E：element元素

​	不能单独使用的块的复合部分，没有独立的含义并且在语义上与其块相关联

​	**特征：**
1. 元素全名的结构是`block-name__element-name`；
2. 元素可以相互嵌套；
3. 元素始终是块的一部分，而不是另一个元素。这意味着元素名称不能定义层次结构（**bad**：`block__elem1__elem2`）；

##### M：modifier修饰符

​	块或元素上的标志，使用它们来改变外观、状态和行为。

​	**特征：**
1.  修饰符全名的结构遵循以下模式：

	- `block-name--modifier-name`
		
	- `block-name__element-name--modifier-name`

2. 修饰符不能单独使用

### 三、为什么使用BEM
1. 模块化
	- 块样式永远不会依赖于页面上的其他元素，因此就不会遇到级联问题。
2. 可重用性
	- 以不同的方式组合独立的块，并智能的重用，可以减少必须维护的css代码量；
	- 可以将块从已完成的项目转移到新项目。
3. 结构
	- BEM方法提供的是一个简单易懂的坚实结构

### 四、BEM能解决的三个问题

1. 想知道选择器的作用，只需查看其名称即可
2. 想了解选择器的使用位置，只需查看他即可
3. 想了解类名之间的关系，只需查看他们即可

### 五、BEM该如何命名

##### 1、块

​	块名称可以由字母、数字和连字符组成。要形成一个 CSS 类

```html
<!-- good  error块在语义上是有意义的 --> 
< div  class = "error" > </ div >

<!-- bad 它描述了外观 --> 
< div  class = "red-text" > </ div >

```

**块可以相互嵌套**。

```html
<!-- `header`块 --> 
< header  class = "header" > 
    <!-- 嵌套`logo`块 --> 
    < div  class = "logo" > </ div >

    <!-- 嵌套`search-form`块--> 
    < form  class = "search-form" > </ form > 
</ header >
```

##### 2、元素

​	元素名称可以由字母、数字、连字符和下划线组成

```html
<div class="search-form">
    <!-- good --> 
    < div  class = "search-form__content" > 
        <!-- `search-form` 块中的 `input` 元素 --> 
        < input  class = "search-form__input" >
        
        <!-- `search-form`块中的`button`元素--> 
        < button  class = "search-form__button" >搜索</ button > 
    </ div > 
    
    <!-- bad --> 
    < div  class = "search-form__content" > 
        < input  class = "search-form__content__input" >
        
        < button  class = "search-form__content__button" >搜索</ button > 
    </ div >  
</div>
```

##### 3、修饰符

​	修饰符名称可以由字母、数字、连字符和下划线组成

```html
<!-- 修饰符是您添加到块/元素 DOM 节点的额外类名。 -->
<!-- `search-form` 块有 `focused` 修饰符 --> 
< form  class = "search-form search-form--focused" >
    
    <!-- `button` 元素有 `disabled` 修饰符 --> 
    < button  class = "search-form__button search-form__button--disabled" > 
        Search 
    </button > 
</ form >
```

##### 小案例

​	假设您有带有修饰符`theme: "xmas"`和`simple: true`和元素`input`和元素的块表单`submit`，以及`submit`带有自己的修饰符的元素，`disabled: true`用于在未填写时不提交表单

```html
<form class="form form--theme-xmas form--simple">
  <input class="form__input" type="text" />
  <input class="form__submit form__submit--disabled" type="提交"/>
</form>

<style>
    .form { }
    .form--theme-xmas { }
    .form--simple { }
    .form__input { }
    .form__submit { }
    .form__submit--disabled { }
</style>
```

### 六、通过例子来解释BEM

假设有个火柴人代表整个组件

按照BEM的规则，这个组件理想的类名应该是`stick-man`

```css
 /* B */
.stick-man {
/*  在这里我们已经使用了 连字符`-` */
}
```

BEM中的E代表**Elements**。

这个整体的组件很少孤立存在。

比如，火柴人有一个`头`，两个`手臂`，和`脚`。

头部，脚部和手臂都是组件内的元素。它们可以被视为子组件，即整个父组件的子组件。

使用BEM命名规范，通过添加两个`下划线`,后跟元素名称来派生元素类名称。

```css
.stick-man__head { }
.stick-man__arms { }
.stick-man__feet { }
```

BEM中的M代表修饰符。

如果这个火柴人被修改了，我们可以有一个蓝色或红色的火柴人，怎么办？

```css
.stick-man--blue { }
.stick-man--red { }
```

假如我们的火柴人有两个不同大小的头部，怎么办？

```
.stick-man__head--small { }
.stick-man__head--big { }
```

### 七、常见问题

##### 1、如果块结构复杂并且其元素嵌套，该怎么办？

​	CSS 类`block__elem1__elem2__elem3`看起来很吓人。

​	根据边界元法，块状结构应展平；不需要反映块的嵌套 DOM 结构。因此，这种情况下的类名将是：

```html
<div class='block'>
    <div class='block__elem1'>
        <div class='block__elem2'>
            <div class='block__elem3'></div>
        </div>
    </div>
</div>

<style>
    .block { }
	.block__elem1 { }
	.block__elem2 { }
	.block__elem3 { }
</style>
```

##### 2、如何为修饰符选择名称？

​	根据语义选择修饰符名称，而不是它们描述的 CSS 属性。

```html
<!-- good --> 
< button class = "button button--view-action"> ... </按钮>

<!-- bad --> 
< button class = "button button--background-yellow"> ... </ button > 
```

该名称`button--background-yellow`不提供信息，因为：

- 如果将背景从`yellow` 更改为`red`，除了更改 CSS 代码之外，还必须更改选择器的名称、模板以及JS 代码。
- 当添加其他 CSS 属性（例如`border`或 `line-height`)时，修饰符的名称将不再与其内容匹配。

##### 3、BEM中使用级联

BEM 方法允许使用级联。

**重要的！应用级联会增加代码耦合并使重用变得不可能。**

例如，级联适用于根据块的状态或分配给它的主题来更改元素：

```css
.nav_hovered  .nav__link
{
    text-decoration: underline;
}

.nav_theme_islands  .nav__item
{
    line-hight: 1.5;
}
```

**参考：**

[BEM参考地址](https://www.freecodecamp.org/news/css-naming-conventions-that-will-save-you-hours-of-debugging-35cea737d849/)
    .form { }
    .form--theme-xmas { }
    .form--simple { }
    .form__input { }
    .form__submit { }
    .form__submit--disabled { }
</style>
```

### 六、通过例子来解释BEM

假设有个火柴人代表整个组件

按照BEM的规则，这个组件理想的类名应该是`stick-man`

```css
// B
.stick-man {
// 在这里我们已经使用了 连字符`-`
}
```

BEM中的E代表**Elements**。

这个整体的组件很少孤立存在。

比如，火柴人有一个`头`，两个`手臂`，和`脚`。

头部，脚部和手臂都是组件内的元素。它们可以被视为子组件，即整个父组件的子组件。

使用BEM命名规范，通过添加两个`下划线`,后跟元素名称来派生元素类名称。

```css
.stick-man__head { }
.stick-man__arms { }
.stick-man__feet { }
```

BEM中的M代表修饰符。

如果这个火柴人被修改了，我们可以有一个蓝色或红色的火柴人，怎么办？

```css
.stick-man--blue { }
.stick-man--red { }
```

假如我们的火柴人有两个不同大小的头部，怎么办？

```
.stick-man__head--small { }
.stick-man__head--big { }
```

### 七、常见问题

##### 1、如果块结构复杂并且其元素嵌套，该怎么办？

​	CSS 类`block__elem1__elem2__elem3`看起来很吓人。

​	根据边界元法，块状结构应展平；不需要反映块的嵌套 DOM 结构。因此，这种情况下的类名将是：

```html
<div class='block'>
    <div class='block__elem1'>
        <div class='block__elem2'>
            <div class='block__elem3'></div>
        </div>
    </div>
</div>

<style>
    .block { }
	.block__elem1 { }
	.block__elem2 { }
	.block__elem3 { }
</style>
```

##### 2、如何为修饰符选择名称？

​	根据语义选择修饰符名称，而不是它们描述的 CSS 属性。

```html
<!-- good --> 
< button class = "button button--view-action"> ... </按钮>

<!-- bad --> 
< button class = "button button--background-yellow"> ... </ button > 
```

该名称`button--background-yellow`不提供信息，因为：

- 如果将背景从`yellow` 更改为`red`，除了更改 CSS 代码之外，还必须更改选择器的名称、模板以及JS 代码。
- 当添加其他 CSS 属性（例如`border`或 `line-height`)时，修饰符的名称将不再与其内容匹配。

##### 3、BEM中使用级联

BEM 方法允许使用级联。

**重要的！应用级联会增加代码耦合并使重用变得不可能。**

例如，级联适用于根据块的状态或分配给它的主题来更改元素：

```css
.nav_hovered  .nav__link
{
    text-decoration: underline;
}

.nav_theme_islands  .nav__item
{
    line-hight: 1.5;
}
```

**参考：**

[BEM参考地址](https://www.freecodecamp.org/news/css-naming-conventions-that-will-save-you-hours-of-debugging-35cea737d849/)


