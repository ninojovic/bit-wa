import Post from "./Post.js";

export const fetchPosts = (url) => {
    return fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((postsData) => {
            return postsData.map(createPosts)
        })
    }

const createPosts = (post) => {
    const {title, intro} = post;
    return new Post(title, intro);
}