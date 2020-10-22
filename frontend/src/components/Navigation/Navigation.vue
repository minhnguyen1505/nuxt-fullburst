<template>
  <header class="navigation">
    <h1 class="navigation__heading">VueJS Dynamic Content</h1>
    <nav class="navigation__nav">
      <ul>
        <li>
          <nuxt-link exact to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/blog">Blog</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.navigation {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 40px 40px 0;

  &__nav {
    display: flex;
    width: 80vw;
    margin-top: 30px;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 8px 0;
    ul {
      padding-left: 0;
      margin-bottom: 0;
      li {
        display: inline;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        font-size: 13px;
        padding: 0 20px;
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd;
        position: relative;
        a {
          color: black;
          &:hover {
            color: #c14103;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 850px) {
  .navigation {
    &__heading {
      margin: 0;
    }
    &__nav ul li {
      padding: 0 5px !important;
      border-left: none !important;
      border-right: none !important;
    }
  }
}
</style>
