//封装map
function JzezMap(x,id,z,ra,ex){
    this.x = x; //坐标 数组
    this.id = id; //dom-id 地图显示
    this.z = z;
    this.map = new AMap.Map(id,{
        resizeEnable: true,
        zoom: z || 18,  //地图显示的缩放级别，若center与level未赋值，地图初始化默认显示用户所在城市范围
        isHotspot: true //地图热点
    });

    this.geocoder = new AMap.Geocoder({
        radius: ra || 1000,
        extensions: ex || "all"
    });

    this.marker = new AMap.Marker({  //标记位置
        map:this.map,
        position: x
    });

    this.placeSearch = new AMap.PlaceSearch(); //构造地点查询类

    this.infoWindow=new AMap.AdvancedInfoWindow({});

    this.map.on('hotspotclick', (result) => {
        this.placeSearch.getDetails(result.id, (status, result) => {
            if (status === 'complete' && result.info === 'OK') {
                this.placeSearch_CallBack(result);
            }
        });
    });

    this.placeSearch_CallBack = function(data){
        var poiArr = data.poiList.pois;
        var location = poiArr[0].location;
        this.infoWindow.setContent(this.createContent(poiArr[0]));
        this.infoWindow.open(this.map,location);
    }

    this.createContent = function(poi){
        console.log(poi)
        var s = [];
        s.push('<div class="info-title">'+poi.name+'</div><div class="info-content">'+"地址：" + poi.address);
        s.push("电话：" + poi.tel);
        s.push("类型：" + poi.type);
        s.push('<div>');
        return s.join("<br>");
    }

    return this
}

//获取地址
JzezMap.prototype.getAddress = function(cb){
    return this.geocoder.getAddress(this.x, function(status, result) {
        var address;
         if (status === 'complete' && result.info === 'OK') {
             address =  result.regeocode.formattedAddress; 
            cb && cb(address)
         }
    })
};

//地图加点
JzezMap.prototype.setFitView = function(){
    this.map.setFitView();
}





// JzezMap.prototype.regeocoder = function(){
//     var map = new AMap.Map(this.y, {
//             resizeEnable: true,
//             // zoom: 18
//             zoom: this.z || 18
//         });
//         var geocoder = new AMap.Geocoder({
//             radius: 1000,
//             extensions: "all"
//         });        
//         geocoder.getAddress(this.x, function(status, result) {
//             if (status === 'complete' && result.info === 'OK') {
//               var address = result.regeocode.formattedAddress; //返回地址描述 
//               return address;
//             //   document.getElementById(this.y).innerHTML = address;
//             }
//         });        
//         var marker = new AMap.Marker({  //加点
//             map:map,
//             position: this.x
//         });
//         // map.setFitView();
// }

module.exports= JzezMap;