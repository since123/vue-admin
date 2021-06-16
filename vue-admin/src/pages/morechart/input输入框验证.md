### 需求：故障部件只有在案件状态为2时才是必填项，这时候验证的方法就需要一定条件下添加，这里前面只需要控制:required="ifWriteFaultPart"就可以了，
```html

<el-form-item label="故障部件" label-width="120px" ref="faultPart" prop="faultPart" :required="ifWriteFaultPart">
    <el-autocomplete
    v-model="form.faultPart"
    :fetch-suggestions="querySearchfaultPart"
    placeholder="请输入内容"
    clearable
    ></el-autocomplete>
</el-form-item>
```
```js
data(){
    let validateFaultPart = (rule, value, callback) => {
      if(this.ifWriteFaultPart) {
        if(value){
          callback()
        }else {
          callback(new Error("请输入故障部件"))
        }
      }else{
        callback()
      }
    }
    return {
        rules: {
            faultPart: [{validator: validateFaultPart}],
        }
    }
},
computed: {
  ifWriteFaultPart(){
    return this.form.eventStatus === '2'
    //当案件状态为2的时候，故障部件需要校验，是必填项
  }
},

```

### 但是在切换案件状态后，验证消息没有消失，这是因为，elementui的验证在加载页面的时候已经加载过来，所以，切换案件状态后之前的验证消息不会消失。这里就需要在案件状态里面加change方法，来手动移除校验结果
```html
<el-form-item label="案件状态" label-width="120px" ref="eventStatus">
  <el-select v-model="form.eventStatus" placeholder="请选择案件状态" @change="handSwitch">
    <el-option
    v-for="item in options1"
    :key="item.value"
    :label="item.label"
    :value="item.value">
    </el-option>
  </el-select>
</el-form-item>
```
```js
methods: {
  handSwitch(){
    this.getRefs(['faultPart', 'eventStatus'])
  },
  getRefs (data) {
    data.map(item => {
      this.$refs[item].clearValidate() // 移除校验结果
    })
  },
}
```