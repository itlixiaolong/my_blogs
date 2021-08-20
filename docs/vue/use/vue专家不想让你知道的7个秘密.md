# :green_book: vue专家不想让你知道的7个秘密

## :paperclip: 1.聪明的watch

>有一种业务场景我们会在组件created的时候根据某个数据去请求接口,之后我们监听这个数据,改变后重新请求数据,我们很容易写出下面的代码
```js
 watch: {
    searchText () {
      this.fetchUserList()
    }
  },
  created () {
    this.fetchUserList()
  }
```
>优化后
```js
created() {
 this.fetchUserList()
},
watch: {
searchText fetchUserList
}
```
>再优化
```js
  watch: {
    searchText: {
      handler: 'fetchUserList',
      immediate: true
    }
  }
```
## :paperclip: 2.批量组件注册
>当我们使用我们的基础组件完成某个业务场景开发时,我们通常会在一个组件中使用多个基础组件,我们很容易写出底下的代码,我们使用了如此多的js知识为了完成如此小的一个模板组件的编写,如果其他的组件也有类似的引用,这会造成更多重复的代码
```js
<template>
  <div class="test">
    <BaseInput
      v-model="searchText"
      @keydown.enter="search"
    />
    <BaseButton @click="search">
      <BaseIcon name="search" />
    </BaseButton>
  </div>
</template>

<script>
import BaseButton from './base-button'
import BaseIcon from './base-icon'
import BaseInput from './base-input'
export default {
  components: {
    BaseButton,
    BaseIcon,
    BaseInput
  }
}
</script>
```
>优化后
```js
import Vue from 'vue'
import upperFirst from 'lodash/upperFirst' 
import camelCase from 'lodash/camelCase'
// Require in a base component context
const requireComponent = require.context( '.', false, /base-[\w-]+\.vue$/)

requireComponent.keys().forEach(fileName => {
	// Get component config
	const componentConfig = requireComponent(fileName)
	  // Get PascalCase name of component
	const componentName = upperFirst( camelCase(fileName.replace(/^\.\//,'').replace(/\.\w+$/, ''))
	)
	  // Register component globally
	Vue.component(componentName, componentConfig.default || componentConfig) 
})
```
说明: componentConfig是针对没有script的组件,有script的组件默认导出的内容会挂载到default属性上,没有script组件,默认会挂载到componentConfig下面(目前测试来看是没有区别的)

> 此方法的应用场景是:基础的供多个组件复用的基础组件,由于批量全局注册,有可能会导致一些没有使用的组件也被注册,这会引起公用的bundle变大,牺牲性能,请根据需要使用
## :paperclip: 3.批量导入vuex中的module
>当我们使用vuex时,有时我们可能会有很多的module需要导入到store中,这时我们可能写出下图的代码
```js

import auth from './modules/auth'
import posts from './modules/posts' 
import comments from './modules/comments'
import // ...

export default new Vuex.Store({ 
	modules: {
		auth, 
		posts, 
		comments, // ...
	}
})
```
>优化后
```js
import camelCase from 'lodash/camelCase'
const requireModule = require.context('.', false, /\.js$/) 
const modules = {}
requireModule.keys().forEach(fileName => {
// Don't register this file as a Vuex module 
	if (fileName === './index.js') return
	const moduleName = camelCase( fileName.replace(/(\.\/|\.js)/g, ''))
	modules[moduleName] = requireModule(fileName)
 })
export default modules
```
>如果需要为每个模块加入命名空间,可以再次优化
```js
import camelCase from 'lodash/camelCase'
const requireModule = require.context('.', false, /\.js$/)
 const modules = {}
requireModule.keys().forEach(fileName => {
	// Don't register this file as a Vuex module 
	if (fileName === './index.js') return
	const moduleName = camelCase( fileName.replace(/(\.\/|\.js)/g, ''))
	modules[moduleName] = {
		namespaced: true, 
		...requireModule(fileName),
	}
 })
export default modules
```
>这时我们就可简写上面的代码
```js
import modules from './modules'
export default new Vuex.Store({
 modules
})
```
## :paperclip:4.干净的view视图
> 当我们需要根据路由中某个参数去请求数据时,当参数变化,由于激活的是同一个组件,这时vue本着复用的原则,会使用上次的组件,不会销毁重建,就需要我们监听路由的变化,手动更新数据,我们会很自然的写出如下的代码
```js
data() {
  return {
    loading: false,
    error: null,
    post: null
  }
},
watch: { 
'$route': {
	handler: 'resetData',
    immediate: true
  }
}, 
methods: {
  resetData() {
	this.loading = false
	this.error = null
	this.post = null this.getPost(this.$route.params.id)
 },
  getPost(postId) {
	// ...
  } 
}
```
>优化后
```js
data() {
  return {
      loading: false,
      error: null,
      post: null
  } 
},
created () {
 this.getPost(this.$route.params.id)
},
methods: {
  getPost(postId) { 
    // ...
  }
}

```
> 但是需要让<router-view></router-view>配合使用
```js
<router-view :key="$route.fullPath"></router-view>
```
## :paperclip: 5.属性透传
>我们有一个input组件,叫```<BaseInput/>```
```js
 <template>
   <input
	:value="value"
	@input="$emit('input', $event.target.value)" >
</template>
```
>由于业务需要我们对这个组件进行了二次封装
```js
 <template>
   <label>
	{{ label }}
	<input
	  :value="value"
	  @input="$emit('input', $event.target.value)"> 
  </label>
</template>
```
>这时外部传入的自定义事件
```js
<BaseInput @focus.native="doSomething">
```
>这时的focus事件绑定的就是label元素,而不是input,从而导致组件故障
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021012716372391.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)
>如果我们的需求又变了,我们传入了更多的属性
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210127163823235.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)
>这时候placeholder作用的便签是label而不是input,从而再次引发bug,我们可以通过如下方式解决
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210127163937771.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)
## :paperclip: 6.解锁可能性
### 6-1:多个根节点组件
>假设我们有一个菜单组件,根元素是是一个ul标签,子元素是li,我们可能会想下面这样设计
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210127172540279.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)
>这时候子组件中的li在通过循环产生每一条导航项,这就违背了vue中关于每一个组件都应该有一个根节点包裹的原则,这时我们可以通过如下方式解决
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210127172739190.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)
### 6-2:渲染没有html的组件
>我们有一个地图组件是由webGL渲染的,没有任何的html组成,但是我们希望可以引入我们的vue项目中,它基础的api如下所示
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210127173055609.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)
>我们最终实现出了下面的组件
![](https://img-blog.csdnimg.cn/20210127173152715.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)
> 其中Mapboxmarkers组件不会渲染任何dom
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210127174406422.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)
>其中针对我门自定义的内容我们可以使用作用域插槽来获取实际渲染的内容,在这个实例中插槽渲染的是地图的marker,支持自定义富文本
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210127174728685.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)
