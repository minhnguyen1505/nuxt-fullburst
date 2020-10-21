<template>
  <footer class="footer">
    <div class="footer__info">
      <p>
        This project is a simple project combining
        <a target="_blank" href="https://nuxtjs.org/">NuxtJS</a> &
        <a target="_blank" href="https://composition-api.nuxtjs.org/"
          >@nuxtjs/composition-api</a
        >
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  &__info {
    background: black;
    width: 100%;
    color: white;
    text-align: center;
    p {
      margin: 0;
      padding: 1rem;
    }
  }
}
</style>
