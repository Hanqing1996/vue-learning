#### 计算属性的典型用法
*  如果 b 依赖于 a,就应该把 b 设置为 computed
```
data: {
    a: 1,
},
computed: {
    b:function(){
        return this.a+1;
    }
}
```
而不应该把 a,b 都作为 data
```
// b 不会随 a 更新而更新
data: {
    a: 1,
    b:a+1
},
``` 

#### [计算属性缓存 vs 方法](https://cn.vuejs.org/v2/guide/computed.html#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E7%BC%93%E5%AD%98-vs-%E6%96%B9%E6%B3%95)
1. 我们可以将同一函数定义为一个方法而不是一个计算属性。两种方式的最终结果确实是完全相同的。
2. 然而，不同的是计算属性是基于它们的响应式依赖进行 **缓存**的。只在相关响应式依赖发生改变时它们才会重新求值。
3. 这就意味着只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果（缓存），而不必再次执行函数。(**重点：没有再次执行函数！**)。总之，缓存是计算属性的最大优势。
* [测试题3](https://xiedaimala.com/tasks/739a1661-e5b5-4734-ac53-eb277f1a905f/quizzes/7f8086f9-5cd5-4a72-b58d-a79bb8e2e6ff)
答案:1 3

#### [计算属性 vs 侦听属性](https://cn.vuejs.org/v2/guide/computed.html#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7-vs-%E4%BE%A6%E5%90%AC%E5%B1%9E%E6%80%A7)


#### [watch](https://cn.vuejs.org/v2/api/#watch)
1. a的变化导致b的变化
``` 
var vm = new Vue({
  data: {
    a: 1,
    b: 2,
  },
  watch: {

    // a为需要侦听的值;oldVal为a变化前的值，val为a变化后的值
    a: function (val, oldVal) {
        
        // b在a变化后随之变化
        this.b=val
    },
```    
2. [测试题4](https://xiedaimala.com/tasks/739a1661-e5b5-4734-ac53-eb277f1a905f/quizzes/7f8086f9-5cd5-4a72-b58d-a79bb8e2e6ff)
答案:4
3. [测试题5](https://xiedaimala.com/tasks/739a1661-e5b5-4734-ac53-eb277f1a905f/quizzes/7f8086f9-5cd5-4a72-b58d-a79bb8e2e6ff)
答案: 'obj.count':function(){

#### [vm.$watch(expOrFn,callback,[options])](https://cn.vuejs.org/v2/api/#vm-watch)
* 典型用法:类似于watch
```
    <div id="app">
        <div>{{a}}</div>
        <button @click="b+=1">{{b}}</button>
    </div>

        var app = new Vue({
        el: '#app',
        data: {
            a: 1,
            b: 2
        }
    })

    var unwatch=app.$watch(
        'b', // 监听b的变化

        // 回调函数,在b变化后执行
        function (newVal) {
            this.a = newVal;

            // 取消watch
            if(unwatch) unwatch()
        }
    )
```
* {deep:true}用于侦听一个对象的所有属性变化
```
    <div id="app">
        <span>
            {{obj.a}} {{obj.b}} {{obj.c}}
        </span>
        <div>
            <button @click="obj.a+=1">a+1</button>
            <button @click="obj.b+=1">b+1</button>
            <button @click="obj.c+=1">c+1</button>
        </div>
        <div>
            你改了 {{modified}} 次
        </div>
    </div>

var app = new Vue({
  el: '#app',
  data: {
    modified: 0,
    obj: {a:1,b:2,c:3}
  },
  created(){
      this.$watch('obj', ()=>{
        this.modified += 1
      },{deep:true})
  }
})
```