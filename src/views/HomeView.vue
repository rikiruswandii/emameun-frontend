<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <deliciousFood />
      <div class="row mt-4">
        <div class="col">
          <h2>Best <strong>Foods</strong></h2>
        </div>
        <div class="col">
          <router-link to="/foods" class="btn btn-sm btn-success float-right"><b-icon-eye
              class="mr-1 px-1"></b-icon-eye>Lihat semua</router-link>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-md-4 mt-1" v-for="product in  products" :key="product.id">
          <cardProduct :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import deliciousFood from '@/components/Hero.vue'
import cardProduct from '@/components/CardProduct.vue'
import axios from 'axios';

export default {
  name: 'HomeView',
  components: {
    Navbar,
    deliciousFood,
    cardProduct
  },
  data(){
    return { 
      products: []
    }
  },
  methods: {
    setProduct(data){
      this.products = data
    }
  },
  mounted(){
    axios
      .get('http://localhost:3000/best-products')
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error))
  }
}
</script>
