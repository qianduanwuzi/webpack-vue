let Util = {
    //获取地理位置
    getLocation() {
        if (navigator.geolocation) {
            // return false;
            return new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition((position) => {
                    resolve(position)
                })
            }).then(function (res) {
                // console.log(res)
                return res
            })
        }
    },


    //设置cookies
    setCookie(min = 1, key, value) {
        var date = new Date();
        date.setTime(date.getTime() + min * 60 * 1000)
        // document.cookie = 'username=wuzi;expires=' + date.toUTCString();
        document.cookie = key + '=' + value + ';expires=' + date.toUTCString();
    },

    //判断cookies包含某一key
    getCookie(key) {
        let cookie = document.cookie;
        let each = cookie.split(';');
        let has = false;
        for (let i in each) {
            if (each[i].split('=')[0].trim() == key) {
                has = true;
                break;
            }
        }
        return has
    },

    //获取值
    getCookieOne(key) {
        let cookie = document.cookie;
        let each = cookie.split(';');
        for(let i in each){
            if(each[i].split('=')[0].trim() == key){
                return each[i].split('=')[1].trim()
            }
        }
    }

}

export default Util