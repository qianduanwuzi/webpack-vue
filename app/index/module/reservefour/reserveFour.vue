<template>
  <div>
    <!--<div>
        <b>多图片上传h5-fileReader读取文件</b>
        <ul>
          <li>一般传二进制/file数组给后台，后台回传个url</li>
        </ul>
      </div>
      <input type="file" id="file" multiple/>
      <div id="result"></div>
      <input type="button" value="读取图像" @click="readAsDataURL()" />
      <input type="button" value="读取二进制数据" @click="readAsBinaryString" />
      <input type="button" value="读取文本文件" @click="readAsText()" />   -->
    <div id="result"></div>
    <div v-for="one in imgList">
      <img :src='one.src' :class='css.img' />
    </div>
    <input type="file" id="file" value="添加文件" multiple @change="readAsDataURL"/>
    <span @click="readAsDataURL">+</span>
  </div>
</template>

<script>
  import css from './reserveFour.css';
  export default {
    data() {
      return {
        css,
        imgList: [],
      }
    },
    computed: {
    },
    mounted: function () {

    },
    methods: {
      readAsBinaryString() {
        alert('123')
        var file = document.getElementById("file").files;
        console.log(file);
        var reader = new FileReader();
        //将文件以二进制形式读入页面  
        reader.readAsBinaryString(file);
        reader.onload = function (f) {
          var result = document.getElementById("result");
          //显示文件  
          result.innerHTML = this.result;
        }
      },
      readAsDataURL() {
        //检验是否为图像文件  
        
        // if(!/image\/\w+/.test(file.type)){  
        //     alert("看清楚，这个需要图片！");  
        //     return false;  
        // }  
        new Promise(function(resolve,reject){
           var data = [];
           var file = document.getElementById("file").files;
          //  console.log(file)
           for (let i = 0; i < file.length; i++) {
              var reader = new FileReader();
              reader.readAsDataURL(file[i]);
              reader.onload = function (e) { //e.target.value
                 // console.log(this.result)
                 data.push({ src: this.result });
                //  console.log('67',data);
                 if(i == file.length-1){
                   resolve(data)
                 }
              }
            }
        }).then(data=>
            this.imgList = this.imgList.concat(data)
        )
        // const data = Object.keys(file).map(item => {
        //   const reader = new FileReader()
        //   debugger
        //   reader.readAsDataURL(file[item])
        //   return reader.onload(e => ({ src: e.result }))
        // }
        // // )
        // console.log('79',this.imgList);
        // console.log('80',this.imgList.concat(data));
        // for(let m = 0;)
      
        // this.imgList = data;
        // console.log('83',this.imgList)


        //将文件以Data URL形式读入页面  
        //  var reader = new FileReader();
        // reader.readAsDataURL(file);
        // reader.onload=function(e){  
        //   console.log(this.result)
        //     var result=document.getElementById("result");  
        //     //显示文件  
        //     result.innerHTML='<img src="' + this.result +'" alt="" />';  
        // }  
      },
      readAsText() {
        var file = document.getElementById("file").files[0];
        var reader = new FileReader();
        //将文件以文本形式读入页面  
        reader.readAsText(file);
        reader.onload = function (f) {
          var result = document.getElementById("result");
          //显示文件  
          result.innerHTML = this.result;
        }
      },

    },
    components: {
    }
  },
 
</script>

<style>

</style>