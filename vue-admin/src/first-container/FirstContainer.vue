<template>
  <el-container style="height: 100%; width: 100%; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)" router>
      <template
        v-for="route in $router.options.routes"
        v-if="route.children && route.children.length"
      >
        <el-menu v-for="item in route.children">
          <el-menu-item :key="route.path + '/' + item.path" :index="item.path">
            <i class="el-icon-message"></i>
            <span slot="title">{{ item.name }}</span>
          </el-menu-item>
          <!-- <el-menu-item index="2">
            <i class="el-icon-message"></i>文档
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-message"></i>引导页
          </el-menu-item>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-message"></i>权限测试页
            </template>
            <el-menu-item index="4-1">页面权限</el-menu-item>
            <el-menu-item index="4-2">指令权限</el-menu-item>
            <el-menu-item index="4-3">角色权限</el-menu-item>
          </el-submenu>
          <el-menu-item index="5">
            <i class="el-icon-message"></i>图标
          </el-menu-item>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-message"></i>组件
            </template>
            <el-menu-item index="6-1">富文本编辑器</el-menu-item>
            <el-menu-item index="6-2">Markdown</el-menu-item>
            <el-menu-item index="6-3">JSON编辑器</el-menu-item>
            <el-menu-item index="6-4">Splitpane</el-menu-item>
            <el-menu-item index="6-5">头像上传</el-menu-item>
            <el-menu-item index="6-6">Dropzone</el-menu-item>
            <el-menu-item index="6-7">Sticky</el-menu-item>
            <el-menu-item index="6-8">小组件</el-menu-item>
            <el-menu-item index="6-9">返回顶部</el-menu-item>
            <el-menu-item index="6-10">拖曳Dialog</el-menu-item>
            <el-menu-item index="6-11">拖曳Select</el-menu-item>
            <el-menu-item index="6-12">列表拖曳</el-menu-item>
            <el-menu-item index="6-13">可拖曳看板</el-menu-item>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-message"></i>图标
            </template>
            <el-menu-item index="7-1">键盘图标</el-menu-item>
            <el-menu-item index="7-1">拆线图</el-menu-item>
            <el-menu-item index="7-1">混合图标</el-menu-item>
          </el-submenu>
          <el-submenu index="8">
            <template slot="title">
              <i class="el-icon-message"></i>路由嵌套
            </template>
            <el-submenu index="8-1">
              <template slot="title">菜单1</template>
              <el-menu-item index="8-1-1">菜单1-1</el-menu-item>
              <el-submenu index="8-2">
                <template slot="title">菜单1-2</template>
                <el-menu-item index="8-2-1">菜单1-2-1</el-menu-item>
                <el-menu-item index="8-2-2">菜单1-2-2</el-menu-item>
              </el-submenu>
              <el-menu-item index="8-3">菜单1-3</el-menu-item>
            </el-submenu>
            <el-menu-item index="8-2">菜单2</el-menu-item>
          </el-submenu>
          <el-submenu index="9">
            <template slot="title">
              <i class="el-icon-message"></i>Table
            </template>
            <el-menu-item index="9-1">动态Table</el-menu-item>
            <el-menu-item index="9-2">拖曳Table</el-menu-item>
            <el-menu-item index="9-3">Table内编辑</el-menu-item>
            <el-menu-item index="9-4">综合Table</el-menu-item>
          </el-submenu>
          <el-submenu index="10">
            <template slot="title">
              <i class="el-icon-message"></i>综合实例
            </template>
            <el-menu-item index="10-1">创建文章</el-menu-item>
            <el-menu-item index="10-2">文章列表</el-menu-item>
          </el-submenu>
          <el-menu-item index="11">
            <i class="el-icon-message"></i>Tab
          </el-menu-item>
          <el-submenu index="12">
            <template slot="title">
              <i class="el-icon-message"></i>错误页面
            </template>
            <el-menu-item index="12-1">401</el-menu-item>
            <el-menu-item index="12-2">404</el-menu-item>
          </el-submenu>-->
        </el-menu>
      </template>
    </el-aside>
    <el-container>
      <el-header default-active="/" router>
        <i class="el-icon-s-fold">首页</i>
        <i class="el-icon-search"></i>
        <i class="el-icon-full-screen"></i>
      </el-header>
    </el-container>
  </el-container>
</template>
<script>
export default {}
</script>
<style scoped>
</style>
