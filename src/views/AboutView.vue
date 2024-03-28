<template>
  <div class="about">
    <Navbar />
    <!-- desktop -->
    <div class="container h-about-univers">
      <div class="d-none d-md-block">
        <div class="row mt-4">
          <div class="col-md-6">
            <div class="d-flex h-100">
              <div class="justify-content-center align-self-center">
                <h2><strong>Emameun</strong>, solution when you're hungry.</h2>
                <p> Selamat datang di Food Market! Kami adalah destinasi kuliner terbaik untuk menemukan
                  berbagai hidangan lezat dari seluruh dunia. Dari makanan siap saji hingga bahan segar,
                  kami siap memenuhi semua kebutuhan kuliner Anda. Nikmati pengalaman belanja yang
                  menyenangkan dan temukan kelezatan baru di Food Market!</p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <img src="asset/images/about.png" width="100%" alt="">
          </div>
        </div>
      </div>
    </div>

    <!-- mobile -->
    <div class="container">

      <div class="d-sm-block d-md-none">
        <div class="row mt-4">
          <div class="col-md-6 mb-3">
            <img src="asset/images/about.png" width="100%" alt="">
          </div>
          <div class="col-md-6">
            <div class="d-flex h-100">
              <div class="justify-content-center align-self-center">
                <h2><strong>Delicious Foods</strong> in your Gadget.</h2>
                <p>Ayo segera pilih pesanan favorit Anda.</p>
                <router-link to="/foods" class="btn btn-lg btn-success"><b-icon-arrow-right
                    class="mr-2"></b-icon-arrow-right>Order</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'AboutView',
  components: {
    Navbar,
  }
}
</script>