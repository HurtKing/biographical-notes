<template>
    <div ref="fullpage" id="fullpage">
        <div class="section">
            <Introduce />
        </div>
        <div class="section">
            <BasicInfo />
        </div>
        <div class="section">
            <ProfessionalSkills />
        </div>
        <div class="section">
            <WorkExperience />
        </div>
        <div class="section">
            <ContactInformation />
        </div>
    </div>
</template>

<script>
import {defineComponent} from 'vue'
import 'vue-fullpage.js/dist/style.css'
import FullPage from 'fullpage.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, fab)
import Introduce from "@/components/index/PageBody/lib/Introduce.vue";
import BasicInfo from "@/components/index/PageBody/lib/BasicInfo.vue";
import ProfessionalSkills from "@/components/index/PageBody/lib/ProfessionalSkills.vue";
import EducationalExperience from "@/components/index/PageBody/lib/EducationalExperience.vue";
import WorkExperience from "@/components/index/PageBody/lib/WorkExperience.vue";
import ContactInformation from "@/components/index/PageFooter/lib/ContactInformation.vue";

export default defineComponent({
    name: "PageBody",
    data() {
        return {
            // 定义一些数据
        };
    },
    methods: {
        initializeFullPage() {
            // 初始化fullpage.js
            this.fullPageInstance = new FullPage(this.$refs.fullpage, {
                licenseKey: 'gplv3-license',
                // 配置选项
                navigation: true, // 显示导航点
                navigationPosition: 'right', // 导航点位置
                navigationTooltips: ['介绍', '基本信息', '专业技能', '教育经历', '工作经历', '联系我'], // 导航点提示
                showActiveTooltip: false, // 显示活动提示
            });
        },
    },
    mounted() {
        // 当组件挂载完成后，初始化fullpage
        this.initializeFullPage();
    },
    beforeDestroy() {
        // 在组件销毁前销毁fullpage实例
        if (window.fullpage_api) {
            window.fullpage_api.destroy('all');
        }
    },
    components: {
        ContactInformation,
        Introduce,      //介绍
        BasicInfo,      //基本信息
        ProfessionalSkills,     //专业技能
        EducationalExperience,      //教育经历
        WorkExperience,     //工作经历
    },
})
</script>

<style scoped>
.scrollable {
    height: 100vh;
    overflow-y: scroll;
}

.section {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-shadow: 2px 2px 6px #000000, 2px 2px 6px #000000;
    .fp-watermark{
        display: none !important;
    }
}

.navigation {
    position: fixed;
    top: 0;
    left: 0;
    padding: 10px;
    background: #f5f5f5;

    ul {
        list-style-type: none;
        padding: 0;
    }

    a {
        display: block;
        padding: 10px;
        text-decoration: none;
        color: #333;
    }

    a:hover {
        background: #ddd;
    }

    .active {
        background: #ccc;
    }
}

</style>
<style>
.fp-overflow{
    width: 100%;
}
.el-timeline-item__timestamp{
    color: white;
}
.el-card{
    background: transparent;
    border: 2px solid var(--el-card-border-color);
}
</style>