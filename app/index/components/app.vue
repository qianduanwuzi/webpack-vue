<template>
  <div class="container">
    <!--<div class="nav">-->
        <leftsiderbar></leftsiderbar>
        <!--<router-link to="/second">Go to second</router-link>-->
    <!--</div>-->
     <div class="main">
     <!-- 路由匹配到的组件将渲染在这里 -->
       <router-view></router-view>
     </div>
  </div>
</template>
<script>
// import Hello from './components/Hello'
import leftsiderbar from '../../portal/leftSiderBar'
export default {
//   name: 'apps',
  components: {
    leftsiderbar,
  }
}
</script>


<style>
    .container{
        position: relative;
        height: 960px;
        overflow: hidden;
        font-family: "Microsoft YaHei";
    }
    .main{
        position: absolute;
        left: 160px;
        top: 0px;
    }
</style>