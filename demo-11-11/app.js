import Vue from 'vue'
import Button from './button'

// 一般写法
Vue.component('g-button', Button)
let vm=new Vue({
})
vm.$mount(document.getElementById("app")) // vue实例挂载到app上，即识别app内容
// 以上代码等价于
```
Vue.component('g-button', Button)
let vm=new Vue({
    el:'#app' 
})
```




// 动态添加组件(多个)
let div=document.getElementById("app2")
div.innerHTML=`
    <g-button>第一个slot内容</g-button>
    <g-button>第二个slot内容</g-button>
    `
const vm2=new Vue({
    el:div // vue实例挂载到app2上，识别app2内容
})



// 动态添加组件(只有一个)
let Constructor=Vue.extend(Button)
let vm3=new Constructor()
// slot 要放在 mount() 之前
vm3.$slots.default='动态添加的组件的slot内容'
//必须先$mount(),才能获取vm3.$el，否则vm3.$el始终是undefined
console.log(vm3.$el)// undefined
vm3.$mount() 
console.log(vm3.$el) //注意无论$mount()填什么参数，结果vm3.$el都是<button data-v-d7f0df="">动态添加的组件的slot内容</button>，
document.getElementById("app4").appendChild(vm3.$el)// 这一步与vue实例的挂载无关（到这一步前挂载已经结束），只是将vm3.$el放入index.html