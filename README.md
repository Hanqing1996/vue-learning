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



#### v-if与v-show
```
<div id="app">
    <div v-if="active">if</div>

    <div v-show="ok">show</div>
</div>
```
```
var app = new Vue({
    el: '#app',
    data: {
        active:false,
        ok:false
    }
})
```
带有v-show的DOM节点始终存在，只是将 display 属性在 block 和 none 来回切换；一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。而v-if会控制这个 DOM 节点的存在与否。当我们需要经常切换某个元素的显示/隐藏时，使用v-show会更加节省性能上的开销；当只需要一次显示或隐藏时，使用v-if更加合理。
```
<div>
    <div style="display: none;">show</div>
</div>    
```

#### v-for的父作用域
```
<ul id="example-2">
  <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
</ul>
```
```
var example2 = new Vue({
  el: '#example-2',
  data: {

    // 父作用域  

    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
```
#### 用 v-for 来遍历一个对象的属性
```

<ul id="v-for-object" class="demo">
  <li v-for="value in object">
    {{ value }}
  </li>
</ul>
```
```
new Vue({
  el: '#v-for-object',
  data: {
    object: {
      title: 'How to do lists in Vue',
      author: 'Jane Doe',
      publishedAt: '2016-04-10'
    }
  }
})
```
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
        
        <button-counter @click="clickButtonCounter(1,$event)"></button-counter>
        <button-counter @click="clickButtonCounter(2,$event)"></button-counter>
        <button-counter @click="clickButtonCounter(3,$event)"></button-counter>
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
                this.$emit('click', "当前这个button-counter给app的值");
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
#### v-bind和props用于父组件给子组件传值
```
    <div id="father">
        <child :val="val"></child>      
    </div>
```
```
  Vue.component('child', {
        props: ['val'],
        data: function () {
            return {}
        },
        template: '<div>{{val}}</div>',
    })

    var vm = new Vue({
        el: "#father",
        data: {
            val:"父组件的值"
        },
  })
```

##### 报错:Property or method "text" is not defined
```
    <div id="app">
        {{text}}
    </div>
```
```
 var vm = new Vue({
        el: "#app",
        data: {},
    })
```
#### 插槽:往组件里插入内容 
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
        template: '<div><slot></slot></div>',
    })

    var vm = new Vue({
        el: "#father",
        data: {},
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

#### 
* public:部署在生产环境中的文件
* src：开发目录
* src/App.vue:入口文件
* src/components/HellowWorld.vue:单文件组件

#### 组件名规范
* 字母全小写且必须包含一个连字符,比如button-counter
* 

