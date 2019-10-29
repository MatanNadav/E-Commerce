<template>
    <section class="header-container flex column flex-center">
        <p class="spectrum-logo">SPECTR<span class="letter-color">U</span>M</p>
        <p class="header-divider"></p>
        <div class="links-container flex">
            <router-link class="router-link" to="/">HOME</router-link>
            <router-link class="router-link" to="/cart">CART</router-link>
        </div>
    </section>
</template>

<script>
export default {
    name: 'SpectrumHeader',
    data() {
        return {
        }
    },
    props:{
       
    },
    computed: {

    },
    methods: {

    },
    created() {
        
    },
    components: {
        
    }
}
</script>

<style lang="scss" scoped src="@/styles/components/_SpectrumHeader.scss">

</style>