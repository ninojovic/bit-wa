const lorem = require('lorem-ipsum');
const Post = require("./Post")


const getTitle = () => lorem({
    count: 3,
    units: "words",
});

const getIntro = () => lorem({
    count: 2, 
    units: "sentences",
});

const getPosts = (count) => {
    const posts = [];
    for(let i = 0; i < 20; i++){
        const post = new Post(i, getTitle(), getIntro());
        posts.push(post);
    }
    return posts;
}

module.exports = {
    getPosts,
}