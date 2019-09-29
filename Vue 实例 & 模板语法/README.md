#### v-bind的几种等价写法
1. :title="message"
2. v-bind:title="message"
3. :title=message
4. v-bind:title=message

#### v-bind和props用于父组件给子组件传值
```
    <div id="father">
        <child :val="val"></child>      
    </div>
```
```
  Vue.component('child', {
        props: ['val'], // 这个val是子组件vm作用域中的val
        data: function () {
            return {}
        },
        template: '<div>{{val}}</div>', 
    })

    var vm = new Vue({
        el: "#father",
        data: {
            val:"父组件的值" // 这个val是父组件vm作用域中的val
        },
  })
```
