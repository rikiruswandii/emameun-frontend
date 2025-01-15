<template>
  <nav class="navbar navbar-expand-lg bg-nav-univers">
    <div class="container">
      <a class="navbar-brand text-light font-weight-bold" href="#">Emameun</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link text-light active" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-light" to="/foods">Food</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-light" to="/about">About</router-link>
          </li>

        </ul>
        <ul class="navbar-nav ml-auto mb-2 mb-lg-0 d-flex align-items-center">
          <li class="nav-item">
            <router-link class="nav-link text-light small" to="#">Keranjang
              <b-icon-bag></b-icon-bag>
              <span class="badge badge-success text-dark ml-2">0</span>
            </router-link>
          </li>
          <li class="nav-item ml-4">
            <router-link to="/login" class="btn btn-sm btn-success">Login</router-link>
          </li>
        </ul>

      </div>
    </div>
  </nav>
</template>

<script>
export default { 
    name: 'NavbarMenu'
}
</script>

<style>
</style>