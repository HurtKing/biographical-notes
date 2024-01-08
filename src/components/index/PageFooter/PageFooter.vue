<template>
    <ContactInformation />
</template>

<script>
import {defineComponent} from 'vue'
import ContactInformation from "@/components/index/PageFooter/lib/ContactInformation.vue";

export default defineComponent({
    name: "PageFooter",
    components: {ContactInformation}
})
</script>

<style scoped>

</style>