import * as data from "./data.js";
import * as ui from "./ui.js";

const apiUrl = "http://127.0.0.1:3000"

const postsData = data.fetchPosts(apiUrl)
    .then((posts) => {
        ui.showPosts(posts)
    })
    .catch((error) => {
        ui.displayError();
    })

