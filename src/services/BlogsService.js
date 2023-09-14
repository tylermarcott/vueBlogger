import { AppState } from "../AppState"
import { Blog } from "../models/Blog"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class BlogsService {
    async getBlogs() {
        const res = await api.get('/api/blogs')
        AppState.blogs = res.data.map(blog => new Blog(blog))
    }

    async getBlogById(blogId) {
        AppState.activeBlog = null
        const blog = await api.get(`/api/blogs/${blogId}`)
        AppState.activeBlog = new Blog(blog.data)
    }
}

export const blogsService = new BlogsService