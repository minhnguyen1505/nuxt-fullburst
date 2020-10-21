<template>
  <article :id="`bloglist-${data.id}`" class="bloglist">
    <div class="bloglist__wrapper">
      <a-row :gutter="30">
        <a-col :span="7">
          <div class="bloglist__thumbnail">
            <nuxt-link :to="blogUrl">
              <img src="/blog/blog-placeholder.png" :alt="data.title" />
            </nuxt-link>
          </div>
        </a-col>
        <a-col :span="17">
          <div class="bloglist__title">
            <h2>
              <nuxt-link :to="blogUrl">
                {{ data.title }}
              </nuxt-link>
            </h2>
          </div>
          <div class="blogmeta">
            <span class="blogmeta__item">
              <a href="#">
                <i class="fa fa-camera-retro"></i>
              </a>
            </span>
            <span class="blogmeta__item">
              In
              <a href="#"> NuxtJS </a>
            </span>
            <span class="blogmeta__item">
              Tags
              <a href="#"> newbie </a>
            </span>
            <span class="blogmeta__item">
              <time datetime="2015-05-17T23:42:46+00:00"> May 17, 2015 </time>
            </span>
            <span class="blogmeta__item">
              <a href="#"> 5 Comments </a>
            </span>
            <span class="blogmeta__item">
              <span class="author">
                <a class="author__image" href="#">
                  <img src="/blog/user-placeholder.png" alt="Anonymous" />
                </a>
                <a class="author__url" href="#"> Anonymous </a>
              </span>
            </span>
          </div>
          <div class="blog-description">
            <p>
              {{ data.body }}
              <nuxt-link :to="blogUrl">…</nuxt-link>
            </p>
          </div>
          <!-- end entry-content div -->
          <div v-if="!detail" class="blog-control">
            <div class="blog-control__item">
              <nuxt-link :to="blogUrl"> Continue Reading </nuxt-link>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </article>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    data: {
      type: Object,
    },
    detail: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const blogUrl = computed(() =>
      props.data && props.data.id ? `/blog/${props.data.id}` : null
    )
    return {
      blogUrl,
    }
  },
})
</script>

<style lang="scss" scoped>
.bloglist {
  &__wrapper {
    margin-bottom: 35px;
    border-bottom: 1px dotted #ddd;
    padding-bottom: 40px;
  }
  &__thumbnail {
    border-radius: 10px;
    z-index: 1;
    position: relative;
    overflow: hidden;
    margin: 0;
    background-color: #efefef;
    img {
      width: 100%;
      height: auto;
      border-radius: 10px;
      object-fit: cover;
    }
  }
  &__title {
    h2 {
      margin-top: -2px;
      font-size: 20px;
      line-height: 26px;
      margin-bottom: 2px;
      text-transform: capitalize;
      a {
        color: #000;
      }
    }
  }
}

.blogmeta {
  &__item {
    margin-right: 11px;
    font-size: 12px;
    color: #666;
    a {
      color: #222;
      border-bottom: 1px dotted #ccc;
      padding-bottom: 1px;
      &:hover {
        color: #f47e00;
      }
    }
  }
}

.author {
  &__image {
    border-bottom: none;
    img {
      width: 25px;
      margin-right: 3px;
      border-radius: 50%;
    }
  }
}

.blog-description {
  font-size: 15px;
  line-height: 24px;
  margin-top: 0;
  p {
    margin-top: 12px;
  }
}

.blog-control {
  &__item {
    float: left;
    margin-right: 10px;
    font-size: 14px;
    a {
      display: inline-block;
      height: 36px;
      line-height: 34px;
      padding: 0 22px;
      border-radius: 30px;
      border: 1px solid #f47e00;
      color: inherit;
      transition: all 0.1s ease-in;
      &:hover {
        background-color: #f47e00;
        color: #fff;
      }
    }
  }
}
</style>
