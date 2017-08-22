<template>
    <base-forms :data="formData" :errorMsg="errorMsg">
        {{formData.value}}
        <!--<div>------------------------------------------</div>-->
        <!--{{formData.fileFormat}}-->
        <div class="supportTip" v-show="formData.hasCheckedOpt && formData.supportTip">支持{{formData.supportTip}}</div>
        <el-upload :drag="formData.drag" 
                    :multiple="formData.allowMultiple" 
                    class="upload-demo" 
                    :action="formData.action" 
                    :disabled="formData.active" 
                    :show-file-list="showFileList"
                    :on-success="handleAvatarSuccess" 
                    :on-error="errorAction" 
                    :on-progress="processAction"
                    :on-change="changeAction" 
                    :on-remove="removeAction" 
                    :before-upload="beforeAvatarUpload" 
                    :file-list="fileList" >
            <el-button size="small" type="primary" :disabled="btnDisabled">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">{{formData.tip}}</div>
        </el-upload>
    </base-forms>
</template>

<script>
import Utils from "../../utils/utils";
import baseForm from "./baseForms";
export default {
    mixins: [baseForm],
    name: 'fileupload-form',
    data() {
        return {
            fileList:[],  // 实际上传文件
            showFileList: true,
        }
    },
    computed: {
        // 控制点击上传btn使用状态
        btnDisabled: function(){
            if(!this.formData.allowMultiple ) return false
            if(this.fileList.length > 0 && this.fileList.length == this.formData.uploadMaxNum)  return true
            else return false
        }
    },
    mounted: function () {
    },
    methods: {
        //上传成功（保存数据）
        handleAvatarSuccess(res, file, fileList) {
            // 单文件返回
            if(!this.formData.allowMultiple){
                this.formData.value = Object.assign({}, {name: fileList[fileList.length-1].name, url: fileList[fileList.length-1].url});
            }else{
                this.formData.value = [];
                for(let i in fileList){
                    this.formData.value.push(Object.assign({},{name: fileList[i].name, url: fileList[i].url}))
                }
            }
        },
        //上传失败 
        errorAction(err, file) {
            console.log('63----err',err)
        },
        removeAction(file, fileList) {
            this.fileList = fileList;
        },
        changeAction(file, fileList) {
        },
        //上传过程（验证）
        processAction(event, file, fileList){
            // for(let i in fileList){
            //     console.log('71', file.name, fileList[i].name)
            // }   
            // console.log('75',fileList, file.name.split('.')[1])

            // 
            let formData = this.formData,
                fileFormat = [], //文件格式限制
                filterArr = [],
                byArr = [],
                fileMaxSize = '',   // 文件大小限制
                has = false,    // 判断文件格式
                belowSize = false,    // 判断文件大小
                supportTip = '',     // tip提示（格式校验）
                type = file && file.name? file.name.split('.')[1] : '';    // 文件格式
            [fileFormat, fileMaxSize, supportTip] = [formData.fileFormat, formData.fileMaxSize, formData.supportTip];
             // --- 判断文件数量 start ---
            let max = formData.uploadMaxNum;
            if(!max) max = 9;
            // 单文件上传
            if(!formData.allowMultiple){
                let passType = true,
                    passSize = true;
                // 格式验证
                if(supportTip && type){
                    if(supportTip.indexOf(type) >= 0 ){
                        passType = true;
                    }else {this.$message.error(file.name+ '文件格式不对');passType = false;}
                }
                // 大小验证
                if(fileMaxSize){
                     if(file.size / 1024 / 1024 < fileMaxSize){
                        passSize = true;
                     }else {this.$message.error(file.name + '文件上传过大');passSize = false;}
                }
                if(passType && passSize) { 
                    fileList.length == 1? fileList : fileList.splice(0,1) ;
                }else {
                    fileList.length == 1? fileList = [] : fileList.splice(1,1);
                }
                this.fileList = fileList
                return
            }else{
            // 多文件上传 
                if(fileList.length > max) {
                    this.$message.error('上传文件不能超过' + max + '张');
                    // 过滤出格式匹配的文件
                    if(supportTip){
                        for(let i = 0; i <fileList.length; i++){
                            if(supportTip.indexOf(fileList[i].name.split('.')[1]) >= 0){
                                filterArr.push(fileList[i])
                            }
                        }
                    }else{
                        filterArr = fileList;
                    }
                    // 过滤出大小匹配的文件
                    if(fileMaxSize && filterArr.length > 0){
                        for(let i = 0; i <filterArr.length; i++){
                            belowSize = filterArr[i].size / 1024 / 1024 < fileMaxSize;
                            if(belowSize)  byArr.push(filterArr[i])
                        }
                        filterArr = byArr;
                        // this.fileList = fileList =  filterArr;
                    }
                    // 无限制格式
                    if(!supportTip && !fileMaxSize){ 
                        fileList.splice(0, fileList.length-max);
                        console.log('112', fileList)
                        this.fileList = fileList;
                        return
                    }
                    // 取后几张
                    if(filterArr.length > max){
                        filterArr.splice(0, filterArr.length - max)
                        this.fileList = fileList =  filterArr;
                        for(let i in filterArr){
                            console.log('取后几张',filterArr[i].name)
                        }
                    }else{
                        for(let i in filterArr){
                            console.log('取',filterArr[i].name)
                        }
                        this.fileList = fileList =  filterArr;
                    }
                   return
                }
            }
            // --- 判断文件数量 end ---


            // --- 判断文件格式 start ---
                //没有限制格式(可传anything)
            // if(!this.formData.limitUploadFormat || (this.formData.limitUploadFormat && !supportTip)){
            //     has = true;
            // }else if (supportTip) { //有限制
            //     if(supportTip.indexOf(type) >= 0) {has = true;}
            // }
            // if (!has) { 
            //     this.$message.error(file.name+ '文件格式不对'); 
            //     for(let i = 0;  i < fileList.length; i++){
            //         if(fileList[i].name == file.name){
            //             fileList.splice(i,1);
            //             break;
            //         }
            //     }
            //     this.fileList = fileList; 
            //     return 
            // }
            // --- 判断文件格式 end ---
            console.log('-------------------------------------------------------------')
            console.log('141',fileList)


            // --- 判断文件大小 start ---
                // 默认值
            // if (!fileMaxSize) fileMaxSize = 5;
            // if (fileMaxSize && file && file.size) {
            //     belowSize = file.size / 1024 / 1024 < fileMaxSize;
            //     if (!belowSize) {
            //         this.$message.error(file.name + '文件上传过大');
            //          for(let i = 0;  i < fileList.length; i++){
            //             if(fileList[i].name == file.name){
            //                 fileList.splice(i,1)
            //             }
            //         }
            //         console.log('154', fileList);
            //         this.fileList = fileList; 
            //         return 
            //     }
            // }
            // --- 判断文件大小 end ---


            // this.fileList = fileList;
            
        },
        // 上传之前验证
        beforeAvatarUpload(file) {
            return true
        },
    },
    watch:{
        
    }
};
</script>
<style scoped>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 148px;
    height: 148px;
    line-height: 148px;
    text-align: center;
}

.el-upload-dragger{
    display: none
}

.avatar {
    width: 148px;
    height: 148px;
    display: block;
}

.extra-border{
    background-color: #fbfdff;
    border: 1px dashed #c0ccda;
    border-radius: 6px;
    box-sizing: border-box;
}

.supportTip{
    line-height: 2.4;
    font-size: 12px;
    color: rgba(102,102,102,0.7);
}
</style>