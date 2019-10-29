<template>
  <div id="app">
    <spectrum-header></spectrum-header>
    <router-view/>
  </div>
</template>

<script>
import spectrumHeader from '@/components/SpectrumHeader.vue'
export default {
  components: {
    spectrumHeader
  },
  methods: {
    loadProducts() {
      this.$store.dispatch({ type: "loadProducts" })
    }
  },
  created() {
    this.loadProducts()
  }
}
</script>

<style lang="scss" src="@/styles/views/_App.scss">

</style>
