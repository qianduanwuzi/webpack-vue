<template>
  <div>
    cookie的一些研究
    <div>{{has}}</div>
    <div @click="check">验证</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        has: ''
      }
    },
    computed: {
    },
    mounted: function () {
      console.log('19',navigator.geolocation())
      var date = new Date();
      date.setTime(date.getTime()+10*60*1000);//有效时间为10分钟
      document.cookie = 'tip=888;expires='+date.toUTCString();//max-age第一次为准进来设置有效时间。expires是最后一次为准设置
    },
    methods: {
      check() {
        let cookieArr = document.cookie;//key=value以；分开的字符串
        if (cookieArr) {
          var newArr = cookieArr.split(';');
          var hasTip = false;
          for (let i = 0; i < newArr.length; i++) {
            let one = newArr[i];
            let a = one.split('=')[0];
            // console.log(typeof a, a, a.trim() === 'tip')
            // console.log(i)
            if (a.trim() == 'tip') {
              this.has = '验证通过';
              hasTip = true;
              break
            }
          }
          if (!hasTip) this.has = "验证没通过"
        }
      },

    },
    components: {
    }
  }
</script>

<style>

</style>