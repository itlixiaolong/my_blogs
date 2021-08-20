# :green_book: vue单元测试常见问题及及解决方案

## :paperclip: 1.document原生方法注册
问题：单元测试环境下无法获取document方法
例：document.getElementById
解决方案：jest.spyOn().mockImplementation()


![在这里插入图片描述](https://img-blog.csdnimg.cn/b8c4c42cd5eb4a6689e838b767561d33.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)


## :paperclip: 2.window自定义属性注册
问题：单元测试环境下无法获取所有window属性
例：window.zhuge.方法名（失效）

![在这里插入图片描述](https://img-blog.csdnimg.cn/63ad311338944d8681c2df3483214ef3.png)

解决方案：jest.spyOn().mockImplementation()
![在这里插入图片描述](https://img-blog.csdnimg.cn/fe1548534aa54f67bead50f4d709cff6.png)

## :paperclip: 3.element-ui等外接组件注册
问题:单元测试环境下无法识别除vue框架本身的组件
例：调用element-ui
解决方案：
![在这里插入图片描述](https://img-blog.csdnimg.cn/805d3716e7f34e8b93fa815c7ecc3ea8.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)


注意要将注册组件的函数挂载到wrapper当中
![在这里插入图片描述](https://img-blog.csdnimg.cn/d1c2d0d7f13640d5a70d29f55e1cfbd2.png)

## :paperclip: 4.纯展示外部组件替换渲染方式
![在这里插入图片描述](https://img-blog.csdnimg.cn/41d3fcf6370c437cbd7607e81455507a.png)


## :paperclip: 5.wrapper.find()方法踩坑
使用wrapper.find()方法获取dom对象时，此方法优先获取wrapper实例中render()函数中返回的结构，如果render()返回中不存在对应dom，则会导致wrapper.find()返回ErrorWrapper
例：
![在这里插入图片描述](https://img-blog.csdnimg.cn/843dd18f47c24a088d00dc9ee27d229a.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)


## :paperclip: 6.对于第三方组件的逻辑测试,如elementui
![在这里插入图片描述](https://img-blog.csdnimg.cn/77cb57c31c294422a4eccf10eed1da19.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)

对于find和findAll找到的元素统一使用trigger触发事件
对于findComponent和findAllComponents找到的组件统一使用wrapper.vm.$emit()触发事件


方法一:
对于el-开头的组件使用mount渲染,可以使用find找到根节点元素,然后通过trigger触发事件或者使用findComponentd找到组件,然后通过wrapper.vm.$emit()触发事件

![在这里插入图片描述](https://img-blog.csdnimg.cn/2ebe44272e484b67879c53de95fcc4f7.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)

如果想stub掉某个子组件,测试它触发的事件,必须使用find或者findAll获取元素,然后使用wrapper.vm.$emit()触发
![在这里插入图片描述](https://img-blog.csdnimg.cn/193c1fa0e1d64a08aa605cf66c1a66a6.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)


方法二:
对于el-开头的组件使用shallowMount渲染,需要借用localVue将el组件注入,shallowMount会自动将组件stub,这时只能使用findComponentd找到组件,然后通过wrapper.vm.$emit()触发事件

![在这里插入图片描述](https://img-blog.csdnimg.cn/3a8c41c90045447b89514ad84b6c8e5c.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)




## :paperclip: 7.对于引入node_modules依赖的报错

![在这里插入图片描述](https://img-blog.csdnimg.cn/594c7f51dcff4d619ed023045f70a119.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)

可以通过配置jest.config.js来解决


![在这里插入图片描述](https://img-blog.csdnimg.cn/680aab3426504075b57f21751cfd5cd9.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlhb2xvbmcyNDAwMzU=,size_16,color_FFFFFF,t_70)

