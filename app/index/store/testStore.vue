<template>
    <div>
        <div>vuex的研究 {{getApp}}</div>
        <Com :datas="getApp"></Com>
    </div>
</template>

<script>
// import css from './login.css';
import Com from './com'
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            data: ''
        }
    },
    // computed: mapGetters({
    //     getApp: 'getApp'
    // }),
    computed: {
        ...mapGetters([
            'getApp'
        ])
    },
    mounted: function() {
        // this.data = 'new'
        this.$store.dispatch('setApp', 'wuzi')
    },
    methods: {

    },
    components: { Com }
}
</script>

<style>

</style>