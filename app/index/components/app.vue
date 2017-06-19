<template>
  <div class="container">
    <div class="nav">
        <router-view></router-view>
        <!--<leftsiderbar></leftsiderbar>-->
    </div>
     <!--<div class="main">-->
     <!-- 路由匹配到的组件将渲染在这里 -->
       <!--<router-view></router-view>-->
     <!--</div>-->
  </div>
</template>
<script>
import leftsiderbar from '../../portal/leftSiderBar'
export default {
//   name: 'apps',
  mounted: function(){
      $('.container').css('height',(document.body.clientHeight + 'px'))
      $('.main').css('height',(document.body.clientHeight + 'px'))
  },
  components: {
    leftsiderbar,
  }
}
</script>


<style>
    *{
        margin: 0;
        border: 0;
        padding: 0;
    }
    .nav{
        /*float: left;*/
        width:100%;
        height: 100%;
    }
    .container{
        /*position: relative;*/
        /*height: 960px;*/
        font-size: 14px;
        overflow: hidden;
        font-family: "Microsoft YaHei";
    }
    .main{
        float: right;
        width: 100%;
        /*position: absolute;*/
        top: 0px;
        background-color: #f7f7f7;
    }
</style>