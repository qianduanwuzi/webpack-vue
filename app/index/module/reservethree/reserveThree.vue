<template>
  <div>
      call方法研究
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
    this.one.call(this.two,1,2)
  },
  methods:{
    one: function(a,b){
      console.log(a-b)
    },
    two: function(a,b){
      console.log(a+b)
    },

  },
  components: {
  }
}
</script>

<style>

</style>