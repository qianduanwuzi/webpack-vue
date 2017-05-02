<template>
    <div :class="css.container">
          <div id="container"></div>
          <div id="tip">
              <b>经纬度 116.396574, 39.992706 的地理编码结果:</b>
              <span id="result"></span>
          </div>
      </div>
</template>

<script>
import JzezMap from './jzezMap'
import css from './reserveone.css'
export default {
  data () {
        return {
              css,
              zuobiao:[116.396574,39.992706],
              id:'container',
              zoom: 18,  
              lnglatXY: [116.396574, 39.992706] //已知点坐标
        }
  },
  computed:{
  },
  mounted: function(){
      new JzezMap(this.zuobiao,this.id,this.zoom).regeocoder();
  },
  methods:{
    //   clickHandler: function(){
    //   },
    //   created: function(){
    //     this.regeocoder()
    //   },
    //   regeocoder: function(){  //逆地理编码
    //     var map = new AMap.Map("container", {
    //         resizeEnable: true,
    //         zoom: 18
    //     });
    //     var geocoder = new AMap.Geocoder({
    //         radius: 1000,
    //         extensions: "all"
    //     });        
    //     geocoder.getAddress(this.lnglatXY, function(status, result) {
    //         if (status === 'complete' && result.info === 'OK') {
    //           var address = result.regeocode.formattedAddress; //返回地址描述 
    //           document.getElementById("result").innerHTML = address;
    //             // this.geocoder_CallBack(result);
    //         }
    //     });        
    //     var marker = new AMap.Marker({  //加点
    //         map:map,
    //         position: this.lnglatXY
    //     });
    //     map.setFitView();
    //   },
      // geocoder_CallBack: function(data){
      //   var address = data.regeocode.formattedAddress; //返回地址描述
      //   document.getElementById("result").innerHTML = address;
      // }
  },
  components: {}
}
</script>


<style>
  
</style>