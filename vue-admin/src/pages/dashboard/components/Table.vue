<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="日期"></el-table-column>
    <el-table-column prop="name" label="姓名"></el-table-column>
    <el-table-column prop="address" label="地址"></el-table-column>
  </el-table>
</template>
<script>
// import tableData from '@/assets/table.json'
export default {
  data() {
    return {}
  },
  created() {
    console.log('table')
  }
}
</script>
