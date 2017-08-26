<template>
    <div>
        <!--<div v-for="(one,index) in datalist">
                                        {{one}}
                                    </div>-->
    
        <!--<div @click="click('mes', $event)">click me</div>-->
    
        <!--<a v-on:click.stop="doThis">doThis</a>-->
    
        <!--<div style="width:500px;height:500px" @click.self="clickBox">
                                        <div @click.self="clickchild">child</div>
                                    </div>-->
    
        <!--<button @keyup.enter="submit">键值修饰符</button>
                                    <input type="text" @keyup.enter="input" v-model="inputdata" /> -->
    
        <!--<select name="" id="" v-model="selected" @change="showchange">
                                        <option value="1">a</option>
                                    </select>-->
    
        <!--<select name="" id="" v-model="selected" @change="showchange">
                                        <option :value="{num: 1}">a</option>
                                    </select>-->
    
        <!--<input v-model.trim="msg">-->
    
        <!--<p>{{total}}</p>
                                    <one :tests="test" testB="asd" @clickbtn='clickbt'></one>-->
    
        <!--<two :items="items">
                                    <template slot="item" scope="props">
                                        <li>{{props.text}}</li>
                                    </template>
                                </two>-->
    
        <button @click="click(1)">nav1</button>
                    <button @click="click(2)">nav2</button>
                    <keep-alive>
                        <component :is="currentView"></component>
                    </keep-alive>
    
        <span class="mes">{{mes | upcase}}</span>
    
        <div v-showvalue="mes" v-bg="blue"></div>
    
        <div v-bg="red">123</div>
    
        <div>{{mx}}</div>
        <!--<div id="hook-arguments-example" v-demo:hello.a.b="message"></div>-->
    
        <div v-html="html"></div>
    
        <div @click="testTip()">测试tip</div>

        <div>
            <two ref="two"></two>
        </div>
        <three></three>
    </div>
</template>

<script>
var three = require('./three')
import one from './one.vue';
import two from './two.vue';
import myMixin from '../../mixin/mixin.js';
var nav1 =   '<p>this is nav1</p>' ;
var nav2 =  '<p>this is nav2</p>' ;
// Vue.component('temp', {
//     template: '<div>{{ message }}</div>',
//     data: function(){
//         return {
//             message: 'this is message'
//         }
//     }
// })
export default {
    mixins: [myMixin],
    props: {
    },
    data() {
        return {
            datalist: [1, 2, 3, 4, 5],
            inputdata: '',
            selected: '',
            test: 'dAC',
            total: 1,
            items: [{ text: 'a' }, { text: 'b' }, { text: 'c' }],
            currentView: nav1,
            mes: 'old mes',
            age: 20,
            html: 'lala<p>this is a html text</p>lala'
        }
    },
    computed: {

    },
    // beforeCreate: function() {
    //     alert('1')
    // },
    // created:function() {
    //     alert('2')
    // },
    // beforeMount:function(){
    //     alert('3')
    // },
    // mounted:function(){
    //     alert('4')
    // },
    mounted: function () {
        console.log($('.mes'))
        console.log('111',module)
        console.log(this.tests)
        // console.log(nav1)
        // console.log(this.myMethod(this.age))
        // 
        // this.$set(this.datalist, 1, 10)
        this.mes = 'new mes';
        this.age = 21;
        console.log(this.$el.textContent);
        this.$nextTick(function () {
            console.log(this.$el.textContent);
        })
        console.log(this.mes)
    },
    methods: {
        testTip() {
            // this.$refs.two.test();
            console.log(this.$refs.two)
            this.$store.dispatch('setTip', { msg:'success' })
        },
        click(i) {
            if (i == 1) this.currentView = one
            if (i == 2) this.currentView = two
        }

        // clickbt(test) {
        //     alert(test)
        //     this.total += 1;
        // },

        // click(mes, event){
        //     console.log(event)
        // }

        // doThis(){
        //     alert('123')
        // }

        // clickBox(){
        //     alert('clickBox')
        // },
        // clickchild(){
        //     alert('clickchild')
        // }

        // submit(){
        //     alert('123')
        // },
        // input(){
        //     alert(this.inputdata)
        // },

        // showchange(){
        //     console.log(this.selected.num)
        // }
    },
    components: { one, two, three }
}
</script>

<style>

</style>