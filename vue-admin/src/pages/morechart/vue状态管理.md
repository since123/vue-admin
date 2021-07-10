
* 此文为阅读https://juejin.cn/post/6844904196626448391后觉得非常有道理有感而记载。

* 一般来说，各个页面之间传递数据，可以用缓存，即localStorage,SessionStorage等，在cue中各个组件之间数据共享，常规用vuex，但是对于小型项目来说，就像vuex官网所说，：“如果您不打算开发大型单页应用，使用 Vuex 可能是繁琐冗余的，确实是如此——如果您的应用够简单，您最好不要使用 Vuex”，这时候，我们就可以使用vue2.6提供的新API ——————> Vue.observable手动打造一个Vuex。

1. 创建store
```js
import Vue from 'vue'

// 通过Vue.observable创建一个可响应的对象
export const store = Vue.observable({
  userInfo: {},
  roleIds: []
})

// 定义 mutations, 修改属性
export const mutations = {
  setUserInfo(userInfo) {
    store.userInfo = userInfo
  },
  setRoleIds(roleIds) {
    store.roleIds = roleIds
  }
}

```
2.  在组件中引用
```html
<template>
  <div>
    {{ userInfo.name }}
  </div>
</template>
<script>
import { store, mutations } from '../store'
export default {
  computed: {
    userInfo() {
      return store.userInfo
    }
  },
  created() {
    mutations.setUserInfo({
      name: '子君'
    })
  }
}
</script>
```

