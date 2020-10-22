<template>
  <div class="default-layout">
    <Navigation />
    <main>
      <Nuxt keep-alive />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Footer from '../components/Footer/Footer.vue'
import Navigation from '../components/Navigation/Navigation.vue'

export default defineComponent({
  components: {
    Footer,
    Navigation,
  },
})
</script>

<style lang="scss" scoped>
.default-layout {
  height: 100%;
  display: flex;
  flex-direction: column;
}
main {
  padding: 0;
  width: 80vw;
  flex: 1;
  margin: 0 auto;
}
@media screen and (min-width: 1000px) {
  main {
    padding: 40px 0;
    width: 80vw;
  }
}
</style>
