<template>
    <section class="container-fluid">
        <div class="row bg-dark text-light d-flex justify-content-between details">
            <div class="fs-1 text-center col-12">
                {{ blog?.title }}
            </div>
            <div class="col-12">
                <img class="img-fluid" :src="blog?.imgUrl" :alt="blog?.title">
            </div>
            <div class="col-12">
                {{ blog?.body }}
            </div>
        </div>
    </section>
</template>

<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop';
import { blogsService } from '../services/BlogsService';
import { useRoute } from 'vue-router';
import { AppState } from '../AppState';

export default {
    setup() {
        const route = useRoute();
        onMounted(() => getBlogById());
        async function getBlogById() {
            try {
                await blogsService.getBlogById(route.params.blogId)
            } catch (error) {
                Pop.error(error)
            }
        }
        return {
            blog: computed(() => AppState.activeBlog)
        };
    },
};
</script>


<style scoped>
.details {
    min-height: 100vh;
}
</style>