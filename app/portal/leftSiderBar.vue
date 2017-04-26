<template>
  <div>
       <!--<router-view></router-view>-->
       <div v-for="one in menus">
           <router-link :to='one.url' class="bar">{{one.name}}</router-link>
       </div>
  </div>
</template>

<script>
import menu from './menu';
export default {
//   name: 'apps',
  data () {
        return {
            menus: menu,
        }
  },
  computed:{
  },
  components: {
  }
}
</script>

<style>
    .bar{text-decoration: none}
</style>