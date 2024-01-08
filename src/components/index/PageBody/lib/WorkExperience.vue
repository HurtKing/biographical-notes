<template>
    <div id='WorkExperience' class="w-100 d-flex align-items-c justify-content-c flex-direction-c content-center">
        <TitleHeader :title="title" :ContentDescription="sketch" :bottom-style="{'margin-bottom': 40}" />
        <div class="w-95">
            <el-timeline>
                <el-timeline-item
                    v-for="(item, index) in exp"
                    :key="index"
                    :icon="item.icon"
                    :type="item.type"
                    :color="item.color"
                    :size="item.size"
                    :hollow="item.hollow"
                    :timestamp="item.timestamp"
                    placement="top">
                    <el-card>
                        <h3>公司名称：{{item.title}}</h3>
                        <h3>职位名称：{{item.describe}}</h3>
                        <p>
                            <ul class="list-style-decimal">
                                <li v-for="(subItem, subIndex) in item.content" :key="subIndex">
                                    {{subItem}}
                                </li>
                            </ul>
                        </p>

                    </el-card>
                </el-timeline-item>
            </el-timeline>
        </div>
    </div>
</template>

<script>
import {defineComponent} from 'vue'
import TitleHeader from "@/components/index/TitleHeader.vue";

export default defineComponent({
    name: "WorkExperience",
    data() {
        return {
            title: '工作经历',
            sketch: '每一次挑战，都是成长的机会；每一次学习，都是提升的征程。勤奋不负，乐观前行。',
            exp: [
                {
                    timestamp: '2021/10 - 至今',
                    title: '长沙八月文化传媒有限公司',
                    describe: 'PHP开发工程师',
                    content: [
                        '主要负责公司运营的游戏的后台系统与 API  接口，以及直播平台活动功能的全栈开发。',
                        '参与需求的讨论、设计和开发、负责 MySql  数据库的设计、后续的 MySql  的语句优化工作。',
                        '熟练使用 ThinkPHP  框架、Mysql、Redis等 PHP  技术，使用 HTML 5、JavaScript、Css3、Jquery、Ajax  等前端技术，使用 Layui、BootStrap  等前端框架，熟练使用 PHPStrom、VSCode  等开发工具进行开发，可独立开发，使用 GIT  代码管理工具，配合团队人员合作开发项目。',
                        '对接 Payssion  支付、PayerMax  支付、Google  谷歌支付、Razer Gold  支付。'
                    ],
                    color: '#FF8C00',
                },
                {
                    timestamp: '2020/08 - 2021/08',
                    title: '广州讯以联信息科技有限公司',
                    describe: 'PHP开发工程师',
                    content: [
                        '项目开发：负责参与公司项目的开发，包括需求分析、数据库设计、后端代码编写等。熟悉 PHP  语言和 MySQL  数据库，能够独立完成小型项目的开发。',
                        '代码维护：对已有项目进行维护和优化，解决线上问题和 bug。',
                        '技术学习：学习新技术，对新技术进行研究和应用，提高技术水平。',
                        '团队协作：与团队成员密切合作，协同解决开发过程中遇到的问题，确保项目的质量和进度。'
                    ],
                    type: 'primary',
                    hollow: true,
                },
            ],
        }
    },
    components: {TitleHeader},
})
</script>

<style scoped>
</style>