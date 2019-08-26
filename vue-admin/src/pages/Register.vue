<template>
  <div class='register'>
    <h2>用户注册</h2>
    <el-form class='el-form' ref="ruleForm" :model='ruleForm' label-width='100px' :rules='rules'>
      <el-form-item label='用户名：' prop='user'>
        <el-input v-model="ruleForm.user" placeholder="用户名："></el-input>
      </el-form-item>
      <el-form-item label='密码:' prop='password'>
        <el-input type='password' placeholder="密码" v-model='ruleForm.password'></el-input>
      </el-form-item >
      <el-form-item label='确认密码:' prop='checkpassword'>
        <el-input type='password' placeholder="再输入一次密码"  v-model='ruleForm.checkpassword'></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
        <router-link to='/'>去登录页</router-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkpassword !== '') {
          this.$refs['ruleForm'].validateField('checkpassword')
        }
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        user: '',
        password: '',
        checkpassword: ''
      },
      rules: {
        user: [
          { required: true, message: '请输入您的姓名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ],
        checkpassword: [
          { required: true, validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style scoped>
.register {
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
</style>
