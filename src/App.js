import "./App.css";

import products from "./products";
import Title from "./components/Title";
import Body from "./components/Body";
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
      <Title />
      <Body />
      {productsList}
    </div>
  );
}

export default App;
