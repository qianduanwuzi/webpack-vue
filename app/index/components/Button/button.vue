<template>
    <button :class="css.btn" :style="newstyle">{{name}}</button>
</template>

<script>
import css from './button.css';
export default {
    data() {
        return {
            css,
            newstyle:{
                color: this.color,
                height: this.heights + 'px',
                width: this.widths + 'px'
            },
        }
    },
    props:{
        name:{ //按钮名
            type: String,
            default: ''
        },
        color:{ //按钮颜色
            type: String,
            default:'#2496b0'
        },
        widths:{
            type: Number,
            default: 100
        },
        heights:{
            type: Number,
            default: 35
        }
    },
    computed: {
    },
    mounted: function () {

    },
    methods: {
      
    },
    components: {
    }
}
</script>

<style>

</style>