<template>
    <div :class="tipInfo.type" style="display: show">
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
            newstyle: {
                color: this.colors,
                height: this.heights + 'px',
                width: this.widths + 'px'
            },
            tipInfo: {}
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
    },
    methods: {

    },
    components: {
    },
    watch: {
        "getTipInfo": function () {
            this.tipInfo = this.getTipInfo;
            this.$nextTick(function () {
                
            })
        }
    }
}
</script>

<style>

</style>