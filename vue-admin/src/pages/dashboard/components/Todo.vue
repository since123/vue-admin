<template>
    <div  class="checkbox">
        <div class="radio-text">
            <el-radio>全选</el-radio>
            <el-input v-model="inputValue" placeholder="Todo List"></el-input>
            <el-button type="primary" size="mini" @click="getTodoitem()">add</el-button>
        </div>
        <el-radio @delete="deleteTodoitem()" v-model="radio" label="1" class="radio-box" v-for="item in List" :key="item">{{item}}</el-radio>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>

</style>
