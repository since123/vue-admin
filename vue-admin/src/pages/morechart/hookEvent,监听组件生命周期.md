## 监听组件生命周期，优化写法，使用hook
摘自https://juejin.cn/post/6844904196626448391

* 内部监听生命周期函数

通常写法：
```html
<template>
  <div class="echarts"></div>
</template>
<script>
export default {
  mounted() {
    this.chart = echarts.init(this.$el)
    // 请求数据，赋值数据 等等一系列操作...
    // 监听窗口发生变化，resize组件
    window.addEventListener('resize', this.$_handleResizeChart)
  },
  updated() {
    // 干了一堆活
  },
  created() {
    // 干了一堆活
  },
  beforeDestroy() {
    // 组件销毁时，销毁监听事件
    window.removeEventListener('resize', this.$_handleResizeChart)
  },
  methods: {
    $_handleResizeChart() {
      this.chart.resize()
    },
    // 其他一堆方法
  }
}
</script>

```
* 常规写法没有啥问题，为什么优化？

因为有追求，对，没错，就是玩儿，哈哈哈，其实是，我们应该将监听'resize'事件与销毁'resize'事件放在一起，常规写法，两者就隔了好几行或者几百行，当然，你可能会说，我把生命周期钩子函数位置换一下，放到一起不就行了，额，谁怼我谁是赢家，言归正传，我们可以使用hook，如下

 ```js

 export default {
  mounted() {
    this.chart = echarts.init(this.$el)
    // 请求数据，赋值数据 等等一系列操作...

    // 监听窗口发生变化，resize组件
    window.addEventListener('resize', this.$_handleResizeChart)
    // 通过hook监听组件销毁钩子函数，并取消监听事件
    this.$once('hook:beforeDestroy', () => {
      window.removeEventListener('resize', this.$_handleResizeChart)
    })
  },
  updated() {},
  created() {},
  methods: {
    $_handleResizeChart() {
      this.chart.resize()
    }
  }
}

 ```

 是的，你没有看错，我之前也不知道，还可以这样写，所以当我看到这种写法的时候，我马上把它摘抄总结以下，下次遇到小白了我可以假装一把大佬，哈哈哈哈。在vue组件中，可以用$on, $once去监听所有生命周期钩子，如监听updated钩子函数可以写成this.$on('hook:updated', () => {}), 为啥要用updated举例呢，下面我会说。

 * 外部监听生命周期函数

 之前面试，有个面试官问我，你用过updated这个生命周期钩子吗？，我？？？用过，（其实我没有用过，但是我怕别人知道我没有用过），面试官问我，在什么场景下？我马上开口，就是组件更新的时候呀，哈哈哈哈，面试官说，其实我没有用过，我感觉组件更新的时候使用watch基本都满足需求了，我想不出来updated在什么地方用，我.........,没说话了，怕被看出来。
 当我看到上面作者写的这篇文章的时候，我突然知道哪里可以使用updated了，对，外部监听生命周期函数，
 为什么会有这样的需求，就是用第三方组件，需要监听第三方组件的数据变化，但是组件又没有提供change方法，所以，这个时候你可以在外部监听组件的updated钩子函数，
 ```js
 <template>
  <!--通过@hook:updated监听组件的updated生命钩子函数-->
  <!--组件的所有生命周期钩子都可以通过@hook:钩子函数名 来监听触发-->
  <custom-select @hook:updated="$_handleSelectUpdated" />
</template>
<script>
import CustomSelect from '../components/custom-select'
export default {
  components: {
    CustomSelect
  },
  methods: {
    $_handleSelectUpdated() {
      console.log('custom-select组件的updated钩子函数被触发')
    }
  }
}
</script>


 ```


