<template>
    <!-- 生成表单，有数据：title，content -->
    <el-form :model="formData" :rules="rules" ref="formData" label-width="80px">
        <el-form-item label="标题" prop="title">
            <el-input placeholder="请输入标题" v-model="formData.title"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="content">
            <el-input  placeholder="请输入内容" v-model="formData.content"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm">提交</el-button>
            <el-button @click="resetForm('formData')">重置</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
export default {
    props:["templateData"],
    data() {
        return {
            formData: {
                title: "",
                content: "",
            },
            rules: {
                title: [
                    { required: true, message: "请输入标题", trigger: "blur" },
                ],
                content: [
                    { required: true, message: "请输入内容", trigger: "blur" },
                ],
            },
        };
    },
    created() {
        if(this.templateData){
            this.formData = this.templateData;
        }
    },
    methods: {
        submitForm() {
            this.$refs.formData.validate((valid) => {
                if (valid) {
                //    如果templateData存在，则调用updateTemplate方法，否则调用createTemplate方法
                    if(this.templateData){
                        console.log("调用更新数据请求");
                        this.$message.success("更新成功");
                    }else{
                        console.log("调用新增数据请求");
                        this.$message.success("新增成功");
                    }
                    this.$emit("update:showCreate", false);
                } else {
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
    },
};
</script>