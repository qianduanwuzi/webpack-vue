<template>
  <div>
     <label>用户名：</label> <input type="text" name="username" v-model="username"/>
     <label>密码：</label> <input type="text" name="password" v-model="password"/>
     <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
        password:'',
        username:''
    }
  },
  computed:{
  },
  mounted: function(){
   
  },
  methods:{
      login(){
          if(this.check()){
              if(this.username == 'wuzi' && this.password == 'gua66666'){
                  localStorage.setItem('username','wuzi')
              }
          }else{
              alert('账号密码不正确')
          }
      },
      check(){
          return this.password.trim() != '' && this.username.trim() != ''
      },
  },
  components: {
  }
}
</script>

<style>

</style>