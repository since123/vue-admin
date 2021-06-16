## watch与watch立即回调
参考：https://juejin.cn/post/6844904196626448391，本文章为阅读参考文章之后有所感悟而记载，与原文章有重复之处难免，见谅。

* watch是在开发vue项目时经常使用的，但是，使用watch在不同情况下，有不同效果。

### : 基础用法

常规用法就是例如我们有一个列表，需要在某个变量改变时，重新加载，下面代码就是当input输入值改变时，重新调接口加载列表数据。
```html
<template>
  <!--此处示例使用了element-ui-->
  <div>
    <div>
      <span>搜索</span>
      <input v-model="searchValue" />
    </div>
    <!--列表，代码省略-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchValue: ''
    }
  },
  watch: {
    // 在值发生变化之后，重新加载数据
    searchValue(newValue, oldValue) {
      // 判断搜索
      if (newValue !== oldValue) {
        this.$_loadData()
      }
    }
  },
  methods: {
    $_loadData() {
      // 重新加载数据，此处需要通过函数防抖
    }
  }
}
</script>

```
### 立即触发
像上面，就已经可以实现watch监听input数据，使得列表更新了，但是你一定遇到过这种情况，就是页面一进去的时候，input参数值为空，先执行一遍接口，来加载全部列表数据，这时一般我们会在created，mounted里面写一遍接口方法，然后就加上我们上面写过的，watch来监听input值变化，不过，现在大可不必这样了，通过配置watch的立即触发的属性，就可以满足需求了。

```js
// 改造watch
export default {
  watch: {
    // 在值发生变化之后，重新加载数据
    searchValue: {
    // 通过handler来监听属性变化, 初次调用 newValue为""空字符串， oldValue为 undefined
      handler(newValue, oldValue) {
        if (newValue !== oldValue) {
          this.$_loadData()
        }
      },
      // 配置立即执行属性
      immediate: true
    }
  }
}
```

### 深度监听

如果你有一个列表页面，有很多的属性，而你想在修改任何一项时，就能检测到表单被修改了，如果按照上面的写法，那么我们需要监听表单每一个属性，例如，有三个输入框，三个下拉选择框，那我们就需要监听6个了，太冗余了，这时候就可以用到watch的深度监听了deep了。

```js
export default {
  data() {
    return {
      formData: {
        name: '',
        sex: '',
        age: 0,
        deptId: ''
      }
    }
  },
  watch: {
    // 在值发生变化之后，重新加载数据
    formData: {
      // 需要注意，因为对象引用的原因， newValue和oldValue的值一直相等
      handler(newValue, oldValue) {
        // 在这里标记页面编辑状态
      },
      // 通过指定deep属性为true, watch会监听对象里面每一个值的变化
      deep: true
    }
  }
}

```

### 随时监听，随时取消

假如有一个表单，在编辑的时候，需要监听表单的变化，如果发生变化则保存按钮启用，否则按钮禁用，这时候对于新增表单来说，可以直接通过watch去监听表单数据，如上述所示，但是对于编辑表单来说，表单需要回填数据（上面的数据因为对象引用的原因，newValue和oldValue的值一直相等）,这时候触发watch，无法准确的判断是否启用保存按钮，现在就可以使用$watch来解决了
```js
export default {
  data() {
    return {
      formData: {
        name: '',
        age: 0
      }
    }
  },
  created() {
    this.$_loadData()
  },
  methods: {
    // 模拟异步请求数据
    $_loadData() {
      setTimeout(() => {
        // 先赋值
        this.formData = {
          name: '子君',
          age: 18
        }
        // 等表单数据回填之后，监听数据是否发生变化
        const unwatch = this.$watch(
          'formData',
          () => {
            console.log('数据发生了变化')
          },
          {
            deep: true
          }
        )
        // 模拟数据发生了变化
        setTimeout(() => {
          this.formData.name = '张三'
        }, 1000)
      }, 1000)
    }
  }
}
```
根据上例，我们在需要的时候来监听数据的变化，那么如何取消监听呢，上例中this.$watch 返回了一个值unwatch，是一个函数，在需要取消的时候执行unwatch()即可




