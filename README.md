#### [计算属性](https://cn.vuejs.org/v2/guide/computed.html#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E7%BC%93%E5%AD%98-vs-%E6%96%B9%E6%B3%95)
1. 我们可以将同一函数定义为一个方法而不是一个计算属性。两种方式的最终结果确实是完全相同的。然而，不同的是计算属性是基于它们的响应式依赖进行缓存的。只在相关响应式依赖发生改变时它们才会重新求值。这就意味着只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果（缓存），而不必再次执行函数。(重点：没有再次执行函数！)
2. [methods和computed的区别](https://xiedaimala.com/tasks/739a1661-e5b5-4734-ac53-eb277f1a905f/quizzes/7f8086f9-5cd5-4a72-b58d-a79bb8e2e6ff)
答案:1 3

#### [watch](https://cn.vuejs.org/v2/api/#watch)
1. a的变化导致b的变化
``` 
var vm = new Vue({
  data: {
    a: 1,
    b: 2,
  },
  watch: {

    // oldVal为a变化前的值，val为a变化后的值
    a: function (val, oldVal) {
        
        // b在a变化后随之变化
        this.b=val
    },
```    
2. [测试题1](https://xiedaimala.com/tasks/739a1661-e5b5-4734-ac53-eb277f1a905f/quizzes/7f8086f9-5cd5-4a72-b58d-a79bb8e2e6ff)
答案:4
3. [测试题2](https://xiedaimala.com/tasks/739a1661-e5b5-4734-ac53-eb277f1a905f/quizzes/7f8086f9-5cd5-4a72-b58d-a79bb8e2e6ff)
答案: 'obj.count':function(){

#### [v-bind](https://cn.vuejs.org/v2/guide/#%E5%A3%B0%E6%98%8E%E5%BC%8F%E6%B8%B2%E6%9F%93)
下面几种写法等价
```
:title="message"

v-bind:title="message"

:title=message

v-bind:title=message
```

#### [v-if和v-show的区别](https://cn.vuejs.org/v2/guide/conditional.html#v-if-vs-v-show)
* 用户看不见该 p 元素是因为该 p 元素没有出现在 DOM 结构中
```
    <div id="app-3">
        <p v-if="seen">现在你看到我了</p>
    </div>

        var app3 = new Vue({
        el: '#app-3',
        data: {
            seen: false
        }
    })
```
* 用户看不见该 p 元素是因为该 p 元素的 display 为 none
```
    <div id="app-3">
        <p v-show="seen">现在你看到我了</p>
    </div>

        var app3 = new Vue({
        el: '#app-3',
        data: {
            seen: false
        }
    })
```

#### [v-for](https://cn.vuejs.org/v2/guide/list.html)
下面几种写法等价
```
<div v-for="item of items"></div>

<div v-for="item in items"></div>
```
#### [Vue 不支持 IE8 及以下版本](https://cn.vuejs.org/v2/guide/installation.html)

#### [vue2.5的构建版本](https://xiedaimala.com/tasks/ac386daf-a72d-410e-9347-5fe6ed8e967a/quizzes/cb843243-dbba-4b52-b4de-a98452ec6e0d)
 * 完整版：一个同时包含编译器和运行时的版本（简称为完整版）
 * 编译器：一个只包含运行时的版本
 * 运行时：一个只包含编译器的版本

#### [运行时 + 编译器 vs. 只包含运行时](https://cn.vuejs.org/v2/guide/installation.html#%E8%BF%90%E8%A1%8C%E6%97%B6-%E7%BC%96%E8%AF%91%E5%99%A8-vs-%E5%8F%AA%E5%8C%85%E5%90%AB%E8%BF%90%E8%A1%8C%E6%97%B6)
* 如果你需要在客户端编译模板 (比如传入一个字符串给 template 选项，或挂载到一个元素上并以其 DOM 内部的 HTML 作为模板)，就将需要加上编译器，即完整版
* 当使用 vue-loader 或 vueify 的时候，*.vue 文件内部的模板会在构建时预编译成 JavaScript。你在最终打好的包里实际上是不需要编译器的，所以只用运行时版本即可。
* 运行时版本相比完整版体积要小约 30%

#### [var vm = new Vue(options),options可以包含哪些 key？](https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E6%95%B0%E6%8D%AE) 

#### [响应式更新](https://cn.vuejs.org/v2/guide/instance.html#%E6%95%B0%E6%8D%AE%E4%B8%8E%E6%96%B9%E6%B3%95)
* 一开始就写入data的属性,之后修改该属性会引起视图的更新
```
data={
    a:'a1'
}

data.a='a2' // 视图会随之更新
```
* 一开始未写入data的属性,之后修改该属性不会引起视图的更新
```
data={
    a:'a1'
}

data.b='b2' // 视图不会有任何改变
```
#### 如何实现：修改不在data中声明的属性来更新视图?
```
<div id="app">
    <span class=span-a>
        {{obj.a}}
    </span>
    <span class=span-b>
        {{obj.b}}
    </span>
</div>

var app = new Vue({
    el: '#app',
    data: {
        obj: {
            a: 'a',
        }
    },
})
```
1. [通过修改obj.a顺便更新obj.b](https://www.zhihu.com/search?q=%E6%96%B9%E5%BA%94%E6%9D%AD%20vue%E8%87%AA%E6%B5%8B%E9%A2%98&type=content)
```
app.obj.a='a2';
app.obj.b='b2';
```
2. [Vue.set(app.obj, 'b', 2)](https://cn.vuejs.org/v2/guide/reactivity.html#%E6%A3%80%E6%B5%8B%E5%8F%98%E5%8C%96%E7%9A%84%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9)

#### [实例的生命周期钩子不要写成箭头函数,为什么？](https://cn.vuejs.org/v2/guide/instance.html#%E5%AE%9E%E4%BE%8B%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90)
![1](/source/lifecycle.png)



