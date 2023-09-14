import { AppState } from "../AppState"
import { Profile } from "../models/Profile"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class ProfilesService {
    async getProfileById(profileId) {
        const res = await api.get(`/api/profiles/${profileId}`)
        AppState.activeProfile = new Profile(res.data)
        logger.log(AppState.activeProfile)
    }
}

export const profilesService = new ProfilesService