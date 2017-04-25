<template>
  <div id="app">
    <h1>Hello App!</h1>
    <div class="nav">
        <router-link to="/second">Go to second</router-link>
    </div>
     <div class="main">
     <!-- 路由匹配到的组件将渲染在这里 -->
       <router-view></router-view>
     </div>
  </div>
</template>

<script>
// import Hello from './components/Hello'
export default {
  name: 'apps',
  components: {
    // Hello
  }
}
</script>

<style>
body{
  background-color: #f8f8ff;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
.nav{
  position: fixed;
    width: 108px;
    left: 40px;
}
.nav ul{
list-style: none;
 margin: 0;
    padding: 0;
}
.nav ul li{
  width: 108px;
  height: 48px;
  line-height: 48px;
border:1px solid #dadada;
text-align: center;
}
.nav ul li a{
  text-decoration: none;
}
.main{
    height: 400px;
    margin-left: 180px;
    margin-right: 25px;
}
</style>