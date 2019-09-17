<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column fixed prop="rolekey" label="roleKey" width="150"></el-table-column>
    <el-table-column fixed prop="roleName" label="roleName" width="150"></el-table-column>
    <el-table-column fixed prop="description" label="description" width="150"></el-table-column>
    <el-table-column fixed prop="operations" label="operations" width="150"></el-table-column>
    <template slot-scope="scope">
      <el-button type="text" size="small">编辑权限</el-button>
      <el-button type="text" size="small">删除</el-button>
    </template>
  </el-table>
</template>
