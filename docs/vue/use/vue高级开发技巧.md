 # :green_book: vue高级开发技巧
 
 - [ ] 1.在v-for中使用函数
 - [ ] 2.使用Object.assign进行多个响应式属性赋值
 - [ ] 3.使用修饰符.passive提升移动端性能
 - [ ] 4.使用inheritAttrs:false禁止属性集成，但是不影响class和style的合并
 - [ ] 5.使用@hook:生命周期来优化代码，增加可维护性
 - [ ] 6.小型项目采用vue2.6提供的新API Vue.observable手动打造一个小型Vuex
 - [ ] 7.使用Vue.extend开发一些全局组件比如Loading,Notify,Message等组件，进行手动挂载
 - [ ] 8.使用自定义指令让组件更灵活
 - [ ] 9.使用$watch函数随时监听，随时取消
 - [ ] 10.对于纯展示型组件采用函数式组件提升性能
 - [ ] 11.小型项目使用$bus进行通讯
 - [ ] 12.自定义封装v-model组件
 - [ ] 13.作用于插槽的使用
 - [ ] 14.vue对于长列表渲染的性能优化
 - [ ] 15.watch监听多个data
 - [ ] 16.解耦路由参数
 - [ ] 17.巧用作用域插槽
 - [ ] 18.vue列表的动画效果
 - [ ] 19.在对组件进行二次封装时，可以使用$attrs实现属性透传
 - [ ] 20.动态组件如何实现属性透传
 - [ ] 21.动态指令参数—>我们可以动态的为一个元素绑定不同的事件
 - [ ] 22.CSS scoded 和深度作用选择器
 - [ ] 23.使用v-cloak解决页面闪烁问题
 - [ ] 24.v-once 和 v-pre 提升性能
 - [ ] 25.在template中打log
 - [ ] 26.自定义prop的校验器
 - [ ] 27.巧用es6的解构赋值简化vue代码
 - [ ] 28.怎样在vue中使用jsx
 - [ ] 29.怎样解决路由参数变化组件不更新的问题
 - [ ] 30.vue中路由懒加载的3种方式
 - [ ]31.使用.sync来简化父子组件的通讯

## :paperclip: 1.在v-for中使用函数

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200914163109526.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)

## :paperclip: 2.使用Object.assign进行多个响应式属性赋值
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200914164125604.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
## :paperclip: 3.使用修饰符.passive提升移动端性能
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200914164247304.png#pic_center)
## :paperclip: 4.使用inheritAttrs:false禁止属性集成，但是不影响class和style的合并
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200914164444484.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
## :paperclip: 5.使用@hook:生命周期来优化代码，增加可维护性

- 将绑定监听函数和解绑监听函数写到同一个钩子中，便于维护
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200914165015412.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
- 在组件外部监听组件的生命周期，而不需要改动组件逻辑
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200914165347346.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
## :paperclip: 6.小型项目采用vue2.6提供的新API Vue.observable手动打造一个小型Vuex
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200914170857901.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200914170905982.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
## :paperclip: 7.使用Vue.extend开发一些全局组件比如Loading,Notify,Message等组件，进行手动挂载
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200914171237891.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200914171307789.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200914171330758.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200914171347998.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200914171411803.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200914171432498.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200914171453884.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
## :paperclip: 8.使用自定义指令让组件更灵活
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200914171643513.png#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200914171912617.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200914171927779.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)

```vue
import Vue from 'vue'
import LoadingComponent from './loading'
// 使用 Vue.extend构造组件子类
const LoadingContructor = Vue.extend(LoadingComponent)

// 定义一个名为loading的指令
Vue.directive('loading', {
  /**
   * 只调用一次，在指令第一次绑定到元素时调用，可以在这里做一些初始化的设置
   * @param {*} el 指令要绑定的元素
   * @param {*} binding 指令传入的信息，包括 {name:'指令名称', value: '指令绑定的值',arg: '指令参数 v-bind:text 对应 text'}
   */
  bind(el, binding) {
    const instance = new LoadingContructor({
      el: document.createElement('div'),
      data: {}
    })
    el.appendChild(instance.$el)
    el.instance = instance
    Vue.nextTick(() => {
      el.instance.visible = binding.value
    })
  },
  /**
   * 所在组件的 VNode 更新时调用
   * @param {*} el
   * @param {*} binding
   */
  update(el, binding) {
    // 通过对比值的变化判断loading是否显示
    if (binding.oldValue !== binding.value) {
      el.instance.visible = binding.value
    }
  },
  /**
   * 只调用一次，在 指令与元素解绑时调用
   * @param {*} el
   */
  unbind(el) {
    const mask = el.instance.$el
    if (mask.parentNode) {
      mask.parentNode.removeChild(mask)
    }
    el.instance.$destroy()
    el.instance = undefined
  }
})

```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200914171842566.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
## :paperclip: 9.使用$watch函数随时监听，随时取消
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200914172423987.png#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200914172502105.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200914172521171.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
## :paperclip: 10.对于纯展示型组件采用函数式组件提升性能
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200914172741612.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200914172804981.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200914172826348.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)

## :paperclip: 11.小型项目使用$bus进行通讯
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200914173150913.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200914173218233.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
## :paperclip: 12.自定义封装v-model组件

一个组件上的 v-model 默认会利用名为 value 的 prop 和名为 input 的事件，但是像单选框、复选框等类型的输入控件可能会将 value attribute 用于不同的目的。model 选项可以用来避免这样的冲突：
```vue
<template>
  <div class="amir--select">
    <select
      :value="selected"
      class="amir--select__item"
      :disabled="readonly"
      @change="emitChange($event.target.value)"
    >
      <template v-for="(item,index) in selectData">
        <option
          :key="index"
          :value="item.value"
        >
          {{ item.text }}
        </option>
      </template>
    </select>
  </div>
</template>

<script>
export default {
  name: 'ASelect',
  model: {
    prop: 'selected', //指定value的别名
    event: 'change' //指定input事件的别名
  },
  props: {
    selectData: {
      type: Array
    },
    readonly: {
      type: Boolean,
      default: false
    },
    selected: {
      type: [String, Number]
    }
  },
  methods: {
    emitChange (value) {
      this.$emit('change', value)
    }
  }
}
</script>

<style lang="less">
</style>

```
## :paperclip: 13.作用于插槽的使用
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200914183910396.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200914183936408.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
## :paperclip: 14.vue对于长列表渲染的性能优化
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200914184215118.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
## :paperclip: 15.watch监听多个data
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200914184630766.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
## :paperclip: 16.解耦路由参数
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200914184837863.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200914190916909.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
## :paperclip: 17.巧用作用域插槽
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200917171334849.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200917171355364.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
## :paperclip: 18.vue列表的动画效果
[源代码](https://github.com/itlixiaolong/good_good_study)

## :paperclip: 19.在对组件进行二次封装时，可以使用$attrs实现属性透传
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200917172527846.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200917172543822.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200917172609336.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200917172630943.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
## :paperclip: 20.动态组件如何实现属性透传

config.vue--->动态渲染组件的父级容器

```vue
<template>
  <div class="hello">
    <div v-for="(config, index) in configJsonArr" :key="config.type + index">
      <!-- <component :is="config.type" :configProps="config.props"></component> -->
      <comp-form-item :configJson="config"></comp-form-item>
    </div>
  </div>
</template>

<script>
import Input from './Input'
import Select from './Select'

const CompFormItem = {
  components: {
    Input, Select
  },
  name: 'FormItem',
  props: {
    configJson: {
      required: true
    }
  },
  render (h) {
    return h(`${this.configJson.type}`, {
      props: {
        ...this.configJson.props || {}
      },
      attrs: {
        ...this.configJson.props || {}
      }
    })
  }
}

export default {
  name: 'Config',
  components: {
    // Input,
    // Select,
    CompFormItem
  },
  props: {
    configJsonArr: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

```
Input.vue---->第一个动态组件

```vue
<template>
  <div class="hello input-con">
    <label>输入框：</label>
    <el-input v-bind="$attrs"></el-input>
  </div>
</template>

<script>
export default {
  name: 'Input'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.input-con {
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  label {
    width: 200px;
  }
}
</style>

```
Select.vue--->第二个动态组件

```vue
<template>
  <div class="hello select-con">
    <label>选择框：</label>
    <el-select v-bind="$attrs" v-model="value"></el-select>
  </div>
</template>

<script>
export default {
  name: 'Select',
  data () {
    return {
      value: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.select-con {
  margin: 20px;
  display: flex;
  align-items: center;
  label {
    width: 170px;
  }
}
</style>

```
## :paperclip: 21.动态指令参数--->我们可以动态的为一个元素绑定不同的事件
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200917173556523.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
## :paperclip: 22.CSS scoded 和深度作用选择器
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200917173818853.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200917173837212.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
## :paperclip: 23.使用v-cloak解决页面闪烁问题
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200917174020142.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
## :paperclip: 24.v-once 和 v-pre 提升性能
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200917174055875.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
## :paperclip: 25.在template中打log(控制台可以查看结果)
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020091717434754.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
**也可以使用```<pre>{{data}}</pre>```标签将数据显示到页面上**

## :paperclip: 26.自定义prop的校验器
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200917182936226.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
## :paperclip: 27.巧用es6的解构赋值简化vue代码
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200917183158904.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200917183214198.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
## :paperclip: 28.怎样在vue中使用jsx

[babel配置链接](https://github.com/vuejs/jsx)

[官方使用文档](https://cn.vuejs.org/v2/guide/render-function.html#JSX)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200917184520661.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200917184548640.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200917184638384.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200917184724780.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
对比渲染函数和jsx，以下两幅图是等价的

### 1.渲染函数
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200917185231654.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
### 2.jsx
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200917185315582.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)
## :paperclip: 29.怎样解决路由参数变化组件不更新的问题

同一path的页面跳转时路由参数变化，但是组件没有对应的更新。

原因：主要是因为获取参数写在了created或者mounted路由钩子函数中，路由参数变化的时候，这个生命周期不会重新执行。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201223171617812.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201223171633403.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)
## :paperclip: 30.vue中路由懒加载的3种方式
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020122317175198.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)

## :paperclip: 31.使用.sync来简化父子组件的通讯
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200914164723632.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70#pic_center)