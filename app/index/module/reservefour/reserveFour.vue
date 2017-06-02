<template>
  <div>
      多图片上传h5-fileReader读取文件
      <input type="file" id="file" multiple/>
      <div id="result"></div>
      <input type="button" value="读取图像" @click="readAsDataURL()" />
      <input type="button" value="读取二进制数据" @click="readAsBinaryString" />
      <input type="button" value="读取文本文件" @click="readAsText()" />   
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed:{
  },
  mounted: function(){
    
  },
  methods:{
    change(){
      var input = document.getElementById('file_input');

    },
    readAsBinaryString(){  
      alert('123')
      var file = document.getElementById("file").files[0];  
      var reader = new FileReader();  
      //将文件以二进制形式读入页面  
      reader.readAsBinaryString(file);  
      reader.onload=function(f){  
          var result=document.getElementById("result");  
          console.log(this.result)
          //显示文件  
          result.innerHTML=this.result;  
      }  
    },
    readAsDataURL(){  
        //检验是否为图像文件  
        var file = document.getElementById("file").files[0];  
        if(!/image\/\w+/.test(file.type)){  
            alert("看清楚，这个需要图片！");  
            return false;  
        }  
        var reader = new FileReader();  
        //将文件以Data URL形式读入页面  
        reader.readAsDataURL(file);  
        reader.onload=function(e){  
            var result=document.getElementById("result");  
            //显示文件  
            result.innerHTML='<img src="' + this.result +'" alt="" />';  
        }  
    },
    readAsText(){  
        var file = document.getElementById("file").files[0];  
        var reader = new FileReader();  
        //将文件以文本形式读入页面  
        reader.readAsText(file);  
        reader.onload=function(f){  
            var result=document.getElementById("result");  
            //显示文件  
            result.innerHTML=this.result;  
        }  
    }, 

  },
  components: {
  }
}
</script>

<style>

</style>