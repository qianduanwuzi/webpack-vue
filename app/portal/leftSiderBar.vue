<template>
        <div class="menusBox">
            <!--<router-view></router-view>-->
            <div v-for="one in menus" class="everyBar">
                <!--<icon :iconname="one.iconname"></icon>-->
                <router-link :to='one.url' class="bar"><icon :iconname="one.iconname"></icon>{{one.name}}</router-link>
            </div>
        </div>
</template>

<script>
import menu from './menu';
import icon from '../index/components/icon/icon';
export default {
//   name: 'apps',
  data () {
        return {
            menus: menu,
        }
  },
  computed:{
  },
  components: {icon}
}
</script>

<style>
    .bar{text-decoration: none;width:100%;display: block;}
    .everyBar{font-size: 14px;border-top: 1px solid #F0F0F0;box-shadow: inset 0 1px 1px #FAFAFA;height: 45px;line-height: 45px;}
    .menusBox{    
        background: #F7F7F7;
        border-right: 1px solid #e5e5e5;
        position: absolute;
        top: 0;
        bottom: 0;
        height: 100%;
        left: 0;
        width: 150px;
        overflow: hidden;
        /*-webkit-transition: width .2s linear;
        transition: width .2s linear;
        -webkit-transform: translateZ(0) scale(1,1);*/
        box-shadow: 1px 0 15px rgba(0, 0, 0, 0.07);
        opacity: 1;
    }
</style>