<template>
  <div>
    //H5 FormData研究
    <form enctype="multipare/form-data" method="post" name="fileinfo" id="fileinfo">
      <label>File to stash:</label>
      <input type="file" name="file" required>
    </form>

    <div id="Output"></div>
    <div @click="submit">stash the file !</div>
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

    },
    methods: {
      submit() {
        var form = document.forms.namedItem('fileinfo');
       var oData = new FormData(form);
       oData.append('test','test')
       console.log(oData)
        // fd.append("CustomField", "This is some extra data");
        // $.ajax({
        //   url: "",
        //   type: "POST",
        //   data: fd,
        //   processData: false,  // 不处理数据
        //   contentType: false   // 不设置内容类型
        // });
      },
    },
    components: {
    }
  }
</script>

<style>

</style>