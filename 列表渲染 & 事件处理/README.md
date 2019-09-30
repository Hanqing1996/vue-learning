#### [v-for](https://cn.vuejs.org/v2/guide/list.html)
* 渲染效果
```
<ul id="example-1">
    <li v-for="item in items" v-bind:key="item.id">
        {{ item.message }}
    </li>
</ul>

var example1 = new Vue({
    el: '#example-1',
    data: {
        items: [
            { message: 'Foo', id:1 },
            { message: 'Bar', id:2 }
        ]
    }
})
```
渲染为
```
<ul id="example-1">
    <li>Foo</li>
    <li>Bar</li>
</ul>
```
* 下面几种写法等价
```
<div v-for="item of items"></div>

<div v-for="item in items"></div>
```
* 在遍历对象时，会按 Object.keys() 的结果遍历，但是不能保证它的结果在不同的 JavaScript 引擎下都一致。
* [设置数组项不能用vm.items[indexOfItem] = newValue](https://cn.vuejs.org/v2/guide/list.html#%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9)
应该用
```
vm.$set(vm.items, indexOfItem, newValue)
```

#### key
* key是用来维护数据状态的，对于数据的静态展示，其实不需要key和item.id
```
<ul id="example-1">
    <li v-for="item in items">
        {{ item.message }}
    </li>
</ul>

var example1 = new Vue({
    el: '#example-1',
    data: {
        items: [
            { message: 'Foo'},
            { message: 'Bar'}
        ]
    }
})
```
* 在组件上使用 v-for 时,key是必须的
* [用 key 管理可复用的元素](https://cn.vuejs.org/v2/guide/conditional.html#%E7%94%A8-key-%E7%AE%A1%E7%90%86%E5%8F%AF%E5%A4%8D%E7%94%A8%E7%9A%84%E5%85%83%E7%B4%A0)

#### [在组件中使用v-for(is怎么用)](https://cn.vuejs.org/v2/guide/list.html#%E5%9C%A8%E7%BB%84%E4%BB%B6%E4%B8%8A%E4%BD%BF%E7%94%A8-v-for)
* 下面的写法是错误的,因为[child不是ul的有效内容](https://cn.vuejs.org/v2/guide/components.html#%E8%A7%A3%E6%9E%90-DOM-%E6%A8%A1%E6%9D%BF%E6%97%B6%E7%9A%84%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9)
```
 <ul id="app">
    <child v-for="item in items"  v-bind:key="item.id" v-bind:name="item.name"></child>
</div>
```
* 正确姿势(使用is)
```
 <div id="app">
    <ul>
        <li is="child" v-for="item in items"  v-bind:key="item.id" v-bind:name="item.name"></li>
    </ul>
</div>


Vue.component('child', {
    template: '<div>{{name}}</div>',
    props: ['name'] // 迭代数据是不会自动由vue实例传递到组件里的（"不自动将 item 注入到组件里"）。因此我们需要使用 prop,
}

new Vue({
    el: '#app',
    data: {
        items: [{ name: "libai", id: 1 }, { name: "dufu", id: 2 }]
    }
})
```

#### $event
* 对于原生元素（如 button、input）来说，$event 是原始的 DOM 事件
* 对于自定义组件（如 child）来说，$event 是其自身 $emit 发出的第二个参数
```
    <div id="app">
        <child @click="clickChild(a,$event)"></child>
    </div>

    Vue.component('child', {
        data: function () {
            return {}
        },
        template: '<button @click="clickButton">点我</button>',
        methods: {
            clickButton() {
                this.$emit('click', 1,2) // $emit的第二个参数为$event
            }
        }
    })

    var example1 = new Vue({
        el: '#app',
        data: {
        },
        methods: {
            clickChild(e) {
                console.log(e); // 1，说明$event值为1
            }
        }
    })
```