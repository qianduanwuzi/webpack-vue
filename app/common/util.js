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
    setCookie(min = 10, key, value) {
        var date = new Date();
        date.setTime(date.getTime() + min * 60 * 1000)
        // document.cookie = 'username=wuzi;expires=' + date.toUTCString();
        document.cookie = key + '=' + value + ';expires=' + date.toUTCString();
    },

    //获取cookies某一key
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
    }

}

export default Util