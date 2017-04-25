<template>
    <div>
        <div v-for="n in 10">{{msg}}</div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                initmsg: 'Hello World bu wuzi'
            }
        },
        computed:{
            msg: function(){
                return this.initmsg.split('').reverse().join('');
            }
        },

    }
</script>

<style>
    html{
        background: green;
    }
</style>