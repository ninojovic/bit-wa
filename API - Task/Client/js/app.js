import * as data from "./data.js";
import * as ui from "./ui.js";

const postsData = data.fetchData()
    .then((posts) => {
        ui.showPosts(posts)
    }).catch((error) => {
        ui.displayError()
    })

