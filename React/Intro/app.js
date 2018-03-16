const Product = () =>
    <li>
        My Product
    </li>

const ShopingList = () => (
    <ul>
        <Product />
    </ul>)

const App = () => (
    <div>
        <h1>My first react PAGE</h1>
        <ShopingList />
    </div>
)

const rootElement = document.querySelector(".root");
ReactDOM.render(<App />, rootElement);