<template>
    <div>
        <button @click="showChildren">this is children</button>
        <div name="123" ref="a1">123</div>
        <div>{{message}}</div>
        <Btn name="test" :widths="168" :heights="30" style="margin-left:87px" type="login" :data="datas" ref="b1" @btnClickEvent="clickBtnTest" :type="test"></Btn>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'this is mes1',
            test:'test'
        }
    },
    props: {

    },
    computed: {
    },
    mounted: function () {
    },
    methods: {
        showChildren() {
            // console.log(this.$refs.a1)
            // console.log(this.$refs.b1)
            // alert(this.$refs.a1.name)
            // alert(this.$refs.b1.name)
            let arr = this.$children;
            for (let i = 0; i < arr.length; i++) {
                console.log(arr[i])
                alert(arr[i].name)
            }
        },
        clickBtnTest() {
            console.log(this.$root)
            console.log(this.$parent)
        }
    },
    components: {
    }
}
</script>

<style>

</style>