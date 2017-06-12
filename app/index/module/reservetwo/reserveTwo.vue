<template>
  <div>
      <!--研究回调函数-->
      研究回调函数：
      <div>代码从上往下走，有时需要在a方法执行之后才执行b方法。函数也是个对象，可存在变量。所以可将之作为参数传给一个方法</div>
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
      // if(cb) {
      //   console.log('2');
      //   cb()
      // }
      cb();
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