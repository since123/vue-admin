## vue3组合式api

*  以下内容仅为学习后简单概括自己的理解，不做具体阐述，详细可自行搜索。

1,顾名思义，就是将之前data,computed,methods,onmounted等阐述同一功能的代码组合在一起（组合在setup中），是的组件以及代码更精准的复用。
2，组合dataz中数据时，为了保持原有的响应式，可以用refs，reactive(应用于对象)进行处理。
3，setup需return出外界可能会调用的值，通常是html中需要用到的那些变量，也有可能是click，selected等事件（其他html使用的各种方法用）调用的方法。只有这样，外界才能使用。
4，setup中对应的watch, computed,以及mounted等各种生命周期，都可以使用，具体写法，直接查文档即可，有的用之前需要引入，有的用的时候需要回调的方式。
5，activted在vue3中，貌似还没有正常使用（我学习的时候用不了）。

* 以上内容仅供记录参考，有我理解错的地方，烦请留言告知，感谢。
