import Axios from 'axios'
import storageService from './StorageService.js'

var axios = Axios.create({
    baseURL: 'https://fedtest.monolith.co.il/api/',
});

export default {
    fetchProducts,
    fetchProductById,
    addToCart,
    clearCart
    
}

async function fetchProducts() {
    try {
        const res = await axios.get('catalog/getAll')
        return res.data
    }
    catch (err) {
        console.warn('something went wrong at fetching products', err)
        throw err
    } 
}

async function fetchProductById(id) {
    try {
        const res = await axios.get(`catalog/get?id=${id}`)
        return res.data
    }
    catch (err) {
        console.warn('something went wrong at fetching by id', err)
        throw err
    } 
}

async function addToCart(variantId, quantity) {
    try {
        const res = await axios.get(`/cart/add?variant_id=${variantId}&quantity=${quantity}`)
        return res.data
    }
    catch (err) {
        console.warn('something went wrong at adding to cart', err)
        throw err
    }
}

async function clearCart() {
    try {
        const res = await axios.get('/cart/truncate')
        return res.data
    }
    catch (err) {
        console.warn('something went wrong at clearing cart', err)
        throw err
    }
}