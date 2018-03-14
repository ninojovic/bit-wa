export const showPosts = (postsArray => {
        postsArray.forEach(({title, intro}) => {
        $(".row").append(`
            <div class="post">
                <h4>${title}</h4>
                <p>${intro}</p>
            </div>
        `)
    })
})

export const displayError = () => {
    alert("Ooops, something went wrong!");
}