<template>
  <div>
    promise: from:
    <a href="http://es6.ruanyifeng.com/#docs/promise" target="blank">阮大师</a>
    <b>前提:</b>js是单线程的，任务自上而下，举例：如果请求接口时间过长，会造成页面假死
    <ul>
      <li>Promise 对象代表一个异步操作，有三种状态：Pending（进行中）、Resolved（已完成，又称 Fulfilled）和 Rejected（已失败）</li>
      <li>简单点来说：等有结果再执行then里的回调函数</li>
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
    // this.promise();// 1 4 3 2  --->Promise新建后立即执行，所以首先输出的是“1”。然后，then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，所以“2”最后输出。
    // this.test2(); //0-10 end 1 4 3 erroe mes 2
    // this.test3()
    this.test4().then(p => console.log(p))
  },
  methods: {
    //匿名函数
    // var a = function(a,b){

    // }
    promise() {
      let promise = new Promise(function (resolve, reject) {
        console.log('1');
        resolve();
        console.log('4')
      })
      promise.then(function () {
        console.log('2')
      })
      console.log('3')
    },
    test2() {
      let promise = new Promise(function (resolve, reject) {
        var a = 2;
        var error = 'erroe mes!'
        if (a == 1) {
          resolve(a)
        } else if (a != 1) {
          console.log('come in')
          reject(new Error(error)) //reject(error)
          console.log('come in 2')
        }
      })
      promise.then(function (a) {
        console.log(a)
      }, function (error) {
        console.log(error) //抛出异常  //error mes
      })
      for (let i = 0; i < 10; i++) {
        console.log(i)
      }
      console.log('end')
      this.promise()
    },
    test3() {
      let promise = new Promise(function (resolve, reject) {
        let p = { is: 'ok', data: 'success' };
        let err = '不可用';
        if (p.is == 'ok') resolve(p)
        else reject(err)
      })
      promise //then为Promise.prototype原生方法，返回值还是promise对象
        .then(function (p) {
          console.log('res-->', p)
          return p
        }, function (err) {
          console.log('error--->', err)
        })
        .then(function (res) { //拿到上一步p的值
          console.log('success--->', res)
        })
    },
    //test3()方法简写：箭头函数写法
    test4() {
      return new Promise(function (resolve, reject) {
        let a = { is: true, data: 'success' }
        let err = 'err mes'
        if (a.is) resolve(a)
      })
        .then(
        a => a
        )
        .then(
        res => res
        ).then(
          p => p
        )
    },
  },
  components: {
  }
}
</script>

<style>

</style>