<template>
  <div>
    <div id="map" style="display: none"></div>
    cookie的一些研究
    <div>{{has}}</div>
    <div @click="check">验证</div>
  </div>
</template>

<script>
import JzezMap from '../../../common/jzezMap'
import Util from '../../../common/util'
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      has: '',
      address:''
    }
  },
   props:{
        test:{
            type: String,
            default: ''
        }
    },
  computed: {
      ...mapGetters({
            getTipInfo: 'getTip'
        })
  },
  mounted: function () {
    console.log(this)
    // console.log('19--->',this.$store.getters.getApp);
    this.getAddress()

    var date = new Date();
    date.setTime(date.getTime() + 10 * 60 * 1000);//有效时间为10分钟
    document.cookie = 'tip=888;expires=' + date.toUTCString();//max-age第一次为准进来设置有效时间。expires是最后一次为准设置
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
    getLocation() {
      Util.getLocation().then(res => { console.log(res) })
    },
    getAddress() {
      Util.getLocation().then(res => {
        let jw = res.coords;
        let arr = Array.prototype.concat(jw.longitude,jw.latitude)
        let mp = new JzezMap(arr,'map',);
        mp.getAddress((a) => {
          alert('23',a)
          console.log('4',a)
          this.address = a;
        });
        if(this.address == '') this.address = '欢迎苏州的用户来访问'
      })

    }

  },
  components: {
  },
   watch: {
        "getTipInfo.timestamp": function () {
            alert('---')
        }
    }
}
</script>

<style>

</style>