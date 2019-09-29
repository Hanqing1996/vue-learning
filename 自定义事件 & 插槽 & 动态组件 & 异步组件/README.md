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