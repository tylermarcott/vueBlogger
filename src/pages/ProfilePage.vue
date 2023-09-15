<template>
    <section class="container">
        <div class="row profile-card">
            <div class="col-6 img-fluid">
                <img :src="profile.picture" :alt="profile.name">
                <h3 class="m-2 text-light">{{ profile.name }}</h3>
            </div>
        </div>
    </section>
</template>

<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop';
import { profilesService } from '../services/ProfilesService'
import { useRoute } from 'vue-router';
import { AppState } from '../AppState'

export default {
    setup() {
        const route = useRoute();

        onMounted(() => {
            getProfileById();
            // getBlogsByProfile()
        })

        async function getProfileById() {
            try {
                await profilesService.getProfileById(route.params.profileId)
            } catch (error) {
                Pop.error(error)
            }
        }
        return {
            profile: computed(() => AppState.activeProfile)
        };
    },
};
</script>



<style>
.profile-card {
    height: 70vh;
    background-color: #3b3b58;
    margin-top: 1em;
    border-radius: 14px;
}
</style>