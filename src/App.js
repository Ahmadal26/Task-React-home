import "./App.css";
import img0 from "./assets/img/cookie.jpg";
import products from "./products";
function App() {
  const productsList = products.map((product) => {
    return (
      <div className="DownPic">
        <img src={product.image} height={"150px"} width={"200px"} />
        <p> {product.name} </p>
        <p> {product.price}</p>
      </div>
    );
  });

  return (
    <div className="App">
      <h1> Cookies and Beyond </h1>
      <p> Where cookie maniacs gather </p>
      <img src={img0} alt="cookie" />
      {productsList}
    </div>
  );
}

export default App;
