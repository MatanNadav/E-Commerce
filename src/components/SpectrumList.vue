<template>
    <section class="list-container" v-if="products">
        <spectrum-preview  v-for="product in products" :key="product.id" :product="product">
        </spectrum-preview>
    </section>
</template>

<script>
import spectrumPreview from './SpectrumPreview.vue'
export default {
    name: 'SpectrumList',
    data() {
        return {

        }
    },
    props:{
        products: Array
    },
    computed: {

    },
    methods: {

    },
    created() {
        
    },
    components: {
        spectrumPreview
    }
}
</script>

<style lang="scss" scoped src="@/styles/components/_SpectrumList.scss">

</style>