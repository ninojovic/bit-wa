const PostItem = ({ singlePost }) => {
    const title = singlePost.title;
    const body = singlePost.body;
    return (
        <div className="col s12">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">{title}</span>
                    <p>{body}</p>
                </div>
            </div>
        </div>
    )
}

const PostList = ({ data }) => {
    const postsList = data;

    const posts = postsList.map((post, i) => <PostItem key={i} singlePost={post} />)

    return (
        <div className="row">
            {posts}
        </div>
    )
}

const Header = (props) => (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">BLOG</a>
            </div>
        </nav>
    )

const Main = ({ data }) => (
        <div className="container">
            <PostList data={data} />
        </div>
    )

const App = ({ data }) => (
        <div>
            <Header />
            <Main data={data} />
        </div>
    )

const rootElement = document.querySelector(".root");
ReactDOM.render(<App data={data} />, rootElement);