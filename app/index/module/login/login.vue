<template>
    <div :class="css.loginBox">
        <div :class="css.loginInBox">
            <div :class="css.line">
                <label :class="css.label">用户名：</label>
                <input type="text" name="username" v-model="username" />
            </div>
            <div :class="css.line">
                <label :class="[css.keyword,css.label]">密</label><label :class="css.label">码：</label>
                <input type="text" name="password" v-model="password" />
            </div>
            <button @click="login" name="登录" :class="css.login">登录</button>
            <!--<Btn name="登录" :widths="168" :heights="30" style="margin-left:87px" ></Btn>-->
        </div>
    </div>
</template>

<script>
import Btn from '../../components/Button/button';
import bg from '../../imgs/bg.jpg';
import css from './login.css';
export default {
    data() {
        return {
            css,
            password: '',
            username: ''
        }
    },
    computed: {
    },
    mounted: function () {

    },
    methods: {
        login() {
            if (this.check()) {
                if (this.username.trim() == 'wuzi' && this.password.trim() == 'gua66666') {
                    var date = new Date();
                    date.setTime(date.getTime() + 10 * 60 * 1000)
                    document.cookie = 'username=wuzi;expires=' + date.toUTCString();
                    this.$router.push({ path: 'personalmes' })
                    //   localStorage.setItem('username','wuzi')
                }
            } else {
                alert('账号密码不正确')
            }
        },
        check() {
            return this.password.trim() != '' && this.username.trim() != ''
        },
    },
    components: {Btn}
}
</script>

<style>

</style>