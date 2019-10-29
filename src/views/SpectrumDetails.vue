<template>
    <section class="details-container flex row" v-if="product">
        <spectrum-images :imgPartialUrls="product.images" :variantImage="getVariantImage" class="details-images"></spectrum-images>
        <div class="product-description-container flex column space-between">
            <p class="product-title">{{getTitle}}</p>
            <p class="product-price">{{getPrice}}</p>
            <p class="product-desc">{{product.description}}</p>
        </div>
        <div class="product-order-form flex column space-between">
            <div class="select-container" @click="checkVariants" ref="form">

            </div>

            <div class="quantity-container flex row space-around flex-center">
                <p>Quantity:</p>
                <div>
                    <button class="quantity-decrement" @click="changeQuantity(-1)">-</button>
                    <input class="quantity-input" type="text" v-model="quantity" disabled>
                    <button class="quantity-increment" @click="changeQuantity(1)">+</button>
                </div>
            </div>
            <button class="submit-order" @click="submitOrder">Add to cart</button>
        </div>
    </section>
</template>

<script>
import spectrumImages from '@/components/SpectrumImages.vue'

export default {
    name: 'SpectrumDetails',
    data() {
        return {
            prmDispatch : null ,
            quantity: 1,
            variantMap: {},
            productTitle: '',
            productPrice: null,
            chosenVariant: null
        }
    },
    computed: {
        product(){
            return  this.$store.getters.getSelectedProduct
        },
        getTitle() {
            if (this.chosenVariant) return this.chosenVariant.title
            else return this.product.title
        },
        getPrice() {
            if (this.chosenVariant) return this.chosenVariant.price
            else return this.product.max_price
        },
        getVariantImage() {
            if(this.chosenVariant) return this.chosenVariant.image.url
            else return null
        }
    
    },
    methods: {
        submitOrder() {
            if (!this.chosenVariant) return
            this.$store.dispatch({ type: "addToCart", id: this.chosenVariant.id, quantity: this.quantity })
        },
        changeQuantity(num) {
            if (this.quantity === 1 && num === -1) return
            else {
                this.quantity += num
            }
        },
        generateSelect() {
            let {form} = this.$refs
            let {attributes} = this.product;
            for (var i=0; i < attributes.length; i++) {
                let select = document.createElement("select")
                //giving each JS generated el its style
                select.className = "dropdown"
                select.id = this.product.attributes[i].id
                select.style.fontSize = '15px'
                select.style.width = "100%"
                select.style.backgroundImage = 'linear-gradient(to top, #f7fcfb, #ffffff)'
                select.style.border = 'solid 1px #d5d5d5'
                select.style.letterSpacing = '0.38px'
                select.style.padding = '10px'
                for (var j=0; j <= attributes[i].labels.length; j++) {
                    let option = document.createElement("option")
                    if (j === 0) {
                        option.innerText = `Choose ${this.product.attributes[i].title}`
                    }
                    else {
                        option.innerText = attributes[i].labels[j-1].title
                    }
                    select.appendChild(option)
                }
                form.prepend(select)
            }
        },
        checkVariants() {
            let selects = document.getElementsByClassName("dropdown")
            let counter = 0;
            selects.forEach(el => {
                for (var i=0; i < this.product.attributes.length; i++) {
                    if (el.id === this.product.attributes[i].id) {
                        for (var j=0; j < this.product.attributes[i].labels.length; j++) {
                            if (el.value === this.product.attributes[i].labels[j].title) {
                                this.variantMap[el.id] = this.product.attributes[i].labels[j].id //creating a map object for selected attributes
                            }
                        }
                    }
                } 
            })
            this.product.variants.forEach(variant => {
                variant.labels.forEach(label => {
                    if (label.label_id === this.variantMap[label.attribute_id]) counter++ //checking if specific variant constitutes the right attributes
                    else counter = 0;
                })
                if (counter === this.product.attributes.length) {
                    this.chosenVariant = variant
                }
            })
        }
    },
    created() {
        let _id = this.$route.params.id
        this.prmDispatch = this.$store.dispatch({ type: "loadProductById", _id })
    },
    async mounted() {
        await this.prmDispatch // making sure product is availble for the DOM
        this.generateSelect()

    },
    destroyed() {
        this.$store.dispatch({ type: "clearSelectedProduct"})
    },
    components: {
        spectrumImages
    }
}
</script>

<style lang="scss" scoped src="@/styles/views/_SpectrumDetails.scss">

</style>