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
      a:'abc',
      b:[1,2,3]
    }
  },
  computed:{
  },
  mounted: function(){
    this.test(this.haha)
    // this.testone(1,2,3)
  },
  methods:{
    testone: function(a,b,c){
      console.log(arguments)
    },
    test: function(cb){
      //do something
      console.log('1');
      // let a = '3'
      // cb && cb(a)
      if(cb) {
        console.log('2');
        cb()
      }
      console.log('4')
    },
    haha: function(){
      console.log('3')
    },
  },
  components: {
  }
}
</script>

<style>

</style>