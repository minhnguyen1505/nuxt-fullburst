<template>
  <a-row :gutter="30">
    <a-col :span="18">
      <template v-if="$fetchState.pending"> ... </template>
      <template v-else-if="$fetchState.error">
        <p>Error while fetching posts: {{ $fetchState.error.message }}</p>
      </template>
      <template v-else>
        <BlogList :data="post" detail />
      </template>
    </a-col>
    <a-col :span="6"> </a-col>
  </a-row>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  useContext,
  useFetch,
} from '@nuxtjs/composition-api'
import axios from 'axios'
import BlogList from '../../components/Blogs/BlogList.vue'

export default defineComponent({
  components: {
    BlogList,
  },
  setup() {
    const { params } = useContext()
    const id = ref(params.value.id)
    const post = ref({})

    useFetch(async () => {
      await axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id.value}`)
        .then((resp: any) => (post.value = resp.data))
    })

    return { post }
  },
})
</script>
