<template>
  <el-container style="height: 100%; width: 100%; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)" router>
      <div v-for="(route, index) in $router.options.routes" :key="index">
        <el-menu>
          <template v-for="item in route.children">
            <el-submenu
              v-if="item.children && item.children.length"
              :index="item.path"
              :key="item.path"
            >
              <div slot="title">
                <i class="el-icon-message"></i>
                <span slot="title">{{ item.name }}</span>
              </div>
              <el-menu-item
                v-for="itemchildren in item.children"
                :key="item.path + itemchildren.path"
                :index="itemchildren.path"
              >
                <div v-if="authorityInfo === 'editor'">
                  <template v-if="itemchildren.path != 'editorauthority'">
                    <i class="el-icon-message"></i>
                    <router-link
                      slot="title"
                      :to="item.path + itemchildren.path"
                      >{{ itemchildren.name }}</router-link
                    >
                  </template>
                </div>
                <div v-else-if="authorityInfo === 'visitor'">
                  <div v-if="itemchildren.path != 'visitorauthority'">
                    <i class="el-icon-message"></i>
                    <router-link
                      slot="title"
                      :to="item.path + itemchildren.path"
                      >{{ itemchildren.name }}</router-link
                    >
                  </div>
                </div>
                <div v-else>
                  <div>
                    <i class="el-icon-message"></i>
                    <router-link
                      slot="title"
                      :to="item.path + itemchildren.path"
                      >{{ itemchildren.name }}</router-link
                    >
                  </div>
                </div>
              </el-menu-item>
            </el-submenu>
            <el-menu-item :index="item.path" :key="item.path" v-else>
              <i class="el-icon-message" :index="item.path"></i>
              <router-link slot="title" :to="item.path">{{
                item.name
              }}</router-link>
            </el-menu-item>
          </template>
        </el-menu>
      </div>
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
      <div style="padding: 20px">
        <router-view></router-view>
      </div>
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
<style scoped></style>
