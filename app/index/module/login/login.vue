<template>
    <div :class="css.loginBox">
    <!--<div :class="css.parallaxWindow" data-parallax="scroll" data-image-src="/bg.jpg">-->

        <div :class="css.loginInBox">
            <div :class="css.line">
                <label :class="css.label">用户名：</label>
                <input type="text" name="username" v-model="username" />
            </div>
            <div :class="css.line">
                <label :class="[css.keyword,css.label]">密</label>
                <label :class="css.label">码：</label>
                <input type="password" name="password" v-model="password" />
            </div>
            <div style="margin-left: 20px;display: flex;align-items: center">
                <input type="checkbox" v-model="checked">
                <label for="">记住密码</label>
            </div>
            <Btn name="登录" :widths="168" :heights="30" style="margin-left:87px" type="login" :data="datas" :arr="arrs"></Btn>
        </div>
    </div>
</template>

<script>
import Util from '../../../common/util'
import bg from '../../imgs/bg.jpg';
import css from './login.css';
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            css,
            password: '',
            username: '',
            arrs: [1, 2, 3],
            checked: false
        }
    },

    computed: {
        datas: function () {
            return Object.assign({ un: this.username }, { pw: this.password })
        },
        ...mapGetters({
            getLoginInfo: 'getLogin'
        })
    },
    mounted: function () {
            // <!--<button @click="login" name="登录" :class="css.login">登录</button>-->
        console.log('123123')
        this.setInfo();
    },
    methods: {
        // login() {
        //     if (this.check()) {
        //         if (this.username.trim() == 'wuzi' && this.password.trim() == 'gua66666') {
        //             // var date = new Date();
        //             // date.setTime(date.getTime() + 10 * 60 * 1000)
        //             // document.cookie = 'username=wuzi;expires=' + date.toUTCString();
        //             Util.setCookie(60,'username','wuzi');
        //             this.$router.push({ path: 'personalmes' })
        //             //   localStorage.setItem('username','wuzi')
        //         }
        //     } else {
        //         alert('账号密码不正确')
        //     }
        // },
        check() {
            return this.password.trim() != '' && this.username.trim() != ''
        },
        setInfo() {
            if (Util.getCookieOne('checked') == 'true') {
                this.checked = true;
                [this.username, this.password] = [Util.getCookieOne('username'), Util.getCookieOne('psw')]
            } else {
                this.checked = false;
            }
        }
    },
    components: {},
    watch: {
        "getLoginInfo.timeStamp": function () {
            // this.$store.state.loginStore.loginAllow
            if (this.getLoginInfo.loginAllow && this.check()) {
                Util.setCookie(60, 'username', 'wuzi');
                Util.setCookie(60, 'psw', 'gua66666');
                if (this.checked) Util.setCookie(60, 'checked', true);
                else Util.setCookie(60, 'checked', false);
                this.$router.push({ path: 'personalmes' });
                this.$store.dispatch('setTip', { msg: '登录成功', type: 'success' })
            } else {
                this.$store.dispatch('setTip', { msg: '账号密码不正确', type: 'err' })
            }
        },
        "checked": function () {
            // if (this.checked) {
            //     Util.getCookieOne('username');
            //     Util.getCookieOne('psw')
            // } else {

            // }
        },
    },
}
</script>

<style>

</style>