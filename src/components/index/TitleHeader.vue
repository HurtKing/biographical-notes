<script>
import {defineComponent} from 'vue'
import SplitLine from "@/components/index/SplitLine.vue";

export default defineComponent({
    name: "TitleHeader",
    components: {SplitLine},
    props: {
        title: {
            type: String,
            default: '标题',
            required: true
        },
        ContentDescription:{
            type: String,
            default: '',
        },
        topStyle:{
            type: Object,
            default: {},
        },
        topClass:{
            type: Array,
            default: [],
        },
        lineStyle:{
            type: Object,
            default: {},
        },
        lineClass:{
            type: Array,
            default: [],
        },
        bottomStyle:{
            type: Object,
            default: {},
        },
        bottomClass:{
            type: Array,
            default: [],
        }
    }
})
</script>

<template>
    <div :class="['w-100', 'text-center', 'title', ...topClass]" :style="topStyle">
        <span>{{title}}</span>
    </div>
    <SplitLine :line-class="lineClass" :style="lineStyle" />
    <div v-if="ContentDescription !== ''" :class="['w-60', 'm-auto', 'text-center', 'm-bottom-15', 'font-size-18', ...bottomClass]" :style="bottomStyle">
        <span>{{ContentDescription}}</span>
    </div>
</template>

<style scoped>

</style>