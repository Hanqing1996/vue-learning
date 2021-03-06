#### 父子组件通信 
* 父组件向子组件传递数据
```
<child :childProp="fatherProp"></child>
// 要求child内部有对于childProp的定义(prop或data里)
```
* 子组件向父组件传递数据
```
子组件.$emit(father-event)+父组件.v-on:father-event
```

#### Vue实例与组件的区别
1. 
```
<span id="app">
    <div id="idValue"></div>
<span>

 var vm = new Vue({
        el: "#app",
        data: {
        },
    })
```
 能正常渲染，渲染结果为
```
 <span id="idValue"><span>
```
2. 
```
<div id="app">
    <child id="idValue"></child>
</div>

Vue.component('child', {
    data: function () {
        return {
        }
    },
    template: '<span></span>',
})

new Vue({
    el: '#app',
    data: {
    }
})
```
能正常渲染，渲染结果为
```
<span id="idValue"><span>
```
3. 
```
    <div id="app">
        <child>somt thing</child>
    </div>

    Vue.component('child', {
        data: function () {
            return {
            }
        },
        template: '<div></div>',
        })

    new Vue({
        el: '#app',
        data: {
        }
    })
```
不能正常渲染，看不见"somt thing"，因为template里面没有放置插槽
4. 
```
    <div id="app">
        <child></child>
    </div>

    Vue.component('child', {
        data: function () {
            return {
            }
        },
        template: '<div><slot>defalut content</slot></div>',
    })

    new Vue({
        el: '#app',
        data: {
        }
    })
```
看见"defalut content",因为没有在组件child外部提供插槽内容，故使用后备内容"defalut content"
5. 
```
    <div id="app">
        <child>some thing</child>
    </div>

    Vue.component('child', {
        data: function () {
            return {
            }
        },
        template: '<div><slot>defalut content</slot></div>',
    })

    new Vue({
        el: '#app',
        data: {
        }
    })
```
看见"somt thing",因为template里面有放置插槽,注意"something"的优先级高于作为后备内容的"defalut content"
6. 
```
    <div id="app">
        <span id="idValue">somt thing</span>
    </div>

    new Vue({
        el: '#app',
        data: {
        }
    })
```
能正常渲染，看见"somt thing"

#### [vue风格指南](https://cn.vuejs.org/v2/style-guide/)
* 自闭合组件
* 

#### [安装与介绍](https://github.com/Hanqing1996/vue-learning/tree/master/Vue%20%E5%AE%89%E8%A3%85%20%26%20%E4%BB%8B%E7%BB%8D)
* [Vue 不支持 IE8 及以下版本](https://cn.vuejs.org/v2/guide/installation.html)
* vue2.5的构建版本
* 运行时 + 编译器 vs. 只包含运行时

#### [计算属性和侦听器](https://github.com/Hanqing1996/vue-learning/tree/master/%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E5%92%8C%E4%BE%A6%E5%90%AC%E5%99%A8)
* 计算属性的典型用法]
* 计算属性缓存 vs 方法
* 计算属性 vs 侦听属性
* watch
* vm.$watch(expOrFn,callback,[options])
 
#### [Vue 实例 & 模板语法](https://github.com/Hanqing1996/vue-learning/tree/master/Vue%20%E5%AE%9E%E4%BE%8B%20%26%20%E6%A8%A1%E6%9D%BF%E8%AF%AD%E6%B3%95)
* 在组件外部使用v-bind绑定的属性
```
<div id="app">
    <child :id="oneValueIndata"></child>
</div>
```
* 在组件内部使用v-bind绑定的属性
```
     Vue.component('child', {
        data: function () {
            return {
                count: 0
            }
        },
        template: '<div v-bind:id="componentId">something</div>',
    })
```
* [var vm = new Vue(options),options可以包含哪些 key？](https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E6%95%B0%E6%8D%AE) 
* [实例的生命周期钩子不要写成箭头函数,为什么？](https://cn.vuejs.org/v2/guide/instance.html#%E5%AE%9E%E4%BE%8B%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90)
* vue实例的data属性
* 不在data中声明的属性如何更新视图
* bind绑定的是属性（key,title,style,class），而非数据。
* v-bind的几种等价写法
* 父组件向子组件传值
* v-bind绑定data里声明的属性
* 在子组件外部中使用v-bind绑定的属性必须在父组件的data对象中声明（或者用父组件的[propsData](https://cn.vuejs.org/v2/api/#propsData)）
* 组件外部的v-bind与组件内部的v-bind

#### [Class 与 Style 绑定 & 条件渲染](https://github.com/Hanqing1996/vue-learning/tree/master/Class%20%E4%B8%8E%20Style%20%E7%BB%91%E5%AE%9A%20%26%20%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93)
* [使用v-bind绑定class与style](https://cn.vuejs.org/v2/guide/class-and-style.html)
* v-if和v-show的区别

#### [列表渲染 & 事件处理](https://github.com/Hanqing1996/vue-learning/tree/master/%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93%20%26%20%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86)
* v-for
* key
* 在组件中使用v-for(is怎么用)
* $event

#### [表单输入绑定 & 组件基础](https://github.com/Hanqing1996/vue-learning/tree/master/%E8%A1%A8%E5%8D%95%E8%BE%93%E5%85%A5%E7%BB%91%E5%AE%9A%20%26%20%E7%BB%84%E4%BB%B6%E5%9F%BA%E7%A1%80)
* HTML表单元素知识补充
* v-model怎么用
* 单选按钮(radio)
* 复选框(checkbox)
* 选择框(option)
* v-model语法糖原理
* v-model 用到自定义组件上
* 全局注册组件
* $emit：实现子组件向父组件传递数据
* 动态组件：使component在不同组件之间进行动态切换

#### [组件注册 & Prop](https://github.com/Hanqing1996/vue-learning/tree/master/%E7%BB%84%E4%BB%B6%E6%B3%A8%E5%86%8C%20%26%20Prop)
* Prop 的大小写
* title="number"与v-bind:title="number"的区别
* 传入一个布尔量
* 传入一个对象的所有属性
* 替换/合并已有的特性（从外部提供给组件的值vs组件内部设置好的值）


#### [自定义事件 & 插槽 & 动态组件 & 异步组件](https://github.com/Hanqing1996/vue-learning/tree/master/%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BA%8B%E4%BB%B6%20%26%20%E6%8F%92%E6%A7%BD%20%26%20%E5%8A%A8%E6%80%81%E7%BB%84%E4%BB%B6%20%26%20%E5%BC%82%E6%AD%A5%E7%BB%84%E4%BB%B6)
* 事件名的大小写
* slot怎么用
* .sync 修饰符：用于实现子组件更新父组件的props
* .sync语法糖原理
* 如果 <navigation-link> 没有包含一个 <slot> 元素，则该组件起始标签和结束标签之间的任何内容都会被抛弃。
* [使用具名插槽 <slot name="xxx'> 可以实现一个组件拥有多个插槽](https://cn.vuejs.org/v2/guide/components-slots.html#%E5%85%B7%E5%90%8D%E6%8F%92%E6%A7%BD%E7%9A%84%E7%BC%A9%E5%86%99)
* 可以使用 <slot>默认内容</slot> 来指定插槽里的默认内容
* 具名插槽:在一个组件中放入多个插槽
* vm.$slots(unresolved)






