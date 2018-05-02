<template>
    <div>
        <button @click="showChildren">this is children</button>
        <div name="123" ref="a1" class="123">123</div>
        <input size="25" type="text" id="myText" value="A cat played with a ball">
        <div>{{message}}</div>
        <Btn name="test" :widths="168" :heights="30" style="margin-left:87px" type="login" :data="datas" ref="b1" @btnClickEvent="clickBtnTest" :type="test"></Btn>
        <div @click="copy">复制</div>
        <!-- <textarea name="" id="copy" style="position: absolute; left: -9999px;top: 0"></textarea> -->
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
        asyncData(cb) {
            alert('1')
            cb && cb()
            alert('2')
        },
        showChildren() {
            let arr = this.$children;
            for (let i = 0; i < arr.length; i++) {
                console.log(arr[i])
                alert(arr[i].name)
            }
        },
        clickBtnTest() {
            console.log(this.$root)
            console.log(this.$parent)
        },
        copy() {
            // console.log(document.getElementById("myText").value)
            if(!document.getElementById('copy')) {
                var target = document.createElement("textarea");
                target.style.position = "absolute";
                target.style.left = "-9999px";
                target.style.top = "0";
                target.id = 'copy';
                document.body.appendChild(target);
            }
            document.getElementById('copy').textContent = document.getElementById("myText").value;
           document.getElementById("copy").select()
            if(document.execCommand("Copy")){
            } // 执行浏览器复制命令

           
        }
    },
    components: {
    }
}
</script>

<style>

</style>