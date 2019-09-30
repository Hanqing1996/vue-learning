#### 事件名的大小写
* 事件名规范如下
```
    <div id="app">
        <blog-post v-on:my-event="doSomething"></blog-post>
    </div>

    Vue.component('blog-post', {
        props: ['id', 'title'],
        template: '<div>haha</div>',
        created() {
            this.$emit('my-event')
        }
    })

    new Vue({
        el: '#app',
        data: {
        },
        methods: {
            doSomething(){
                console.log('do it');
            }
        }
    })
```

#### slot怎么用
```
    <div id="father">
        <child>
           <h1>插槽里的内容</h1>
        </child>      
    </div>
```
```
    Vue.component('child', {
        data: function () {
            return {}
        },
        template: '<div><slot></slot></div>', // 在这里指明插槽的位置
    })

    var vm = new Vue({
        el: "#father",
        data: {},
    })
```

#### .sync 修饰符：用于实现子组件更新父组件的props
```
    Vue.component('text-document', {
        template: '<div>haha</div>',
        props: ['title'],
        template: `
        <button v-on:click="$emit('update:title','changedFatherTitle')">{{title}}</button>
        `
    })

    new Vue({
        el: '#app',
        data: {
            doc: {
                title: "fatherTitle"
            }
        }
    })
```

#### .sync语法糖原理
总结.sync的作用
1. 在子组件触发$emit后接收$event
2. 令父组件的prop更新为$event的值
所以
``` <div id="app">
        <text-document v-bind:title.sync="doc.title"></text-document>
    </div>
        
    Vue.component('text-document', {
        template: '<div>haha</div>',
        props: ['title'],
        template: `
        <button v-on:click="$emit('update:title','changedFatherTitle')">{{title}}</button>
        `
    })

    new Vue({
        el: '#app',
        data: {
            doc: {
                title: "fatherTitle"
            }
        }
    })
```
等价于
```
    <div id="app">
        <text-document v-bind:title="doc.title" v-on:update="doc.title = $event"></text-document>
    </div>

        Vue.component('text-document', {
        template: '<div>haha</div>',
        props: ['title'],
        template: `
        <button v-on:click="$emit('update:title','changedFatherTitle')">{{title}}</button>
        `
    })

    new Vue({
        el: '#app',
        data: {
            doc: {
                title: "fatherTitle"
            }
        }
    })
```

#### [具名插槽](https://cn.vuejs.org/v2/guide/components-slots.html#%E5%85%B7%E5%90%8D%E6%8F%92%E6%A7%BD)
* 
```

```