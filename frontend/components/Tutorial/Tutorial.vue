<template>
  <div class="tutorial">
    <a-row type="flex" justify="space-between" class="tutorial__wrapper">
      <a-col :span="12">
        <h1>
          The Intuitive <br />
          <span class="light"> Vue </span> Framework
        </h1>
        <h2
          class="xl:text-lg text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary font-medium leading-relaxed mb-6"
        >
          Build your next Vue.js application with confidence using NuxtJS. An
          <span title="Under MIT license"> open source </span> framework making
          web development simple and powerful.
        </h2>
      </a-col>
      <a-col :span="10">
        <figure>
          <div class="tutorial__media">
            <iframe
              data-v-6de256a6=""
              src="https://player.vimeo.com/video/311756540"
              frameborder="0"
              allowfullscreen="allowfullscreen"
              webkitallowfullscreen=""
              mozallowfullscreen=""
              title="Responsive video"
            ></iframe>
          </div>
        </figure>
      </a-col>
    </a-row>
  </div>
</template>

<style lang="scss" scoped>
.tutorial {
  position: relative;
  &__wrapper {
    width: 100%;
  }
  h1 {
    color: rgba(47, 73, 94, 1);
    letter-spacing: 0;
    margin-bottom: 1.5rem;
    line-height: 1.25;
    font-weight: 400;
    @media (min-width: 1280px) {
      font-size: 3rem;
    }
    .light {
      color: rgba(0, 197, 142, 1);
    }
  }
  h2 {
    color: rgba(96, 111, 123, 1);
    letter-spacing: 0;
    margin-bottom: 1.5rem;
    line-height: 1.625;
    font-weight: 400;
    @media (min-width: 1280px) {
      font-size: 1.125rem;
    }
  }
  &__media {
    position: relative;
    overflow: hidden;
    padding-bottom: 56.25%;
    width: 100%;
    margin-bottom: 1rem;
    iframe {
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }
}
</style>
