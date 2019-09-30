#### [yarn安装](https://yarnpkg.com/zh-Hans/docs/install#debian-stable)

#### [vue命令行工具：vue cli](https://cli.vuejs.org/zh/guide/installation.html)
```
npm install -g @vue/cli
```
#### vue命令
* 在当前目录安装项目
```
vue create .
```
* 运行项目(在项目目录下)
```
yarn serve
``` 
#### methods方法中的this
自己打印出来看

#### template
* template不会被渲染出来
* template是组件的
* template只能包含一个根元素
```
<template>
    <div></div>
    <div></div>
</template>

// 报错:Component template should contain exactly one root element
```

#### 简写
* v-on:等价于@
* v-bind省略

#### [App与Cell的通信](https://github.com/Hanqing1996/vue-learning/tree/master/vue-demo-1)



#### 组件与new Vue
* 应该把app看作一个组件
```
 var vm = new Vue({
        el: "#app",
        data: {
            text: "jjj"
        }
 })
```
* 组件与new Vue接受相同的选项
* new Vue 创建一个Vue实例(又称为根vue实例);组件是可复用的 Vue 实例,两者都是vue实例
```
<body>
    <div id="app">
        <button-counter></button-counter>
    </div>

    <div id="app2">
        <button-counter></button-counter>
    </div>
</body>
```
```
    // 一个可复用的vue实例
    Vue.component('button-counter', {
        data: function () {
            return {
                count: 0
            }
        },
        template: '<button v-on:click="count++">you clicked me {{ count }} times</button>'
    })

    // 一个vue实例 
    var vm = new Vue({
        el: "#app",
        data: {}
    })

    // 另外一个vue实例
    var vm2 = new Vue({
        el: "#app2",
        data: {}
    })  
```
* new Vue是必须的,组件可以没有
```
 <button-counter></button-counter>
```
```
    Vue.component('button-counter', {
        data: function () {
            return {
                count: 0
            }
        },
        template: '<button> I am  button</button>',
    })


    // button不会被渲染出来
```

#### props:组件的属性
```
   <div id="app">
        <!-- 为组件的title属性赋值 -->
        <button-counter title="this is a titles"></button-counter> 
    </div>
```
```
        Vue.component('button-counter', {
        props: ['title'],
        data: function () {
            return {
                count: 0
            }
        },
        template: '<button v-on:click="count++">{{title}} you clicked me {{ count }} times</button>'
    })

    var vm = new Vue({
        el: "#app",
        data: {}
    })
```
#### 组件定义事件，只需要在组件内部html元素上定义，不需要在组件上定义
```
    <div id="app">
        <button-counter></button-counter>
    </div>
```
```
 Vue.component('button-counter', {
        data: function () {
            return {
                count: 0
            }
        },
        template: '<button  @click="clickButton"> you clicked me {{ count }} times</button>',
        methods: {
            clickButton: function () {
                this.count++;
            }
        }
    })

    var vm = new Vue({
        el: "#app",
        data: {}
    })
```

#### $emit用于子组件给父组件传值
* app是父组件,button-counter是子组件;app有三个子组件
* 值由某个button-counter传递给app,但事件分别绑定在button-counter内部html元素,以及button-counter上
* 因为值的传递不仅需要"父组件接收到子组件的值"这一结果，还需要知道"这个值是哪个子组件给我的",那么将事件绑定在button-counter上就像在父亲面前放了三个孩子的手机，谁打电话过来一目了然
```
    <div id="app">
        {{text}}
        <button-counter @transmit="clickButtonCounter(1,$event)"></button-counter>
        <button-counter @transmit="clickButtonCounter(2,$event)"></button-counter>
        <button-counter @transmit="clickButtonCounter(3,$event)"></button-counter>
    </div>
```
```
    Vue.component('button-counter', {
        data: function () {
            return {
                count: 0
            }
        },
        template: '<button  @click="clickButton"> you clicked me {{ count }} times</button>',
        methods: {
            clickButton: function () {
                this.count++;

                // 触发button-counter的click事件
                this.$emit('transmit', "当前这个button-counter给app的值");
            }
        }
    })

    var vm = new Vue({
        el: "#app",
        data: {
            text: ""
        },
        methods: {
            clickButtonCounter: function (i, e) {
                console.log(i);
                this.text = e;
            }
        }
    })
```
#### 组件局部注册
```
    <div id="father">
        <child>ll</child>
    </div>
```
```
 var vm = new Vue({
        el: "#father",
        data: {},
        components: {
            child: {
                template: '<div>组件child的内容<div>'
            }
        }
    })
```

#### 各文件作用
* public:部署在生产环境中的文件
* src：开发目录
* src/App.vue:入口文件
* src/components/HellowWorld.vue:单文件组件





