<template>
    <div>
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
            <el-form-item label="回复内容" prop="content">
            <el-input
                type="textarea"
                :rows="4"
                placeholder="请输入回复内容"
                v-model="form.content"
            ></el-input>
            </el-form-item>
            <el-form-item label="回复模版" prop="templateId">
            <el-select v-model="form.templateId" placeholder="请选择回复模版">
                <el-option
                v-for="item in template"
                :key="item.id"
                :label="item.title"
                :value="item.id"
                ></el-option>
            </el-select>
            </el-form-item>
            <el-form-item label="处理结果" prop="status">
                <el-radio-group v-model="form.status">
                    <el-radio label="pending">待处理</el-radio>
                    <el-radio label="processing">处理中</el-radio>
                    <el-radio label="completed">已完成</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item lable="选择图片" prop="images">
                <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
                :on-success="handleSuccess"
                :file-list="fileList"
                list-type="picture-card"
                :auto-upload="false"
                >
                <i class="el-icon-plus"></i>
                </el-upload>
            </el-form-item>
            <el-form-item>
            <el-button type="primary" @click="submitForm('form')">提交</el-button>
            <el-button @click="resetForm('form')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name:"Replay",
    data(){
        return {
            template:[],
            fileList:[],
            form:{
                content:"",
                status:"",
                templateId:"",
                images:[]
            },
            rules:{
                content:[
                    {required:true,message:"请输入回复内容",trigger:"blur"}
                ],
                templateId:[
                    {required:true,message:"请选择回复模版",trigger:"change"}
                ],
                status:[
                    {required:true,message:"请选择处理结果",trigger:"change"}
                ]
            }
        }
    },
    methods:{
        submitForm(formName){
            this.$refs[formName].validate((valid)=>{
                if(valid){
                    this.$emit("submit",this.form);
                    this.resetForm(formName);
                    this.$message.success("提交成功");
                }else{
                    return false;
                }
            })
        },
        resetForm(formName){
            this.$refs[formName].resetFields();
        },
        handlePictureCardPreview(file){
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleRemove(file){
            console.log(file);
        },
        handleSuccess(response,file){
            console.log(response);
            console.log(file);
        }
    }
}
</script>