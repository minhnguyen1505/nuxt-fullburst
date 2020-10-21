<template>
  <a-row :gutter="30">
    <a-col :span="18">
      <template v-if="$fetchState.pending"> ... </template>
      <template v-else-if="$fetchState.error">
        <p>Error while fetching posts: {{ $fetchState.error.message }}</p>
      </template>
      <template v-else>
        <BlogList v-for="post of blogs" :key="post.id" :data="post" />
      </template>
    </a-col>
    <a-col :span="6"> </a-col>
  </a-row>
</template>

<script lang="ts">
import { defineComponent, useFetch } from '@nuxtjs/composition-api'
import { useActions, useGetters } from 'vuex-composition-helpers'
import BlogList from '../../components/Blogs/BlogList.vue'

export default defineComponent({
  components: {
    BlogList,
  },
  setup() {
    const { blogs }: any = useGetters(['blogs'])
    const { getBlogs } = useActions(['getBlogs'])
    // must be called synchronously
    useFetch(async () => {
      await getBlogs()
    })

    return { blogs }
  },
})
</script>
