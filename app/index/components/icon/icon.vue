<template>
    <span>
        <span :class='[iconCss.iconfont, iconCss[iconname]]'></span>
    </span>
</template>
<script>
import iconCss from "./icon.css";
export default {
  data: function(){
      return{
          iconCss,
      }
  },
  props:{
      iconname:{
        //   default:'icon-gerenxinxi'
      }
  },
  components: {
  }
}
</script>


<style>
    .container{
    }
    .main{
    }
</style>