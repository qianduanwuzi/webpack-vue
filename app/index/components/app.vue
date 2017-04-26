<template>
  <div id="app">
    <div class="nav">
        <leftsiderbar></leftsiderbar>
        111234
        <!--<router-link to="/second">Go to second</router-link>-->
    </div>
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

</style>