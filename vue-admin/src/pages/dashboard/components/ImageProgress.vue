<template>
  <div class="container">
    <el-image :src="majorImage">
      <div slot="error" class="image-slot">
        <i class="el-icon-picture-outline"></i>
      </div>
    </el-image>
    <div class="footer">
      <div class="sticker" @mouseover="getNewLocation()" @mouseout="getOldLocation()"></div>
      <el-image class="sticker-image" :class="{active: isActive}" :src="stickerImage" @mouseover="getNewLocation()" @mouseout="getOldLocation()"></el-image>
      <div class="progress">
        <el-progress :percentage="50"></el-progress>
        <el-progress :percentage="100" :format="format"></el-progress>
        <el-progress :percentage="80" status="success"></el-progress>
        <el-progress :percentage="70" status="warning"></el-progress>
        <el-progress :percentage="50" status="exception"></el-progress>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      majorImage: './static/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png',
      stickerImage: './static/f778738c-e4f8-4870-b634-56703b4acafe (1).gif',
      isActive: false
    }
  },
  methods: {
    format(percentage) {
      return percentage === 100 ? '满' : '{percentage}%'
    },
    getNewLocation() {
      this.isActive = true
    },
    getOldLocation() {
      this.isActive = false
    }
  }
}
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
  background: #fff;
}
.el-progress {
  padding: 10px;
}
.sticker-image {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  top: -85px;
  left: 35px;
  transition-duration: .4s;
}
.active {
  transform: rotate(-90deg) translate(-20px, 30px);/* Safari和Chrome */
  transition-duration: .5s;
}
.sticker {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  left: 30px;
  top: -30px;
  background: #fff;
}
.footer {
  position: relative;
}
.progress {
  position: relative;
  top: -60px;
}
</style>
