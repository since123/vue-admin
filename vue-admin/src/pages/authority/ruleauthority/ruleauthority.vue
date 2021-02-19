<template>
  <el-main>
    <el-dropdown :hide-on-click="false" @command="changeAuthority">
      <span class="el-dropdown-link">
        切换角色
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item divided command="admin">admin</el-dropdown-item>
        <el-dropdown-item divided command="editor">editor</el-dropdown-item>
        <el-dropdown-item divided command="visitor">visitor</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column
        prop="rolekey"
        label="roleKey"
        style="width: 15%"
      ></el-table-column>
      <el-table-column
        prop="roleName"
        label="roleName"
        style="width: 15%"
      ></el-table-column>
      <el-table-column
        prop="description"
        label="description"
        style="width: 30%"
      ></el-table-column>
      <el-table-column
        fixed="right"
        prop="operations"
        label="operations"
        style="width: 40%"
      >
        <template slot-scope="scope">
          <!-- <el-button type="text" @click="editAuthority(scope.row)" size="small">编辑权限</el-button> -->
          <el-button
            type="text"
            @click="deleteAuthority(scope.$index, tableData)"
            size="small"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </el-main>
</template>
<script>
import store from '../../../store'
import tracker from '@/mixins/tracker'

export default {
  mixins: [tracker],
  data() {
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
          description:
            'Normal Editor. Can see all pages except permission page.'
        },
        {
          rolekey: 'visitor',
          roleName: 'visitor',
          description:
            'Just a visitor. Can only see the home page and the document page.'
        }
      ]
    }
  },
  methods: {
    changeAuthority(command) {
      store.dispatch('editAuthority', command).then(res => {
        alert(res)
      })
    },
    deleteAuthority(index, rows) {
      rows.splice(index, 1)
    }
  }
}
</script>
<style scoped>
.el-dropdown {
  bottom: 10px;
}
</style>
