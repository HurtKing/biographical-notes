<template>
    <div id='ContactInformation' class="w-100 d-flex align-items-c justify-content-c flex-direction-c content-center">
        <TitleHeader :title="title" :ContentDescription="sketch" :bottom-style="{'margin-bottom': 40}" />
        <div class="contact w-65 d-flex flex-gap-per-20 align-items-c justify-content-c m-bottom-30">
            <div v-for="(item, index) in icons" :key="index" class="d-flex align-items-c justify-content-b flex-direction-c flex-gap-10">
                <div class="d-flex align-items-c justify-content-c">
                    <el-icon :color="item.color ? item.color : '#FF8C00'" :size="item.size ? item.size : 60">
                        <component :is="item.icon" />
                    </el-icon>
                </div>
                <div class="text-center"><span>{{item.text}}</span></div>
            </div>
        </div>
        <div class="contactMethod w-60 d-flex align-items-c justify-content-b">
            <el-form ref="forms" class="w-100" :model="forms" :rules="rules" :label-width="0" :inline="true">
                <el-form-item size="large" prop="name">
                    <el-input v-model="forms.name" :required="true" placeholder="请填写您的姓名" />
                </el-form-item>
                <el-form-item size="large" prop="email">
                    <el-input v-model="forms.email" :required="true" placeholder="请填写您的邮箱" />
                </el-form-item>
                <el-form-item size="large" prop="phone">
                    <el-input v-model.number="forms.phone" :required="true" placeholder="请填写您的手机号" />
                </el-form-item>
                <br/>
                <el-form-item size="large" class="w-100" prop="content">
                    <el-input v-model="forms.content" :required="true" type="textarea" placeholder="请填写您的留言" resize="none" :rows="5" />
                </el-form-item>
                <el-form-item size="large">
                    <el-button type="primary" @click="onSubmit">确认提交</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import {defineComponent} from 'vue'
import TitleHeader from "@/components/index/TitleHeader.vue";
import {MapLocation, Message, Phone} from "@element-plus/icons-vue";
import { ElMessage } from 'element-plus'
import CryptoJS from 'crypto-js'
import axios from 'axios'

export default defineComponent({
    name: "ContactInformation",
    data() {
        return {
            title: '联系方式',
            sketch: '如果对我的工作经历感兴趣或者你有需求，欢迎通过以下方式与我联系。',
            icons: [
                {
                    'icon': 'MapLocation',
                    'text': '湖南省郴州市',
                },
                {
                    'icon': 'Message',
                    'text': '1609869355@qq.com',
                },
                {
                    'icon': 'Phone',
                    'text': '15197568058',
                },
            ],
            forms: {
                name: '',
                email: '',
                content: '',
                phone: '',
            },
            rules: {
                name: [
                    { required: true, message: '请输入您的姓名', trigger: 'blur' }
                ],
                email: [
                    { required: true, message: '请输入您的邮箱', trigger: 'blur' },
                    { type: 'email', message: '请输入正确的邮箱', trigger: 'blur' }
                ],
                content: [
                    { required: true, message: '请输入您的留言', trigger: 'blur' }
                ],
                phone: [
                    { required: true, message: '请输入您的手机号', trigger: 'blur' },
                    { type: 'number', message: '请输入正确的手机号', trigger: 'blur' },
                ]
            },
            secretKey: 'wxdJC4sB/xuqfSYU2RHfpcz8RZ2Z5Pjw5DeLvYcf3f0=',
        }
    },
    methods: {
        async onSubmit() {
            if(!this.$refs.forms)return;
            await this.$refs.forms.validate(async (valid) => {
                if (valid) {
                    // const encryptedData = this.encryptData(this.forms);
                    try {
                        // const response = await axios.post('/api/contact', { encryptedData: encryptedData.toString()});
                        await axios.post('/api/contact', {...this.forms}).then(() => {
                            this.$refs.forms.resetFields();
                        });
                        ElMessage({
                            type: 'success',
                            message: '提交成功',
                        })
                    } catch (error) {
                        console.log(error.message);
                        ElMessage({
                            type: 'error',
                            message: '提交失败',
                        })
                    }
                } else {
                    ElMessage({
                        type: 'error',
                        message: '提交失败',
                    })
                }
            })
        },
        encryptData(data) {
            return CryptoJS.AES.encrypt(JSON.stringify(data), this.secretKey);
        }
    },
    components: {Phone, Message, MapLocation, TitleHeader}
})


</script>

<style>

.el-form-item__error{
    text-shadow: 2px 2px 6px white, 2px 2px 6px var(--el-color-danger);
}

</style>