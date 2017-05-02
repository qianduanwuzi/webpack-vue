//封装map
function JzezMap(x,y,z){
    this.x = x; //坐标 数组
    this.y = y; //dom-id 地图显示
    this.z = z;
}

JzezMap.prototype.regeocoder = function(){
    var map = new AMap.Map(this.y, {
            resizeEnable: true,
            // zoom: 18
            zoom: this.z || 18
        });
        var geocoder = new AMap.Geocoder({
            radius: 1000,
            extensions: "all"
        });        
        geocoder.getAddress(this.x, function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
              var address = result.regeocode.formattedAddress; //返回地址描述 
              document.getElementById(this.y).innerHTML = address;
            }
        });        
        var marker = new AMap.Marker({  //加点
            map:map,
            position: this.x
        });
        map.setFitView();
}

module.exports= JzezMap;