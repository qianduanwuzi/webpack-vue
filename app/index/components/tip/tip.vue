<template>
        <div :class="[css[tipInfo.type], css.tipBox]" :style="{display: show}">
            {{tipInfo.msg}}
        </div>
</template>

<script>
import css from './tip.css';
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            css,
            tipInfo: {},
            show: 'none'

        }
    },
    props: {

    },
    computed: {
        ...mapGetters({
            getTipInfo: 'getTip'
        })
    },
    mounted: function () {
        console.log('28--->', this.getTipInfo.timestamp, this.getTipInfo.time)
    },
    methods: {

    },
    components: {
    },
    watch: {
        "getTipInfo.timestamp": function () {
            this.show = 'block';
            this.tipInfo = this.getTipInfo;
            setTimeout(() => {
                this.show = 'none'
            }, this.getTipInfo.time)
        }
    }
}
</script>

<style>

</style>