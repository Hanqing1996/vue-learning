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
* 运行项目
```
yarn vue
```
#### template
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

#### [App与Cell的通信]()
