<template>
    <div>
        <span> {{test}} </span>
        <button @click="clickBtn('123')">{{count}}</button>
    </div>
</template>

<script>
export default {
    props: {
        tests: {
            default: '',
            Type: String
        },
        testC: [String, Number],
        testB: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            count: 1,
        }
    },
    computed: {
        test: function () {
            return this.tests.toLowerCase();
        },

    },
    mounted: function () {

        // 
        // this.$set(this.datalist, 1, 10)
    },
    methods: {
        clickBtn(s) {
            this.count += 1;
            this.$emit('clickbtn',s)
        },
    },
    components: {}
}
</script>

<style>

</style>