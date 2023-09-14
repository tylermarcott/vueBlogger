<template>
    {{ profile }}
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


<style></style>