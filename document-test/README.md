#### [v-bind](https://cn.vuejs.org/v2/guide/#%E5%A3%B0%E6%98%8E%E5%BC%8F%E6%B8%B2%E6%9F%93)
下面几种写法等价
```
:title="message"

v-bind:title="message"

:title=message

v-bind:title=message
```

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

#### [v-for](https://cn.vuejs.org/v2/guide/list.html)
下面几种写法等价
```
<div v-for="item of items"></div>

<div v-for="item in items"></div>
```