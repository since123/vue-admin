<template>
  <div class="login">
    <h2>用户登录</h2>
    <el-form ref="form" :model="formInline" label-width="80px" :rules="rules">
      <el-form-item label="用户名：" prop="user">
        <el-input v-model="formInline.user" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input v-model="formInline.password" type='password' placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="login-button" @click="onSubmit">登录</el-button>
        <br>
        <router-link class="login-register" to="/register">注册</router-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formInline: {
        user: '',
        password: ''
      },
      rules: {
        user: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          console.log('submit!', this.formInline)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.login {
  position: fixed;
  left: 50%;
  top: 35%;
  transform: translate(-50%, -50%);
}

h2 {
  text-align: center;
}

.el-form {
  width: 400px;
}

.login-button {
  width: 100%;
}

.login-register {
  float: right;
}
</style>
