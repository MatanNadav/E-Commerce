<template>
  <div class="home-container flex column">
    <spectrum-filter></spectrum-filter>
    <spectrum-list :products="renderProduct"></spectrum-list>
  </div>
</template>

<script>
import spectrumService from '@/services/SpectrumService.js'
import spectrumList from '@/components/SpectrumList.vue'
import spectrumFilter from '@/components/SpectrumFilter.vue'


export default {
  name: 'HomePage',
  components: {
    spectrumList,
    spectrumFilter
  },
  computed: {
    renderProduct() {
      let items = this.$store.getters.getProducts;
      return items
    }
  }
}
</script>

<style lang="scss" scoped src="@/styles/views/_HomePage.scss">

</style>