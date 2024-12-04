<template>
    <el-form ref="form" class="mt-5" :inline="true" :model="form" label-width="80px">
        <el-form-item label="关键字:" prop="name">
            <el-input placeholder="请输入关键字" v-model="form.keyword"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm()">提交</el-button>
            <el-button @click="resetForm('form')">重置</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
export default {
    data() {
        return {
            form: {
                keyword: ""
            }
        }
    },
    methods: {
        submitForm() {
            this.$emit("searchList", this.form.keyword);
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>