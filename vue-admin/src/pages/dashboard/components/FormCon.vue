<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="年龄">
        <el-input v-model="formInline.age" placeholder="年龄"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  props: ['skip', 'formInline'],
  data() {
    return {}
  },

  methods: {
    submit() {
      this.$emit('submit', this.formInline)
    }
  },
  created() {
    // this.age = this.skip
  }
}
</script>
