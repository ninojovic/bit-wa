export const showPosts = (postsArray => {
        postsArray.forEach(({title, intro}) => {
        $(".row").append(`
        <div class="col s12">
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                    <span class="card-title">${title}</span>
                    <p>${intro}</p>
                </div>
            </div>
        </div>
        `)
    })
})

export const displayError = () => {
    alert("Ooops, something went wrong!");
}