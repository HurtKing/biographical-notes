<template>
    <div id='BasicInfo' class="w-100 d-flex align-items-c justify-content-c flex-direction-c content-center">
        <TitleHeader :title="title" :ContentDescription="sketch" :bottom-style="{'margin-bottom': 25}" />
        <div class="baseInfo w-50 d-flex align-items-c justify-content-b">
            <div class="picture w-15 d-flex align-items-c justify-content-c">
                <img class="w-100 max-w-100 border-radius-50" :src="pic" alt="头像">
            </div>
            <div class="intro w-75 d-flex align-items-c justify-content-s">
                <div v-for="(item, index) in data" :key="index" class="info w-50 d-flex align-items-c justify-content-s">
                    <div class="w-30 text-center d-flex align-items-c justify-content-e">{{item.title}}</div>
                    <div class="w-70">{{item.name}}</div>
                </div>
            </div>
        </div>
        <Next />
    </div>
</template>

<script>
import {defineComponent} from 'vue'
import DivPlaceholder from "@/components/DivPlaceholder.vue";
import Next from "@/components/Next.vue";
import TitleHeader from "@/components/index/TitleHeader.vue";
import pic from "@/assets/images/pic.jpg";

export default defineComponent({
    name: "BasicInfo",
    data() {
        return {
            title: '基本资料',
            sketch: '2.5年全栈开发经验，熟悉 PHP  原生和框架开发，熟悉 Linux  服务器安装宝塔管理系统搭建 LNMP  环境，熟悉 Html5、JavaScript、Css 3等前端开发语言，熟悉使用 Layui、BootStrap  等前端框架，熟悉 Mysql、Redis  等数据库，使用 GIT  代码管理工具进行团队开发。',
            // 定义一些数据
            pic,
            data: [
                {
                    title: '姓名',
                    name: '黄井宇',
                },
                {
                    title: '手机',
                    name: '15197568058',
                },
                {
                    title: '性别',
                    name: '男',
                },
                {
                    title: '邮箱',
                    name: '1609869355@qq.com',
                },
                {
                    title: 'QQ',
                    name: '1609869355',
                },
                {
                    title: '居住',
                    name: '湖南省郴州市',
                },
                {
                    title: '户籍',
                    name: '湖南省郴州市',
                },
                {
                    title: '学历',
                    name: '大专',
                },
                {
                    title: '学校',
                    name: '湖南外国语学院',
                },
                {
                    title: '专业',
                    name: '计算机应用',
                },
            ],
        };
    },
    components: {
        TitleHeader,
        Next,
        DivPlaceholder,      //占位符
    },
})
</script>

<style scoped>
    .info{
        height: 40px;
        & div:first-child:after{
            content: '|';
            width: 20px;
            text-align: center;
            display: block;
        }
    }
</style>