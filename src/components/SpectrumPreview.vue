<template>
    <section class="preview-container">
        <router-link :to="detailsUrl">
            <img class="product-img" :src="getImage" alt="product image">
        </router-link>
        <p>{{product.title}}</p>
        <p>{{getPrice}}</p>
    </section>
</template>

<script>
import ImageService from '@/services/ImageService.js'
export default {
    name: 'SpectrumPreview',
    data() {
        return {

        }
    },
    props:{
        product: Object
    },
    computed: {
        getImage() {
            return ImageService.getImageUrl(this.product.images[0].url)
        },
        detailsUrl() {
            return 'product/'+this.product.id
        },
        getPrice() {
            return `$${this.product.max_price}`
        }
    },
    methods: {

    },
    created() {
    }
}
</script>

<style lang="scss" scoped src="@/styles/components/_SpectrumPreview.scss">


</style>