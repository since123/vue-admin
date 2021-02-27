<template>
  <div class="checkbox">
    <div class="radio-text">
      <el-input v-model="inputValue" placeholder="Todo List"></el-input>
      <el-button type="primary" size="mini" @click="getTodoitem()"
        >添加</el-button
      >
    </div>

    <transition-group tag="ul" name="list">
      <li
        v-for="(item, idx) in showFilterList"
        :key="showFilterList.length - idx"
      >
        <el-checkbox class="radio-box" v-model="item.resolved"></el-checkbox>
        <span>{{ item.content }}</span>
        <el-button
          @click="deleteitem(index)"
          type="text"
          icon="el-icon-delete"
          size="small"
        ></el-button>
      </li>
    </transition-group>

    <el-button-group>
      <el-button
        @click="currentFilter = 'all'"
        :type="currentFilter === 'all' ? 'primary' : 'default'"
        >全部</el-button
      >
      <el-button
        @click="currentFilter = 'resolved'"
        :type="currentFilter === 'resolved' ? 'primary' : 'default'"
        >已完成</el-button
      >
      <el-button
        @click="currentFilter = 'pendding'"
        :type="currentFilter === 'pendding' ? 'primary' : 'default'"
        >未完成</el-button
      >
    </el-button-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputValue: '',
      list: [
        {
          content: 'todoone',
          resolved: true,
          id: 1
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
          return this.list
        case 'resolved':
          return this.list.filter(item => item.resolved)
        case 'pendding':
          return this.list.filter(item => !item.resolved)
      }
    }
  },
  methods: {
    getTodoitem: function() {
      this.list.splice(0, 0, {
        content: this.inputValue,
        resolved: false
      })
      this.inputValue = ''
    },
    deleteitem: function(index) {
      this.List.splice(index, 1)
    }
  }
}
</script>
<style scoped>
ul {
  position: relative;
  padding-top: 18px;
}

li {
  display: block;
  margin-top: 8px;
  padding: 8px 12px;
}

.list-enter-active,
.list-leave-active,
.list-move {
  transition: transform 500ms cubic-bezier(0.59, 0.12, 0.34, 0.95),
    border 5000ms cubic-bezier(0.59, 0.12, 0.34, 0.95);
  transition-property: opacity, transform, border;
}

.list-enter {
  opacity: 0;
  transform: translateX(50px) scaleY(0.5);
  border: 1px solid red;
}

.list-enter-to {
  opacity: 1;
  transform: translateX(0) scaleY(1);
  border: 1px solid red;
}

.list-leave-active {
  position: absolute;
  border: 1px solid red;
  transition-duration: 5000ms;
}

.list-leave-to {
  opacity: 0;
  transform: scaleY(0);
  transform-origin: center top;
  border: 1px solid red;
}
</style>
