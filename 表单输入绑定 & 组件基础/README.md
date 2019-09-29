#### HTML表单元素知识补充
* 常见表单元素
1. text 和 textarea 元素使用 value 属性和 input 事件；
2. checkbox 和 radio 使用 checked 属性和 change 事件；
3. select 字段将 value 作为 prop 并将 change 作为事件。
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

#### [v-model](https://cn.vuejs.org/v2/guide/forms.html#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95)
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

#### <select>


* 双向数据绑定，以<select>为例
```
 <div id="app">
    <select v-model="selected">
        <option disabled value="">请选择</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>

    <!--这里的selected是data中的selected，将随用户所选项的变动而变动-->
    <span>Selected: {{ selected }}</span>
</div>

new Vue({
    el: '#app',
    data: {

        // 默认B被选中
        selected: 'B'
        }
    })
```

