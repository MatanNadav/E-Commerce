<template>
    <section class="page-container flex row space-around">   
        <section class="cart-container flex column">
            <div class="cart-header flex space-around row">
                <h1 class="product-description-header">Product Description</h1>
                <h1 class="product-description">Qty</h1>
                <h1 class="product-description">Price</h1>
            </div>
            <div class="cart-element-container flex row space-between" v-for="product in cart" :key="product.id">
                <div class="element-description flex row space-around flex-center">
                    <img :src="getUrl" alt="product image">
                    <div class="flex column">
                        <p>{{product.name}}</p>
                        <button class="removeProduct" @click="removeProduct(product)">Remove></button>
                    </div>
                </div>
                <div class="quantity-container flex flex-center">
                    <button class="quantity-decrement" @click="changeQuantity(product, -1)">-</button>
                    <input class="quantity-input" type="text" v-model="product.quantity" disabled>
                    <button class="quantity-increment" @click="changeQuantity(product , 1)">+</button>
                </div>
                <div class="price-container flex flex-center">
                    <p>${{product.price}}</p>
                </div>
            </div>
        </section>
        <div class="summary-container">
            <div class="border-bottom flex row space-between flex-center"><p class="summary ">Summary</p><button @click="clearCart" class="clear-btn">clear all</button></div>
            <div class="border-bottom flex row space-between flex-center"><p>items:</p> <p>{{getCartLength}}</p></div>
            <div class="flex row space-between flex-center"><p class="total">Total:</p> <p>{{getTotal}}</p></div>
            
            <button class="btn-checkout">Checkout</button>
        </div>
    </section>
</template>

<script>
import ImageService from '@/services/ImageService.js'
 
export default {
    name: 'SpectrumCart',
    data() {
        return {
          cart:[],
          imgUrls: []
        }
    },
    computed: {
        getUrl() {
            return `https://fedtest.monolith.co.il/api/imager.php?url=${this.cart[0].variant.image.url}&type=fit&width=1000&height=1000&quality=70`
        },
        getCartLength() {
            return this.cart.length
        },
        getTotal() {
            let total = this.cart.reduce((acc, product) => {
                return acc += product.price
            }, 0)
            return total
        }
    },
    methods: {
        changeQuantity(product, num) {
            if (product.quantity === 1 && num === -1) return
            else {
                product.quantity += num
            }
        },
        clearCart() {
            this.$store.dispatch({ type: "clearCart"})
            this.cart = []
        },
        removeProduct(item) {
            let idx = this.cart.findIndex(product => {
                return item.id === product.id
            })
            this.cart.splice(idx, 1)
        }
    },
    created() {
        this.cart = this.$store.getters.getCart
        console.log(this.cart);
        
    },
}
</script>

<style lang="scss" scoped src="@/styles/views/_SpectrumCart.scss">



</style>