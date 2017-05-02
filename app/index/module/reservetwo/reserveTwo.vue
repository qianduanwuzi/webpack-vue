<template>
  <div>
      <!--研究回调函数-->
      研究回调函数
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed:{
  },
  mounted: function(){
    this.test(this.haha())
  },
  methods:{
    test: function(c){
      //do something
      console.log('1');
      if(c) {
        alert('come')
        console.log('2');
        c()
      }
    },
    haha: function(){
      console.log('3')
    },
    hehe: function(){
      console.log('4');
    }
  },
  components: {
  }
}
</script>

<style>

</style>