#### [vue2.5的构建版本](https://xiedaimala.com/tasks/ac386daf-a72d-410e-9347-5fe6ed8e967a/quizzes/cb843243-dbba-4b52-b4de-a98452ec6e0d)
 * 完整版：一个同时包含编译器和运行时的版本（简称为完整版）
 * 编译器：一个只包含运行时的版本
 * 运行时：一个只包含编译器的版本

#### [运行时 + 编译器 vs. 只包含运行时](https://cn.vuejs.org/v2/guide/installation.html#%E8%BF%90%E8%A1%8C%E6%97%B6-%E7%BC%96%E8%AF%91%E5%99%A8-vs-%E5%8F%AA%E5%8C%85%E5%90%AB%E8%BF%90%E8%A1%8C%E6%97%B6)
* 如果你需要在客户端编译模板 (比如传入一个字符串给 template 选项，或挂载到一个元素上并以其 DOM 内部的 HTML 作为模板)，就将需要加上编译器，即完整版
* 当使用 vue-loader 或 vueify 的时候，*.vue 文件内部的模板会在构建时预编译成 JavaScript。你在最终打好的包里实际上是不需要编译器的，所以只用运行时版本即可。
* 运行时版本相比完整版体积要小约 30%

#### [vue实例的data属性](https://cn.vuejs.org/v2/guide/instance.html#%E6%95%B0%E6%8D%AE%E4%B8%8E%E6%96%B9%E6%B3%95)
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
#### [不在data中声明的属性如何更新视图]
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

