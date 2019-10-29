<template>
    <section class="filter-container flex flex-center row space-around">
        <input type="text" class="filter-text-input" placeholder="Search" v-model="filterBy.txt">
        <h1>PRODUCTS</h1>
        <div class="range-input-container flex flex-center space-between">
            <p>Filter by price</p>
            <label for="range-input">$5</label>
            <input type="range" min="5" max="500" value="50" class="filter-slider-input" id="range-input" v-model="filterBy.price">
            <label for="range-input">${{filterBy.price}}</label>
            <p class="filter-search-btn" @click="filterProducts()">Find</p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'SpectrumFilter',
    data() {
        return {
            filterBy: {
                txt:'',
                price: 50
            },
        }
    },
    props:{
       
    },
    computed: {

    },
    methods: {
        filterProducts() {
            this.$store.dispatch({ type: "filterProducts", filterBy:this.filterBy})
        }
    },
    created() {
        
    },
    components: {
        
    }
}
</script>

<style lang="scss" scoped src="@/styles/components/_SpectrumFilter.scss">

</style>