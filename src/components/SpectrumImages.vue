<template>
  <section class="details-images-container flex column flex-center space-between">
    <section class="full-picture">
        <img :src="selectedImgUrl">
    </section>
    <section class="picture-thumbnail flex row space-around wrap">
        <img v-for="img in imgUrls" :src="img.usableUrl" class="thumbnail" :key="img.title" @click="selectImg(img.usableUrl)">
    </section>
  </section>
</template>

<script>
import ImageService from '@/services/ImageService.js'
export default {
    data(){
        return {
            selectedImgUrl:''
        }
    },
    props:{
        imgPartialUrls: Array,
        variantImage: String
    },
    methods:{
        selectImg(url){
            if (this.variantImage) {
               url = ImageService.getImageUrl(this.variantImage)
               this.selectedImgUrl = url
            }
            else this.selectedImgUrl = url
        },
    },
    mounted(){
    },
    computed: {
        imgUrls(){
            let imgUrls = ImageService.getImageUrl(this.imgPartialUrls)
            this.selectImg(imgUrls[0].usableUrl)
            return imgUrls
        }

    },
}
</script>

<style lang="scss" scoped src="@/styles/components/_SpectrumImages.scss">


</style>
