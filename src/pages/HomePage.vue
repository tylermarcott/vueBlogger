<template>
  <section class="container-fluid">
    <div class="row">
      <div v-for="blog in blogs" :key="blog.id" class="col-12 p-2 px-4">
        <BlogCard :blog="blog" />
      </div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop';
import { blogsService } from '../services/BlogsService'
import { AppState } from '../AppState'
import BlogCard from '../components/BlogCard.vue';

export default {
  setup() {
    onMounted(() => getBlogs());
    async function getBlogs() {
      try {
        await blogsService.getBlogs();
      }
      catch (error) {
        Pop.error(error);
      }
    }
    return {
      blogs: computed(() => AppState.blogs)
    };
  },
  components: { BlogCard }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
