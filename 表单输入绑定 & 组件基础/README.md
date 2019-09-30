#### HTML表单元素知识补充
* 常见表单元素
1. text 和 textarea 元素使用 value 属性和 input 事件；
2. checkbox 和 radio 使用 checked 属性和 change 事件；
3. select 字段将 value 作为 prop 并将 change 作为事件。

#### radio/checkbox/option各自功能
1. radio:1选是否,多选1
2. checkbox：多选多
3. option：多选1

#### <input type="text">的value和<option>的value
* <select>下的<option>的value仅仅起到唯一标识该option,不要与option的text混淆
```
<!DOCTYPE html>
<html>
<body>

<select>
  <option value="volvo">Volvo</option> 
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
  
</body>
</html>
```
* <input type="text">的value则是文本框的默认值
```
<input type="text" value="ininVal">
```

#### [v-model怎么用](https://cn.vuejs.org/v2/guide/forms.html#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95)
* v-model 会忽略所有表单元素的 value、checked、selected 特性的初始值而总是将 Vue 实例的数据作为数据来源。
```
  <div id="app">
    <input type="text" v-model="value1" :value="value2">
  </div>

  var app = new Vue({
  el: '#app',
  data: {

    // v-model将会把1作为input的value值，即 v-model的优先级高于v-bind:value 
    value1:'1',
    value2:'2'
  },
})
```

#### 单选按钮(radio) 
* 单个单选按钮，用v-­bind绑定一个布尔值，用v­model是不可以的
```
    <div id="app">
        <input type="radio" :checked="checked">
    </div>

        var vm = new Vue({
        el: "#app",
        data: {
            checked: false,
        },
    })
```
* 多个单选按钮，用v-­bind绑定一个字符串
```
    <div id="app">
            <input type="radio" value="a" v-model="checkvalue">A
            <input type="radio" value="b" v-model="checkvalue">B 
            <input type="radio" value="c" v-model="checkvalue">C  <br>
            {{checkvalue}}
    </div>

        var vm = new Vue({
        el: "#app",
        data: {
            checkvalue: "b",
        },
    })
```
#### 复选框(checkbox)
* 单个复选框：用v-bind:
```
<input type="checkbox" :checked="checked"> <br>

data: {
  checked: true
}
```
* 单个复选框：用v-model:
```
<input type="checkbox" v-model="checked"> <br>

data: {
  checked: true
}
```
* 多个复选框：v-model绑定数组
```
    <div id="app">
        <input type="checkbox" value="a" v-model="checkvalue">A
        <input type="checkbox" value="b" v-model="checkvalue">B
        <input type="checkbox" value="c" v-model="checkvalue">C <br>
        {{checkvalue}}
    </div>

        var vm = new Vue({
        el: "#app",
        data: {
            checkvalue: []
        },
    })
```

#### 选择框(option)
* 单选时：用v-­bind绑定一个字符串。data.selected的值将取决于所选option的value,注意value不属于Vue实例的data对象,而是HTML元素<option>的一个自身属性
```
 <div id="app">
        <select v-model="selected">
            <option disabled value="">请选择</option>
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="c">C</option>
        </select>

        <!--双向数据绑定：这里的selected是data中的selected，将随用户所选项的变动而变动,在这里,selected的可能为a,b,c-->
        <span>Selected: {{ selected }}</span>
    </div>

        new Vue({
        el: '#app',
        data: {
            selected: 'b'
        }
    })
```
* 多选（只选择一个）时：用v-­bind绑定一个数组
```
    <div id="app">
        <select v-model="selected">
            <option disabled value="">请选择</option>
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="c">C</option>
        </select>

        <!--双向数据绑定：这里的selected是data中的selected，将随用户所选项的变动而变动,在这里,selected的可能为a,b,c-->
        <span>Selected: {{ selected }}</span>
    </div>

        new Vue({
        el: '#app',
        data: {
            selected: []
        }
    })
```

#### v-model语法糖原理
1. 保证input的value来自Vue实例data的searchText：v-bind:value="searchText"
2. 保证在触发input事件时，searchText的值与输入内容同步
so，综上所述
```
    <div id="app">
        <input v-model="searchText">
        <div>{{searchText}}</div>
    </div>

        var vm = new Vue({
        el: "#app",
        data: {
            searchText:"",
        },
    })
```
等效于
```
    <div id="app">
        <input v-bind:value="searchText" v-on:input="searchText=$event.target.value">
        <div>{{searchText}}</div>
    </div>

        var vm = new Vue({
        el: "#app",
        data: {
            searchText:"",
        },
    })
```

#### [v-model 用到自定义组件上](https://cn.vuejs.org/v2/guide/components-custom-events.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E7%9A%84-v-model)
1.  保证input的value来自Vue实例data的searchText：v-bind:value="searchText"
2. 
```

```
等价于
```
 <div id="app">
        <custom-input v-bind:value="searchText" v-on:input="searchText = $event"></custom-input>
        {{searchText}}
    </div>

    Vue.component('custom-input', {
        template: `<input
      type="text"
      v-on:input="$emit('input', $event.target.value)"
    >`
    })

    new Vue({
        el: '#app',
        data: {
            searchText: "hh"
        }
    })
```



#### 全局注册组件
Vue.component('button-counter', options) 可以全局注册一个组件
1. 因为组件是可复用的 Vue 实例，所以它们与 new Vue 接收**几乎**相同的选项，例如 data、computed、watch、methods 以及生命周期钩子等
2. el是根实例特有的选项。所以options不包括el
3. 这里的 options.data 选项必须是一个函数 

#### $emit
```
<div id="emit-example-simple">
  <welcome-button v-on:welcome="sayHi"></welcome-button>
</div>

Vue.component('welcome-button', {
  template: `
    <button v-on:click="$emit('welcome')">
      Click me to be welcomed
    </button>
  `
})

new Vue({
  el: '#emit-example-simple',
  methods: {
    sayHi: function () {
      alert('Hi!')
    }
  }
})
```

#### [动态组件：使component在不同组件之间进行动态切换](https://cn.vuejs.org/v2/guide/components.html#%E5%8A%A8%E6%80%81%E7%BB%84%E4%BB%B6)