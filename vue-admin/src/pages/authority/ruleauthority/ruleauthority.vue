<template>
  <el-main>
    <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="rolekey" label="roleKey" width="150"></el-table-column>
    <el-table-column prop="roleName" label="roleName" width="150"></el-table-column>
    <el-table-column prop="description" label="description" width="150"></el-table-column>
    <el-table-column fixed="right" prop="operations" label="operations" width="150">
      <template slot-scope="scope">
        <el-button type="text" @click="editAuthority(scope.row)" size="small">编辑权限</el-button>
        <el-button type="text" @click="deleteAuthority(scope.$index, tableData)" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </el-main>
</template>
<script>
export default {
  data () {
    return {
      tableData: [
        {
          rolekey: 'admin',
          roleName: 'admin',
          description: 'Super Administrator. Have access to view all pages.'
        },
        {
          rolekey: 'editor',
          roleName: 'editor',
          description: 'Normal Editor. Can see all pages except permission page.'
        },
        {
          rolekey: 'visitor',
          roleName: 'visitor',
          description: 'Just a visitor. Can only see the home page and the document page.'
        }
      ]
    }
  },
  methods: {
    editAuthority (row) {
      alert(row)
    },
    deleteAuthority (index, rows) {
      rows.splice(index, 1)
    }
  }
}
</script>
