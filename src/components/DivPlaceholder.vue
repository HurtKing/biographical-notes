<template>
    <div class="w-100" :style="{height: height + 'px'}"></div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "DivPlaceholder",
    props: {
        height: {
            type: Number,
            default: 100,
            required: true,
        },
    },
})
</script>