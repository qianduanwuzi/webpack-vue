<template>
    <div style="height:100%">
        <div :class="css.menusBox">
            <div v-for="(one,index) in menus" @click="clickHandler(index)" :key="index">
                    <router-link :to='one.url' :class="[one.show ? css.highlight : '',css.everyBar]"><icon :iconname="one.iconname"></icon><span :class="css.iconname">{{one.name}}</span></router-link>
            </div>
        </div>
        <div style="float:right;width:89%;height:100%">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import css from './leftsiderbar.css';
import menu from './menu';
import icon from '../index/components/icon/icon';
export default {
  data () {
        return {
            css,
            menus: menu,
        }
  },
  computed:{
  },
  mounted:function(){
      //刷新
       this.menus.map((one,index) =>{
                if(one.url == this.$route.path) one.show = true
                else one.show = false
          })
  },
  methods:{
      //点击menu
      clickHandler: function(ind){
          this.menus.map((one,index) =>{
                if(index == ind) one.show = true
                else one.show = false
          })
        // this.menus.forEach((one,index)=>{
        //     if(index == ind) one.show = true
        //     else one.show = false
        // })
      },
  },
  components: {icon}
}
</script>

<style>
  
</style>