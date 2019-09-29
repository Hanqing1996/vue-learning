#### [v-if和v-show的区别](https://cn.vuejs.org/v2/guide/conditional.html#v-if-vs-v-show)
* 用户看不见该 p 元素是因为该 p 元素没有出现在 DOM 结构中
```
    <div id="app-3">
        <p v-if="seen">现在你看到我了</p>
    </div>

        var app3 = new Vue({
        el: '#app-3',
        data: {
            seen: false
        }
    })
```
* 用户看不见该 p 元素是因为该 p 元素的 display 为 none
```
    <div id="app-3">
        <p v-show="seen">现在你看到我了</p>
    </div>

        var app3 = new Vue({
        el: '#app-3',
        data: {
            seen: false
        }
    })
```
* v-show 不支持 <template> 元素，也不支持 v-else。
* 一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。