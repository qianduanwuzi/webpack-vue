<template>
    <div> </div>
</template>

<script>
// import css from './login.css';
import { mapGetters } from 'vuex';
export default {
    props:{
        datas:{
            type: String,
            default: 'propdatas'
        }
    },
    data() {
        return {
          
        }
    },
    computed: {
        ...mapGetters([
            'getApp',
        ])
    },
    mounted: function () {
        // console.log(this.datas)
        // console.log('19--->',this.$store.getters.getApp);
    },
    methods: {
     
    },
    components: {},
    watch:{
        "datas": function(){
            console.log('123')
            console.log(this.datas)
        }
    }
}
</script>

<style>

</style>