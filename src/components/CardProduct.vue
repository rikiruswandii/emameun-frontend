<template>
  <div class="card sdw-card card-product">
    <img :src="'../asset/images/' + product.gambar" class="card-img-top" alt="..." :style="hoverEffect"
      @mouseover="toggleHover(true)" @mouseleave="toggleHover(false)">
    <div class="card-body card-product-body border">
      <h5 class="card-title font-weight-bold mb-0">{{ product.nama }}</h5>
      <p class="card-text small">Harga : Rp.{{ product.harga }}</p>
      <router-link :to="'/foods/' + product.id" class="btn btn-sm btn-success"><b-icon-cart></b-icon-cart> Pesan</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cardProduct',
  props: ['product'],
  data() {
    return {
      hover: false
    };
  },
  computed: {
    hoverEffect() {
      return this.hover ? 'filter: brightness(1) opacity(1); transition: filter 0.3s ease, opacity 0.3s ease;' : 'filter: brightness(0.5);';
    }
  },
  methods: {
    toggleHover(value) {
      this.hover = value;
    }
  }
}
</script>

<style>
.card-img-top {
  transition: filter 0.3s ease, opacity 0.3s ease;
}
</style>
