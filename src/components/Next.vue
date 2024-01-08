<script>
import {defineComponent} from 'vue'
import DivPlaceholder from "@/components/DivPlaceholder.vue";

export default defineComponent({
    name: "Next",
    components: {DivPlaceholder},
    methods: {
        //点击调用fullpage的下一页
        nextPage() {
            window.fullpage_api.moveSectionDown();
        },
    },
    props: {
        topHeight: {
            type: Number,
            default: 40,
        },
        bottomHeight: {
            type: Number,
            default: 0,
        },
    },
})
</script>

<template>
    <DivPlaceholder v-if="topHeight > 0" :height="topHeight" />
    <div class="d-flex align-items-c justify-content-c" @click="nextPage">
        <font-awesome-icon icon="fa-solid fa-arrow-down" size="3x" style="color: #24bc2e;" bounce />
    </div>
    <DivPlaceholder v-if="bottomHeight > 0" :height="bottomHeight" />
</template>