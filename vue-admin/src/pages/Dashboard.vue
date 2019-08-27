<template>
    <el-container style="height: 100%; width: 100%; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu>
                <el-menu-item index="1"><i class="el-icon-message"></i>首页</el-menu-item>
                <el-menu-item index="2"><i class="el-icon-message"></i>文档</el-menu-item>
                <el-menu-item index="3"><i class="el-icon-message"></i>引导页</el-menu-item>
                <el-submenu index="4">
                    <template slot="title"><i class="el-icon-message"></i>权限测试页</template>
                    <el-menu-item index='4-1'>页面权限</el-menu-item>
                    <el-menu-item index="4-2">指令权限</el-menu-item>
                    <el-menu-item index="4-3">角色权限</el-menu-item>
                </el-submenu>
                <el-menu-item index="5"><i class="el-icon-message"></i>图标</el-menu-item>
                <el-submenu index="6">
                    <template slot="title"><i class="el-icon-message"></i>组件</template>
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
                    <template slot="title"><i class="el-icon-message"></i>图标</template>
                    <el-menu-item index="7-1">键盘图标</el-menu-item>
                    <el-menu-item index="7-1">拆线图</el-menu-item>
                    <el-menu-item index="7-1">混合图标</el-menu-item>
                </el-submenu>
                <el-submenu index="8">
                    <template slot="title"><i class="el-icon-message"></i>路由嵌套</template>
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
                    <template slot="title"><i class="el-icon-message"></i>Table</template>
                    <el-menu-item index="9-1">动态Table</el-menu-item>
                    <el-menu-item index="9-2">拖曳Table</el-menu-item>
                    <el-menu-item index="9-3">Table内编辑</el-menu-item>
                    <el-menu-item index="9-4">综合Table</el-menu-item>
                </el-submenu>
                <el-submenu index="10">
                    <template slot="title"><i class="el-icon-message"></i>综合实例</template>
                    <el-menu-item index="10-1">创建文章</el-menu-item>
                    <el-menu-item index="10-2">文章列表</el-menu-item>
                </el-submenu>
                <el-menu-item index="11"><i class="el-icon-message"></i>Tab</el-menu-item>
                <el-submenu index="12">
                    <template slot="title"><i class="el-icon-message"></i>错误页面</template>
                    <el-menu-item index="12-1">401</el-menu-item>
                    <el-menu-item index="12-2">404</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header>
                <i class="el-icon-s-fold">首页</i>
                <i class="el-icon-search"></i>
                <i class="el-icon-full-screen"></i>
                <i class=""></i>
                <i class=""></i>
                <i class=""></i>
            </el-header>
            <el-main class="main">
                <el-row :gutter="20">
                    <el-col :sm="12" :md="6" class="svg-icon svg-icon-1">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="icon-peoples" width="100%" height="100%">
                                <path  d="M95.648 118.762c0 5.035-3.563 9.121-7.979 9.121H7.98c-4.416 0-7.979-4.086-7.979-9.121C0 100.519 15.408 83.47 31.152 76.75c-9.099-6.43-15.216-17.863-15.216-30.987v-9.128c0-20.16 14.293-36.518 31.893-36.518s31.894 16.358 31.894 36.518v9.122c0 13.137-6.123 24.556-15.216 30.993 15.738 6.726 31.141 23.769 31.141 42.012z"></path>
                                <path  d="M106.032 118.252h15.867c3.376 0 6.101-3.125 6.101-6.972 0-13.957-11.787-26.984-23.819-32.123 6.955-4.919 11.638-13.66 11.638-23.704v-6.985c0-15.416-10.928-27.926-24.39-27.926-1.674 0-3.306.193-4.89.561 1.936 4.713 3.018 9.974 3.018 15.526v9.121c0 13.137-3.056 23.111-11.066 30.993 14.842 4.41 27.312 23.42 27.541 41.509z"></path>
                            </svg>
                            <div>
                                <p class="svg-icon-title">Message</p>
                                <p class="svg-icon-mount">7707097</p>
                            </div>
                        </div>
                    </el-col>
                    <el-col :sm="12" :md="6" class="svg-icon svg-icon-2">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="icon-message" width="100%" height="100%">
                                <path d="M0 20.967v59.59c0 11.59 8.537 20.966 19.075 20.966h28.613l1 26.477L76.8 101.523h32.125c10.538 0 19.075-9.377 19.075-20.966v-59.59C128 9.377 119.463 0 108.925 0h-89.85C8.538 0 0 9.377 0 20.967zm82.325 33.1c0-5.524 4.013-9.935 9.037-9.935 5.026 0 9.038 4.41 9.038 9.934 0 5.524-4.025 9.934-9.038 9.934-5.024 0-9.037-4.41-9.037-9.934zm-27.613 0c0-5.524 4.013-9.935 9.038-9.935s9.037 4.41 9.037 9.934c0 5.524-4.025 9.934-9.037 9.934-5.025 0-9.038-4.41-9.038-9.934zm-27.1 0c0-5.524 4.013-9.935 9.038-9.935s9.038 4.41 9.038 9.934c0 5.524-4.026 9.934-9.05 9.934-5.013 0-9.025-4.41-9.025-9.934z"></path>
                            </svg>
                            <div>
                                <p class="svg-icon-title">Message</p>
                                <p class="svg-icon-mount">7707097</p>
                            </div>
                        </div>
                    </el-col>
                    <el-col :sm="12" :md="6" class="svg-icon svg-icon-3">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="icon-money" width="100%" height="100%">
                                <path d="M54.122 127.892v-28.68H7.513V87.274h46.609v-12.4H7.513v-12.86h38.003L.099 0h22.6l32.556 45.07c3.617 5.144 6.44 9.611 8.487 13.385 1.788-3.05 4.89-7.779 9.301-14.186L103.93 0h24.01L82.385 62.013h38.34v12.862h-46.41v12.4h46.41v11.937h-46.41v28.68H54.123z"></path>
                            </svg>
                            <div>
                                <p class="svg-icon-title">Message</p>
                                <p class="svg-icon-mount">7707097</p>
                            </div>
                        </div>
                    </el-col>
                    <el-col :sm="12" :md="6" class="svg-icon svg-icon-4">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="icon-shopping" width="100%" height="100%">
                                <path d="M42.913 101.36c1.642 0 3.198.332 4.667.996a12.28 12.28 0 0 1 3.89 2.772c1.123 1.184 1.987 2.582 2.592 4.193.605 1.612.908 3.318.908 5.118 0 1.8-.303 3.507-.908 5.118-.605 1.611-1.469 3.01-2.593 4.194a13.3 13.3 0 0 1-3.889 2.843 10.582 10.582 0 0 1-4.667 1.066c-1.729 0-3.306-.355-4.732-1.066a13.604 13.604 0 0 1-3.825-2.843c-1.123-1.185-1.988-2.583-2.593-4.194a14.437 14.437 0 0 1-.907-5.118c0-1.8.302-3.506.907-5.118.605-1.61 1.47-3.009 2.593-4.193a12.515 12.515 0 0 1 3.825-2.772c1.426-.664 3.003-.996 4.732-.996zm53.932.285c1.643 0 3.22.331 4.733.995a11.386 11.386 0 0 1 3.889 2.772c1.08 1.185 1.945 2.583 2.593 4.194.648 1.61.972 3.317.972 5.118 0 1.8-.324 3.506-.972 5.117-.648 1.611-1.513 3.01-2.593 4.194a12.253 12.253 0 0 1-3.89 2.843 11 11 0 0 1-4.732 1.066 10.58 10.58 0 0 1-4.667-1.066 12.478 12.478 0 0 1-3.824-2.843c-1.08-1.185-1.945-2.583-2.593-4.194a13.581 13.581 0 0 1-.973-5.117c0-1.801.325-3.507.973-5.118.648-1.611 1.512-3.01 2.593-4.194a11.559 11.559 0 0 1 3.824-2.772 11.212 11.212 0 0 1 4.667-.995zm21.781-80.747c2.42 0 4.3.355 5.64 1.066 1.34.71 2.29 1.587 2.852 2.63a6.427 6.427 0 0 1 .778 3.34c-.044 1.185-.195 2.204-.454 3.057-.26.853-.8 2.606-1.62 5.26a589.268 589.268 0 0 1-2.788 8.743 1236.373 1236.373 0 0 0-3.047 9.453c-.994 3.128-1.75 5.592-2.269 7.393-1.123 3.79-2.55 6.42-4.278 7.89-1.728 1.469-3.846 2.203-6.352 2.203H39.023l1.945 12.795h65.342c4.148 0 6.223 1.943 6.223 5.828 0 1.896-.41 3.53-1.232 4.905-.821 1.374-2.442 2.061-4.862 2.061H38.505c-1.729 0-3.176-.426-4.343-1.28-1.167-.852-2.14-1.966-2.917-3.34a21.277 21.277 0 0 1-1.88-4.478 44.128 44.128 0 0 1-1.102-4.55c-.087-.568-.324-1.942-.713-4.122-.39-2.18-.865-4.904-1.426-8.174l-1.88-10.947c-.692-4.027-1.383-8.079-2.075-12.154-1.642-9.572-3.5-20.234-5.574-31.986H6.87c-1.296 0-2.377-.356-3.24-1.067a9.024 9.024 0 0 1-2.14-2.558 10.416 10.416 0 0 1-1.167-3.2C.108 8.53 0 7.488 0 6.54c0-1.896.583-3.46 1.75-4.69C2.917.615 4.494 0 6.482 0h13.095c1.728 0 3.111.284 4.148.853 1.037.569 1.858 1.28 2.463 2.132a8.548 8.548 0 0 1 1.297 2.701c.26.948.475 1.754.648 2.417.173.758.346 1.825.519 3.199.173 1.374.345 2.772.518 4.193.26 1.706.519 3.507.778 5.403h88.678z"></path>
                            </svg>
                            <div>
                                <p class="svg-icon-title">Message</p>
                                <p class="svg-icon-mount">7707097</p>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </el-container>
</template>

<script>
export default {

}
</script>

<style scoped>
    .main {
        background: #eaecef;
    }
    .el-icon-s-fold::before {
        margin-right: 20px
    }

    

    .svg-icon > div {
        background: #fff;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
    }

    @media screen and (max-width: 992px) {
        .svg-icon:nth-child(n+3) {
            margin-top: 15px;
        }
    }

    .svg-icon svg {
        box-sizing: border-box;
        width: 64px;
        height: 64px;
        padding: 10px;
        border-radius: 4px;
        transition: background ease-in-out .3s;
    }

    .svg-icon-1 svg path {
        fill: #40c9c6;
    }
    .svg-icon-2 svg path {
        fill: #36a3f7;
    }
    .svg-icon-3 svg path {
        fill: #f4516c;
    }
    .svg-icon-4 svg path {
        fill: #34bfa3;
    }

    .svg-icon:hover {
        cursor: pointer;
    }


    .svg-icon-1:hover svg {
        background-color: #40c9c6;
    }
    .svg-icon-2:hover svg {
        background-color: #36a3f7;
    }
    .svg-icon-3:hover svg {
        background-color:  #f4516c;
    }
    .svg-icon-4:hover svg {
        background-color:  #34bfa3;
    }

    .svg-icon-1:hover svg path, .svg-icon-2:hover svg path, .svg-icon-3:hover svg path, .svg-icon-4:hover svg path {
        fill: #fff;
    }
</style>
