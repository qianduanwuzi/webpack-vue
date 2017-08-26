<template>
    <div>
        this is two
        <ul>
            <slot name="item" v-for="(item, index) in items" :text="item.text">
                this is fault...
                <!-- 这里写入备用内容 -->
            </slot>
        </ul>
    </div>

</template>

<script>
export default {
    props: {
        items:{
            type: Array,
            default: function(){
                return ['props1']
            }
        }
    },
    data() {
        return {
            data1: 1
        }
    },
    computed: {


    },
    mounted: function () {


    },
    methods: {
        test(){
            alert('123')
        }
    },
    components: {}
}
</script>

<style>

</style>