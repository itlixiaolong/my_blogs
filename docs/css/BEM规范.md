# :green_book: BEM规范

#  BEM是什么?
BEM (Block, Element, Modifier)是一个基于组件化思想的前端开发方式,它的设计哲学是将web界面分割成多个独立的block,这使得界面开发变得简单而快速，即使是复杂的用户界面，也可以重复使用现有的代码，而无需复制和粘贴。
# BEM包含的内容
- Block
- Element
- 我应该创建Block还是Element?
- Modifier
- Mix
- File structure

## :paperclip: Block
在页面上,一个功能独立的组件是可以被复用的,在HTML中,一个Block的划分通常是一个class属性
### 特点


> blcok的名字表述了block的用途(它是什么?--是menu或者button),而不是它的状态(它是什么样子的?--是red或者big)

### 例子
```html
<!-- Correct. `error` 块在语义上是有意义的 -->
<div class="error"></div>

<!-- Incorrect. 它描述的是外观 -->
<div class="red-text"></div>
```
> 原则
- block不应该影响它的环境，这意味着你不应该为block设置外部几何属性（margin）或定位。
- 在使用BEM时，你也不应该使用CSS标签或ID选择器。
> 作用

这确保了可以重复使用的block或将其从一个地方移动到另一个地方所需的独立性。

###  Block使用指南
#### 嵌套
- Block可以相互嵌套。
- 您可以有任意数量的嵌套级别。
##### 例子
```html
<!-- `header` block -->
<header class="header">
    <!-- Nested `logo` block -->
    <div class="logo"></div>

    <!-- Nested `search-form` block -->
    <form class="search-form"></form>
</header>
```
## :paperclip:  Element
组成Block的一部分,不能脱离Block而使用
### 特点
> - element的名字表述了element的用途(它是什么? — `item`, `text`等等),而不是它的状态(什么类型或者它是什么样子的? `— red, big`, 等等)
> - 一个element的名字的结构是`block-name__element-name`.。element-name与block-name之间用双下划线（`__`）分开。
### 例子
```html
<!-- `search-form` block -->
<form class="search-form">
    <!-- `input` element in the `search-form` block -->
    <input class="search-form__input">

    <!-- `button` element in the `search-form` block -->
    <button class="search-form__button">Search</button>
</form>
```
###  Element使用指南
#### 嵌套
- Elements可以相互嵌套。
- 您可以有任意数量的嵌套级别。
- 一个元素总是一个块的一部分，而不是另一个元素。这意味着元素名称不能是一个级联的结构，如block__elem1__elem2。
##### 例子
```html
<!--
    Correct. element的名字结构符合规范: `block-name__element-name`
-->
<form class="search-form">
    <div class="search-form__content">
        <input class="search-form__input">

        <button class="search-form__button">Search</button>
    </div>
</form>

<!--
    Incorrect. element的名字结构不符合规范`block-name__element-name`
-->
<form class="search-form">
    <div class="search-form__content">
        <!-- Recommended: `search-form__input` or `search-form__content-input` -->
        <input class="search-form__content__input">

        <!-- Recommended: `search-form__button` or `search-form__content-button` -->
        <button class="search-form__content__button">Search</button>
    </div>
</form>
```


#### 从属性
- 一个element总是一个block的一部分，你不应该脱离block使用element。
##### 例子
```html
<!-- Correct. Elements 在 `search-form` block 的内部使用-->
<!-- `search-form` block -->
<form class="search-form">
    <!-- `input` element in the `search-form` block -->
    <input class="search-form__input">

    <!-- `button` element in the `search-form` block -->
    <button class="search-form__button">Search</button>
</form>

<!--
    Incorrect. Elements 在 `search-form` block的外部使用
-->
<!-- `search-form` block -->
<form class="search-form">
</form>

<!-- `input` element in the `search-form` block -->
<input class="search-form__input">

<!-- `button` element in the `search-form` block-->
<button class="search-form__button">Search</button>
```

### 可选性
- 不是所有的Block都必须要element,element只是block的一个可选的组成部分

#### 例子
```html
<!-- `search-form` block -->
<div class="search-form">
    <!-- `input` block -->
    <input class="input">

    <!-- `button` block -->
    <button class="button">Search</button>
</div>
```
## :paperclip: 我应该创建Block还是Element?
### 创建Block
- 如果一段代码(样式)可能会被重用，并且它不依赖于其他页面的样式块。

### 创建Element
- 如果一段代码没有Block就不能单独使用。(form 和 form-item)
- 例外的情况是，为了简化开发，必须将元素分成更小的部分--子元素。  在BEM规范中，你不能创建元素的元素。在这样的情况下，你需要创建一个服务块，而不是创造一个元素。


## :paperclip:  Modifier
定义Block和Element外观、状态、行为的一段代码描述

### 特点
> - Modifier的名字表述了Modifier的外观(它是什么颜色?或者什么主题? — `size_small`, `theme_black`等等),状态(它和其他的有什么不同? — `disabled`, `focused`等等),行为(他的行为是什么?或者对于用户来说,响应是什么?— directions_left-top)
> - 一个Modifier的名字的结构是`block-name_modifier-name`或者`block-name__element-name_modifier-name`.。modifier-name与block-name以及element-name之间用单下划线（`_`）分开。

建议:
> 使用`--`分割
> `block-name--modifier-name`或者`block-name__element-name--modifier-name`.

### Modifier的分类
#### 1.布尔类型
- 当只有修饰符的存在与否很重要，而其值无关紧要时使用。例如，`disabled` 、`actived`。如果存在布尔修饰符，则假定其值为真。
- 命名规范遵循
>block-name_modifier-name

>block-name__element-name_modifier-name
#### 例子
```html
<!-- The `search-form` block has the `focused` Boolean modifier -->
<form class="search-form search-form_focused">
    <input class="search-form__input">

    <!-- The `button` element has the `disabled` Boolean modifier -->
    <button class="search-form__button search-form__button_disabled">Search</button>
</form>
```
建议：
```html
<!-- The `search-form` block has the `focused` Boolean modifier -->
<form class="search-form search-form--focused">
    <input class="search-form__input">

    <!-- The `button` element has the `disabled` Boolean modifier -->
    <button class="search-form__button search-form__button--disabled">Search</button>
</form>
```

#### 2.Key--Value类型
- 当修饰符值很重要时使用。例如，“主题为黑色的menu”：`menu--theme_black`。
- 命名规范遵循
>block-name_modifier-name_modifier-value

>block-name__element-name_modifier-name_modifier-value
#### 例子
```html
<!-- The `search-form` block has the `theme` modifier with the value `black` -->
<form class="search-form search-form_theme_black">
    <input class="search-form__input">

    <!-- The `button` element has the `size` modifier with the value `m` -->
    <button class="search-form__button search-form__button_size_m">Search</button>
</form>

<!-- 您不能同时使用具有不同值的两个相同修饰符-->
<form class="search-form
             search-form_theme_black
             search-form_theme_white">

    <input class="search-form__input">

    <button class="search-form__button
                   search-form__button_size_s
                   search-form__button_size_m">
        Search
    </button>
</form>

</form>
```
建议：
```html
<!-- The `search-form` block has the `theme` modifier with the value `black` -->
<form class="search-form search-form--theme_black">
    <input class="search-form__input">

    <!-- The `button` element has the `size` modifier with the value `m` -->
    <button class="search-form__button search-form__button--size_m">Search</button>
</form>

<!-- 您不能同时使用具有不同值的两个相同修饰符-->
<form class="search-form
             search-form_theme_black
             search-form_theme_white">

    <input class="search-form__input">

    <button class="search-form__button
                   search-form__button_size_s
                   search-form__button_size_m">
        Search
    </button>
</form>
```
###  Modifier使用指南
#### 不能脱离Block或者Element独立使用
-从BEM的规范来看，一个修改器不能与被修改的块或元素分开使用。一个修改器只是改变了实体(Block或者Element)的外观、行为或状态，而不是替换它。
##### 例子
```html
<!--
    Correct. The `search-form` block has the `theme` modifier with
    the value `islands`
-->
<form class="search-form search-form_theme_islands">
    <input class="search-form__input">

    <button class="search-form__button">Search</button>
</form>

<!-- Incorrect. The modified class `search-form` is missing -->
<form class="search-form_theme_islands">
    <input class="search-form__input">

    <button class="search-form__button">Search</button>
</form>
```
## :paperclip: Mix
一种在单个DOM节点上使用不同BEM实体的技术。

### 特点
>Mix允许你结合多个实体(样式块)的行为和风格，而无需重复编写代码。
>Mix可以实现在现有的UI组件(样式块)基础上创建新的UI组件(样式块)。

### 例子
```html
<div class="header">
    <!--
        The `search-form` block is mixed with the `search-form` element
        from the `header` block
    -->
    <div class="search-form header__search-form"></div>
</div>
```
在这个例子中，我们结合了 search-form 块和来自 header 块的 search-form 元素的行为和样式。这种方法允许我们在 header__search-form 元素中设置外部几何属性(margin)和定位，而 search-form 块本身保持通用。因此，我们可以在任何其他环境中使用该块，因为它没有指定任何填充(margin)。这就是为什么我们可以称其为独立的原因。