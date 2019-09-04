<template>
  <div  class="checkbox">
    <div class="radio-text">
      <el-radio>全选</el-radio>
      <el-input v-model="inputValue" placeholder="Todo List"></el-input>
      <el-button type="primary" size="mini" @click="getTodoitem()">添加</el-button>
    </div>
    <el-checkbox-group v-model="checkList" v-for="(item, index) in List" :key="index" >
      <el-checkbox  class="radio-box" :label="item"></el-checkbox>
      <el-button type="primary" size="mini"  @click="deleteitem(index)">删除</el-button>
    </el-checkbox-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkList: [],
      inputValue: '',
      List: []
    }
  },
  methods: {
    getTodoitem: function() {
      this.List.push(this.inputValue)
      this.inputValue = ''
    },
    deleteitem: function(index) {
      this.checked = true
      this.List.splice(index, 1)
    }
  }
}
</script>
<style scoped>
.radio-box {
  width: 100%;
  margin-right: 0;
  box-sizing: border-box;
  padding: 15px;
}

.el-radio {
  box-sizing: border-box;
  padding: 15px;
  margin-right: 0;
}
.radio-text {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-checkbox-group {
  display: flex;
}
</style>
