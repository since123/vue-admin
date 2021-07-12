## CSS 垂直居中的 8 种方法

1.  通过 verticle-align:middle 实现 CSS 垂直居中。

通过通过 vertical-align:middle 实现 CSS 垂直居中是最常使用的方法，但是有一点需要格外注意，vertical 生效的前提是元素的 display：inline-block。

2. 通过 display:flex 实现 CSS 垂直居中。

随着越来越多浏览器兼容 CSS 中的 flexbox 特性，所以现在通过“display:flex”实现 CSS 水平居中的方案也越来越受青睐。

通过 display:flex 实现 CSS 垂直居中的方法是给父元素 display:flex;而子元素 align-self:center;

这个跟 CSS 水平居中的原理是一样的，只是在 flex-direction 上有所差别，一个是 row(默认值)，另外一个是 column。

3. 通过伪元素:before 实现 CSS 垂直居中。

具体方式是为父元素添加伪元素:before，使得子元素实现垂直居中。

4. 通过 display:table-cell 实现 CSS 垂直居中

给父元素 display:table，子元素 display：table-cell 的方式实现 CSS 垂直居中。

5. 通过隐藏节点实现 CSS 垂直居中。

创建一个隐藏节点#hide，使得隐藏节点的 height 值为剩余高度的一半即可。

这种方法也适用于 CSS 水平居中，原理一样。

6. 已知父元素高度通过 transform 实现 CSS 垂直居中。

给子元素的 position:relative，再通过 translateY 即可定位到垂直居中的位置。

7. 到垂直居中的位置。

8. 通过 line-height 实现 CSS 垂直居中。

设置子元素的 line-height 值等于父元素的 height，这种方法适用于子元素为单行文本的情况。
