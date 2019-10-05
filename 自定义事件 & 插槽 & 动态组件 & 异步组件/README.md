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

#### 可以使用 <slot>默认内容</slot> 来指定插槽里的默认内容
```
    <div id="app">
        <child></child>
    </div>

    Vue.component('child', {
        template: '<div><slot>default content</slot></div>'
    })

    new Vue({
        el: '#app',
        data: {
        }
    })
```

#### 具名插槽:在一个组件中放入多个插槽
* 在组件内部用slot name="header"的形式提供插槽
* 在组件外部用 template v-slot:header 的形式提供插槽内容
```
    <div id="app">
        <base-layout>
            <template v-slot:header>
                <h1>Here might be a page title</h1>
            </template>

            <p>A paragraph for the main content.</p>
            <p>And another one.</p>

            <template v-slot:footer>
                <p>Here's some contact info</p>
            </template>
        </base-layout>
    </div>

    Vue.component('base-layout', {
        data: function () {
            return {
            }
        },
        template: `
        <div class="container">
            < header >
                <slot name="header"></slot>
            </header>
            <main>
                <slot></slot>
            </main>
            <footer>
                <slot name="footer"></slot>
            </footer>
        </div > `,
    })

    new Vue({
        el: '#app',
        data: {
        }
    })
```

