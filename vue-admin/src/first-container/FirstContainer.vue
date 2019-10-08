<template>
  <el-container style="height: 100%; width: 100%; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)" router>
      <template v-for="route in $router.options.routes">
        <el-menu v-for="item in route.children" :key="item.path">
          <el-submenu v-if="item.children && item.children.length" :index="item.path">
            <template slot="title">
              <i class="el-icon-message"></i>
              <span slot="title">{{ item.name }}</span>
            </template>
            <el-menu-item
              v-for="itemchildren in item.children"
              :key="item.path + itemchildren.path"
              :index="itemchildren.path"
            >
              <template v-if="authorityInfo === 'editor'">
                <template v-if="itemchildren.path != 'editorauthority'">
                  <i class="el-icon-message"></i>
                  <router-link
                    slot="title"
                    :to="item.path + itemchildren.path"
                  >{{ itemchildren.name }}</router-link>
                </template>
              </template>
              <div v-else-if="authorityInfo === 'visitor'">
                <div v-if="itemchildren.path != 'visitorauthority'">
                  <i class="el-icon-message"></i>
                  <router-link
                    slot="title"
                    :to="item.path + itemchildren.path"
                  >{{ itemchildren.name }}</router-link>
                </div>
              </div>
              <div v-else>
                <div>
                  <i class="el-icon-message"></i>
                  <router-link
                    slot="title"
                    :to="item.path + itemchildren.path"
                  >{{ itemchildren.name }}</router-link>
                </div>
              </div>
            </el-menu-item>
          </el-submenu>
          <el-menu-item :index="item.path" v-else>
            <i class="el-icon-message"></i>
            <router-link slot="title" :to="item.path">{{ item.name }}</router-link>
          </el-menu-item>
        </el-menu>
      </template>
    </el-aside>
    <el-container>
      <el-header>
        <el-menu default-active="/" router>
          <el-menu-item>
            <i class="el-icon-s-fold"></i>
            <router-link to="/dashboard/index">首页</router-link>
          </el-menu-item>
        </el-menu>
      </el-header>
      <router-view></router-view>
    </el-container>
  </el-container>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['authorityInfo'])
  }
}
</script>
<style scoped>
</style>
