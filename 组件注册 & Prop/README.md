#### Prop 的大小写
```
    <div id="app">

        <!-- 这里的prop用下划线命名法 -->
        <blog-post v-bind:prop-a="number"></blog-post>

    </div>

    Vue.component('blog-post', {
        template: '<div>hh</div>'
    })

    new Vue({
        props: ['propA'], // 这里的prop用驼峰命名法
        el: '#app',
        data: {
            number: 1
        }
    })
```

#### title="number"与v-bind:title="number"的区别
* title="number":绑定的prop是静态数据
```
    <div id="app">
        <blog-post title="number"></blog-post>
    </div>

    Vue.component('blog-post', {
        props: ['title'],
        template: '<div>{{title}}</div>'
    })

    new Vue({
        el: '#app',
        data: {
            number: 1
        }
    })
```
渲染结果
```
<div>number</div>
```
* v-bind:title="number":绑定的prop是动态数据
```
    <div id="app">
        <blog-post v-bind:title="number"></blog-post>
    </div>

    Vue.component('blog-post', {
        props: ['title'],
        template: '<div>{{title}}</div>'
    })

    new Vue({
        el: '#app',
        data: {
            number: 1
        }
    })
```
渲染结果
```
<div>1</div>
```

#### [传入一个布尔量](https://cn.vuejs.org/v2/guide/components-props.html#%E4%BC%A0%E5%85%A5%E4%B8%80%E4%B8%AA%E5%B8%83%E5%B0%94%E5%80%BC)
包含该 prop 没有值的情况在内，都意味着 `true`
```
    <div id="app">
        <blog-post published></blog-post>
    </div>

    Vue.component('blog-post', {
    template:'<div>{{published}}</div>',
    props: {
        published: Boolean
        }
    })

    new Vue({
        el: '#app',
        data: {
        }
    })
```

#### [传入一个对象的所有属性](https://cn.vuejs.org/v2/guide/components-props.html#%E4%BC%A0%E5%85%A5%E4%B8%80%E4%B8%AA%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%89%80%E6%9C%89%E5%B1%9E%E6%80%A7)
```
    <div id="app">
        <blog-post v-bind=post></blog-post>
    </div>

    Vue.component('blog-post', {
        props: ['id','title'],
        template: '<div>{{id}}{{title}}</div>',
    })

    new Vue({
        el: '#app',
        data: {
            post: {
                id: 1,
                title: 'My Journey with Vue'
            }
        }
    })
```
等价于
```
    <div id="app">
        <blog-post v-bind:id="post.id" v-bind:title="post.title"></blog-post>
    </div>

     Vue.component('blog-post', {
        props: ['id','title'],
        template: '<div>{{id}}{{title}}</div>',
    })

    new Vue({
        el: '#app',
        data: {
            post: {
                id: 1,
                title: 'My Journey with Vue'
            }
        }
    })
```

#### 替换/合并已有的特性（从外部提供给组件的值vs组件内部设置好的值）
假如<bootstrap-date-input> 的模板如下
```
<input type="date" class="form-control">
```
为bootstrap-date-input设置type,class如下
```
<bootstrap-date-input type="input" class="hi"></bootstrap-date-input>
```
对于绝大多数特性来说，从外部提供给组件的值会替换掉组件内部设置好的值。所以如果传入 type="text" 就会替换掉 type="date" 并把它破坏！庆幸的是，class 和 style 特性会稍微智能一些，即两边的值会被合并起来，从而得到最终的值：form-control date-picker-theme-dark。
所以最终的HTML元素为
```
<input type="input" class="form-control hi">
```
