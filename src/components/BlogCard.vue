<template>
    <router-link :to="{ name: 'BlogDetailsPage', params: { blogId: blog.id } }">
        <div class="blog-card p-3 elevation-3 bg-dark text-light row">
            <div class="col-6">
                <img class="img-fluid blog-img" :src="blog.imgUrl" :alt="blog.title">
            </div>
            <div class="col-6">
                <div class="row">
                    {{ blog.title }}
                </div>
                <div class="row">
                    {{ blog.creator.name }}
                    <img class="creator-picture" :src="blog.creator.picture" :alt="blog.creator.name">
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
import { Blog } from '../models/Blog';
import { blogsService } from '../services/BlogsService';

export default {
    props: { blog: { type: Blog, required: true } },
    setup(props) {
        return {
            setActiveBlog() {
                blogsService.setActiveBlog(props.blog.id)
            }
        };
    },
};
</script>


<style scoped>
.blog-card {
    min-height: 50vh;
}

.creator-picture {
    height: 40px;
    width: 40px;
    border-radius: 50em;
    object-fit: cover;
    object-position: center;
}

.blog-img {
    max-height: 45vh;
}
</style>