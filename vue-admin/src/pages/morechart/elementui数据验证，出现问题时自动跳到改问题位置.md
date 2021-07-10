elementui数据验证，出现问题时自动定位跳到改问题位置
```js
that.$refs.editForm.validate((valid, object) => {
    console.log("valid,", valid, object)
    if(valid){
        //调接口等一系列操作......
    }else {
        for (let i in object) {
          let dom = this.$refs[i];
          if (Object.prototype.toString.call(dom) !== '[object Object]') {　　//这里是针对遍历的情况（多个输入框），取值为数组
            dom = dom[0];
          }
          //第一种方法（包含动画效果）
          dom.$el.scrollIntoView({　　//滚动到指定节点
            block: 'center',　　　　　//值有start,center,end，nearest，当前显示在视图区域中间
            behavior: 'smooth'　　　　//值有auto、instant,smooth，缓动动画（当前是慢速的）
          })
          break; //因为我们只需要检测一项,所以就可以跳出循环了
        }
    }
})
```
### 这里需要有一个注意的点就是html里面表单项的ref名和prop名要一样，如果不一样，要做对应转换，我这里是一样的，


当列表循环时，会有多个相同属性名的列表，且假如有ref和prop不同时，这时可以如下
```js
for(let n in this.form.eventParts){
    that.$refs.eventPartsForm[n].validate((va, object2) => {//这里的n是重点，可以一个一个列表检验，出问题随时跳出
        console.log("va", n, va, object2)
        if(va){
            this.eventPartsFlagArr[n] = true  //每一组数据都正确
        }else {
            for (let i in object2) {
                let dom = null
                // 这里是prop名和ref名不一样的处理，我的prop是docsNew1,ref是docsNew
                if(i == 'docsNew'){
                    dom = this.$refs['docsNew1']
                }else {
                    dom = this.$refs[i]
                }
                console.log("dom", dom)
                if (Object.prototype.toString.call(dom) !== '[object Object]') {　　//这里是针对遍历的情况（多个输入框），取值为数组
                    dom = dom[n]; //一共三组，即有n组数据，哪组必填的没有填就跳到哪组。
                }
                //第一种方法（包含动画效果）
                dom.$el.scrollIntoView({　　//滚动到指定节点
                block: 'center',　　　　　//值有start,center,end，nearest，当前显示在视图区域中间
                behavior: 'smooth'　　　　//值有auto、instant,smooth，缓动动画（当前是慢速的）
                })
                break; //因为我们只需要检测一项,所以就可以跳出循环了
            }
            this.eventPartsFlagArr[n] = false // 检测哪组数据不正确，以便于后续处理
            
        }
    })
}
```