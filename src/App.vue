<template>
  <div id="app">
    <router-view />
    <iniFooter />
  </div>
</template>

<script>
import iniFooter from '@/components/Footer.vue'
export default {
  components: {
    iniFooter
  }
}
</script>

