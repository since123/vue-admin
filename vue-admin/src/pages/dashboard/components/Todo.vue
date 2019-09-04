<template>
  <div class="checkbox">
    <div class="radio-text">
      <el-input v-model="inputValue" placeholder="Todo List"></el-input>
      <el-button type="primary" size="mini" @click="getTodoitem()">添加</el-button>
    </div>
    <ul>
      <li class="todo-item" v-for="(item, index) in showFilterList" :key="index">
        <el-checkbox class="radio-box" v-model="item.resolved"></el-checkbox>
        <span>{{item.content}}</span>
        <el-button @click="deleteitem(index)" type="text" icon="el-icon-delete" size="small"></el-button>
      </li>
    </ul>
    <el-button-group>
      <el-button
        @click="currentFilter='all'"
        :type="currentFilter === 'all' ? 'primary' : 'default'"
      >全部</el-button>
      <el-button
        @click="currentFilter='resolved'"
        :type="currentFilter === 'resolved' ? 'primary' : 'default'"
      >已完成</el-button>
      <el-button
        @click="currentFilter='pendding'"
        :type="currentFilter === 'pendding' ? 'primary' : 'default'"
      >未完成</el-button>
    </el-button-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputValue: '',
      List: [
        {
          content: 'todoone',
          resolved: true
        },
        {
          content: 'todotwo',
          resolved: false
        },
        {
          content: 'todothreen',
          resolved: true
        },
        {
          content: 'todofour',
          resolved: true
        },
        {
          content: 'todofive',
          resolved: false
        },
        {
          content: 'todosix',
          resolved: true
        }
      ],
      currentFilter: 'all'
    }
  },
  computed: {
    showFilterList() {
      switch (this.currentFilter) {
        case 'all':
        default:
          return this.List

        case 'resolved':
          return this.List.filter(item => item.resolved)

        case 'pendding':
          return this.List.filter(item => !item.resolved)
      }
    }
  },
  methods: {
    getTodoitem: function() {
      this.List.push({ content: this.inputValue, resolved: false })
      this.inputValue = ''
    },
    deleteitem: function(index) {
      this.List.splice(index, 1)
    }
  }
}
</script>
<style scoped>
.radio-text {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.radio-box {
  margin-right: 0;
  box-sizing: border-box;
  padding: 15px;
}

.todo-item {
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
}
.todo-item span {
  width: 100%;
  margin: auto;
}
.el-button-group {
  display: flex;
  justify-content: space-between;
}
</style>
