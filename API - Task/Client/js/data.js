import Post from "./Post.js";
import {fetchService} from "./reqService.js"

const url = "http://127.0.0.1:3000"

export const fetchData = () => fetchService.axiosGet(url)
    .then(postsData => postsData.map(({title, intro}) => {
        return new Post(title, intro)
    }))