#### v-bind的几种等价写法
1. :title="message"
2. v-bind:title="message"
3. :title=message
4. v-bind:title=message

#### v-bind和props用于父组件给子组件传值
```
    <div id="father">
        <child :childval="fatherVal"></child>
    </div>

    Vue.component('child', {
        props: ['childval'], 
        data: function () {
            return {}
        },
        template: '<div>子组件得到了{{childval}}</div>',
    })

    var vm = new Vue({
        el: "#father",
        data: {
            fatherVal: "父组件的值" 
        },
    })
```
#### v-bind绑定data里声明的属性
* 用法
```
    <div id="app">
        <span :id="oneValueIndata"></span>
    </div>

        new Vue({
        el: '#app',
        data: {
            oneValueIndata:"hh" // 去掉这一句，则渲染结果为<span id="oneValueIndata"><span>
        }
    })
```
渲染效果
```
<span id="hh"><span>
```

#### 在<child>中使用v-bind绑定的属性必须在Vue实例的data对象中声明
```
    <div id="app">
        <child :id="oneValueIndata"></child>
    </div>

        Vue.component('child', {
        template: '<span>kk</span>'
    })

    new Vue({
        el: '#app',
        data: {
            oneValueIndata: "hh"  // 去掉这句，则报错：Property or method "oneValueIndata" is not defined
        }
    })
```

#### <child>的v-bind与template的v-bind
* <child>的v-bind优先级更高
```
  <div id="app">
      <child v-bind:id="conponentId"></child>
    </div>

     Vue.component('child', {
        data: function () {
            return {
                count: 0
            }
        },
        template: '<div v-bind:id="templateId">something</div>',
    })

    var vm = new Vue({
        el: "#app",
        data: {
            conponentId:"aa",
            templateId:"bb"
        },
    })
```
渲染结果
```
<div id="aa">something</div>
```

#### 为在template中声明的HTML元素添加属性(Id,value,class等等)
```
<custom-input v-bind:value="oneValue"></custom-input>

Vue.component('custom-input', {
      template: ‘<input type="text">’
    })

    new Vue({
        el: '#app',
        data: {
        }
    })
```
渲染结果
```

```