<template>
    <button :class="css.btn" :style="newstyle" @click="clickBtn">
        {{name}}</button>
</template>

<script>
import css from './button.css';
export default {
    data() {
        return {
            css,
            newstyle: {
                color: this.colors,
                height: this.heights + 'px',
                width: this.widths + 'px'
            },
        }
    },
    props: {
        type: {
            type: String,
            default: 'login'
        },
        name: { //按钮名
            type: String,
            default: ''
        },
        colors: { //按钮颜色
            type: String,
            default: '#2496b0'
        },
        widths: {
            type: Number,
            default: 100
        },
        heights: {
            type: Number,
            default: 35
        },
        data: {
            // type: Object,
            default: ''
        },
        arr: {
            type: Array,
            default: []
        }
    },
    computed: {
    },
    mounted: function () {
    },
    methods: {
        clickBtn() {
            // console.log(this.heights,this.widths,this.data.user,this.arr)
            if (this.type == 'login') {
                this.$store.dispatch('loginAllow', {api:'/api/login',userInfo: this.data})
            }else{
                console.log(this.$root)
                console.log(this.$parent) //重在理解this作用域
                this.$emit('btnClickEvent')
            }
        }
    },
    components: {
    }
}
</script>

<style>

</style>