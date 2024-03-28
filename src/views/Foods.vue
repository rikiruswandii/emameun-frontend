<template>
    <div>
        <Navbar />
        <div class="container">
            <div class="row mt-4">
                <div class="col">
                    <h2><strong>Foods</strong> List</h2>
                </div>
            </div>
            <div class="input-group mb-3">
                <input v-model="search" type="text" class="form-control" placeholder="Find your favorite food"
                    aria-label="Username" aria-describedby="basic-addon1" @keyup="searchFoods">
                <span class="input-group-text btn-search text-white ml-2" id="basic-addon1"><b-icon-search
                        class="text-dark"></b-icon-search></span>
            </div>
            <div class="row mb-4">
                <div class="col-md-4 mt-4" v-for="product in  products" :key="product.id">
                    <cardProduct :product="product" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import cardProduct from '@/components/CardProduct.vue'
import axios from 'axios';

export default {
    name: 'FoodsList',
    components: {
        Navbar,
        cardProduct
    },
    data() {
        return {
            products: [],
            search: ''
        }
    },
    methods: {
        setProduct(data) {
            this.products = data
        },
        searchFoods(){
            axios
                .get('http://localhost:3000/products?q=' + this.search)
                .then((response) => this.setProduct(response.data))
                .catch((error) => console.log(error))
        }
    },
    mounted() {
        axios
            .get('http://localhost:3000/products')
            .then((response) => this.setProduct(response.data))
            .catch((error) => console.log(error))
    }
}
</script>

<style>
</style>