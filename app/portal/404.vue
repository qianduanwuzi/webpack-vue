<template>
    <div :class="css.box">
        <div :class="css.tipBox">
            <div :class="css.num">404</div>
            <div :class="css.text">对不起，您访问的地址有误或者页面不存在...</div>
            <a @click="backToLast" :class="css.back">返回上一页</a>
        </div>
    
    </div>
</template>

<script>
import css from './404.css'
export default {
    data() {
        return {
            css
        }
    },
    props: {

    },
    computed: {
    },
    mounted: function () {

    },
    methods: {
        backToLast() {
            this.$router.go(-1)
        },

    },
    components: {
    }
}
</script>

<style>

</style>