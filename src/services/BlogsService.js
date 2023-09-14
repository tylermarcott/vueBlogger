import { AppState } from "../AppState"
import { Blog } from "../models/Blog"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class BlogsService {
    async getBlogs() {
        const res = await api.get('/api/blogs')
        AppState.blogs = res.data.map(blog => new Blog(blog))
    }

    setActiveBlog(blogId) {

        const foundBlog = AppState.blogs.find(blog => blog.id == blogId)

        AppState.activeBlog = foundBlog
    }
}

export const blogsService = new BlogsService