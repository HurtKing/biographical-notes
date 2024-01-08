<template>
    <div id='ProfessionalSkills' class="w-100 d-flex align-items-c justify-content-c flex-direction-c content-center">
        <TitleHeader :title="title" :ContentDescription="sketch" :bottom-style="{'margin-bottom': 40}" />
        <div class="skill w-60 h-auto d-flex align-items-s justify-content-b">
            <div class="skillList w-30 d-flex align-items-c justify-content-b">
                <div v-for="(item, index) in skill" :key="index" class="info d-flex align-items-c justify-content-b flex-direction-c" :style="{width: 100 / showSkillListNum +'%'}">
                    <div class="w-100 h-65 d-flex align-items-c justify-content-c">
                        <img :src="item.imagePath" :class="['h-100', 'w-50', item.class]" :alt="item.name">
                    </div>
                    <div class="w-100 text-center">
                        {{item.name}}
                    </div>
                </div>
            </div>
            <div class="skillDescribe w-70 d-flex align-items-c justify-content-c">
                <div class="w-100 d-flex align-items-c text-wrap">
                    <dl v-for="(item, index) in describe" :key="index" class="w-100 m-bottom-15">
                        <dt>{{item.title}}</dt>
                        <dd>
                            <ul class="list-style-decimal">
                                <li v-for="(subItem, subIndex) in item.list" :key="subIndex">
                                    {{subItem}}
                                </li>
                            </ul>
                        </dd>
                    </dl>
                </div>
                <Next :bottom-height="30" />
            </div>
        </div>
    </div>
</template>

<script>
import {defineComponent} from 'vue'
import Next from "@/components/Next.vue";
import DivPlaceholder from "@/components/DivPlaceholder.vue";
import TitleHeader from "@/components/index/TitleHeader.vue";

import PHPLogo from '@/assets/images/logo/php-logo.svg';
import ThinkPHPLogo from '@/assets/images/logo/thinkphp-logo.svg';
import MysqlLogo from '@/assets/images/logo/mysql-logo.svg';
import RedisLogo from '@/assets/images/logo/redis-logo.svg';
import GitLogo from '@/assets/images/logo/git-logo.svg';
import VueLogo from '@/assets/images/logo/vue-logo.svg';
import LayuiLogo from '@/assets/images/logo/layui-logo.svg';
import BootstrapLogo from '@/assets/images/logo/bootstrap-logo.svg';
import WebLogo from '@/assets/images/logo/web.png';

export default defineComponent({
    name: "ProfessionalSkills",
    data() {
        return {
            title: '专业技能',
            sketch: '在过去两年半的工作中，我专注于直播业务的API开发、活动开发以及教育系统的后台开发工作，对PHP、ThinkPHP、Mysql、Redis、Git、Vue、Layui、Bootstrap等技术栈有深入的了解，熟悉PHP开发流程，对PHP框架的使用有深入的了解。',
            // 定义一些数据
            pic: '/src/assets/images/pic.jpg',
            showSkillListNum: 2,
            skill: [
                {
                    imagePath: PHPLogo,
                    name: 'PHP',
                },
                {
                    imagePath: ThinkPHPLogo,
                    name: 'ThinkPHP框架',
                },
                {
                    imagePath: RedisLogo,
                    name: 'Redis',
                },
                {
                    imagePath: MysqlLogo,
                    name: 'Mysql',
                },
                {
                    imagePath: GitLogo,
                    name: 'Git',
                },
                {
                    imagePath: VueLogo,
                    name: 'Vue',
                },
                {
                    imagePath: LayuiLogo,
                    name: 'Layui',
                    class: 'w-70',
                },
                {
                    imagePath: BootstrapLogo,
                    name: 'Bootstrap',
                },
                {
                    imagePath: WebLogo,
                    name: 'Web三件套',
                },
            ],
            describe: [
                {
                    'title': '后端开发',
                    'list': [
                        '熟悉PHP编程语言，熟练掌握面向对象编程和PHP的特性，能够快速高效地开发后端逻辑并实现业务需求。',
                        '深入了解ThinkPHP框架的核心原理和机制，包括路由、控制器、模型等，能够利用框架提供的工具和功能来加快开发进程。',
                        '对RESTful API的设计和构建有丰富经验，能够构建出安全、可扩展和易于维护的API接口。',
                        '了解如何进行单元测试和集成测试，以确保代码质量和系统稳定性。',
                    ],
                },
                {
                    'title': '数据库技能',
                    'list': [
                        '在MySQL方面，能够进行高效的SQL查询优化、索引设计和数据库范式化，确保数据库的高性能和可靠性。',
                        '对于NoSQL数据库Redis，了解其在缓存等方面的应用，能够结合业务需求进行合理的使用。',
                        '了解数据库备份、恢复和数据迁移等操作，以及监控数据库性能并进行必要的调优。',
                    ],
                },
                {
                    'title': 'Web服务器搭建和配置',
                    'list': [
                        '熟悉Nginx和Apache的基本配置和常见优化策略，包括静态文件缓存、反向代理等。',
                    ],
                },
                {
                    'title': '前端开发',
                    'list': [
                        '深入理解Vue.js框架，能够构建响应式、可组件化的前端页面，提供更好的用户交互体验。',
                        '在Bootstrap和Layui等前端库的应用方面有着丰富的经验，能够快速构建出美观且符合设计规范的界面。',
                        '对前端性能优化有一定的心得，包括减少HTTP请求、资源压缩、异步加载等技术手段，以提升页面加载速度和性能。',
                    ],
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
.title{
    height: 50px;
    line-height: 50px;
    font-size: 24px;
}
.info{
    width: 22%;
    height: 100px;
}
</style>