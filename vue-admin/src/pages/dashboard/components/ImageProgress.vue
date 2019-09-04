<template>
  <div>
    <el-image :src="src">
      <div slot="error" class="image-slot">
        <i class="el-icon-picture-outline"></i>
      </div>
    </el-image>
    <el-progress :percentage="50"></el-progress>
    <el-progress :percentage="100" :format="format"></el-progress>
    <el-progress :percentage="80" status="success"></el-progress>
    <el-progress :percentage="70" status="warning"></el-progress>
    <el-progress :percentage="50" status="exception"></el-progress>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
      src: './static/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png'
    }
  },
  methods: {
    format(percentage) {
      return percentage === 100 ? '满' : '{percentage}%'
    }
  }
}
</script>
<style scoped>
.el-progress {
  padding: 15px;
}
</style>
