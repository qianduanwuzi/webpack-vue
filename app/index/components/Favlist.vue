<template>
    <div>
        <div v-for="n in 10">{{msg}}456</div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'Hello World'
            }
        }
    }
</script>

<style>
    html{
        background: red;
    }
</style>