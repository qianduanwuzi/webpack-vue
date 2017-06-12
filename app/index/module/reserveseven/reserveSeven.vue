<template>
  <div>
      <b>generator研究</b>
      <ul>
          <li>* + yield + next()</li>
          <li>next()从上次执行位置继续往下执行待再遇到yield停止</li>
          <li>如果yield后面的语句不输出，直接输出yield语句值为{value：'',done: Boolean}</li>
          <li>next(xx)如果带参数，默认是上次yield返回的值</li>
      </ul>

  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    computed: {
    },
    mounted: function () {
        // -----------
    //    let a = this.test();
    //    a.next(); // hello
    //    console.log(a.next()); //1 {value:'world',done:false}
    //    console.log(a.next()); //2 {value:'over',done:false}
    //    console.log(a.next()); //3 {value:undefined,done:true}

        // ------------
    //     let b = this.test1();
    //     console.log(b); //generator()
    //     console.log(b.next()); //this is test1  {value:undefined, done:true}  

        // ------------
    //      let c = this.test2();
    //      console.log(c.next()) //{value:0,done:false}
    //      console.log(c.next()) //test2 is coming  i == 0 {value:1,done:false}
        // ------------
            var b = this.test3(5);
            console.log(b.next()) // { value:6, done:false }
            console.log(b.next(12)) // { value:8, done:false }
            b.next(13) // { value:42, done:true }

    },
    methods: {
        //每次调用next方法，内部指针就从函数头部或上一次停下来的地方开始执行
        *test(){ 
            yield console.log('hello');
            console.log('1');
            yield 'world';
            console.log('2');
            yield 'over';
            console.log('3')
        },
        //gennerator函数只有你使用next（）方法时才会执行
        *test1(){
            console.log('this is test1')
        },
        *test2(){
            for(let i =0;i < 5; i++){
                let b = yield i ;
                console.log(b) //undefined
                console.log('test2 is coming')
                if(!i) console.log('i == 0') 
            }
        },
        *test3(x){
            var y = 2 * (yield (x + 1)); // b.next(12)--->var y = 2 * 12
            var z = yield (y / 3); 
            return (x + y + z);
        }
    },
    components: {
    }
  }
</script>

<style>

</style>