<template>
    <ul>
        <slot name="item" v-for="item in items" :text="item.text">
            <!-- 这里写入备用内容 -->
        </slot>
    </ul>
</template>

<script>
export default {
    props: {
        items:{
            type: Array,
            default: function(){
                return []
            }
        }
    },
    data() {
        return {
        }
    },
    computed: {


    },
    mounted: function () {


    },
    methods: {

    },
    components: {}
}
</script>

<style>

</style>