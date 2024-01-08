<template>
    <div class="introduce w-100 d-flex align-items-c justify-content-c flex-direction-c content-center">
        <div class="pic m-auto w-10 m-bottom-20 d-flex align-items-c justify-content-c">
            <img class="w-100 border-radius-50" :src="pic" alt="">
        </div>
        <TitleHeader title="PHP是一种服务器端脚本语言，是一种动态编程语言。" ContentDescription="黄井宇" :top-class="['font-size-16', 'content']" :bottom-class="['username', 'font-size-18']" :bottom-style="{'margin-bottom': 0}" />
        <div class="position font-size-18 w-100 d-flex align-items-c justify-content-c content-center">
            <span>PHP开发工程师</span>
        </div>
        <div class="location font-size-18 d-flex align-items-c justify-content-c content-center">
            <span class="m-right-10">离职-正在找工作</span>
            <span><font-awesome-icon icon="fa-solid fa-location-dot" style="color: #FF8C00" /></span>
            <span>深圳</span>
        </div>
        <Next :top-height="50" />
    </div>
</template>

<script>
    import {defineComponent} from 'vue'
    import DivPlaceholder from "@/components/DivPlaceholder.vue";
    import Next from "@/components/Next.vue";
    import TitleHeader from "@/components/index/TitleHeader.vue";

    import pic from "@/assets/images/pic.jpg";

    export default defineComponent({
        name: "Introduce",
        components: {TitleHeader, Next, DivPlaceholder},
        data() {
            return {
                pic,
            }
        },
    })
</script>

<style scoped>
    .content, .username, .position{
        height: 40px;
    }

</style>