<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "SplitLine",
    props: {
        style:{
            type: Object,
            default: {},
        },
        lineDirection:{
            type: String,
            default: 'horizontal',
            validator: function (value) {
                return ['vertical', 'horizontal'].includes(value);
            }
        },
        bottom: {
            type: Number,
            default: 15,
        },
        lineClass:{
            type: Array,
            default: [],
        }
    },
})
</script>

<template>
    <div :class="[lineDirection, 'w-60', 'm-auto', 'split-line', 'm-bottom-15', ...lineClass]" :style="style"></div>
</template>

<style scoped>
    .horizontal{
        border-top: 2px solid #FF8C00;
    }
    .vertical{
        border-right: 2px solid #FF8C00;
    }
</style>