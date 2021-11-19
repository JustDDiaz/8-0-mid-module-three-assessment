import { Component } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import data from "./data/productData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: data,
    };
  }

  // productClick = (event) => {
  //   event.preventDefault();
  //   const arrId = this.state.products.map((product) => {
  //     if (product.id === event.target.value) {
  //       let price = product.price;
  //       let name = product.name;
  //     }
  //   });
  // };

  render() {
    // const displayProduct = this.state.products.map((product) => {
    //   return (
    //     <ProductCard
    //       className="products"
    //       key={product.id}
    //       product={product}
    //       handleClick={this.productClick}
    //     />
    //   );
    // });

    return (
      <div>
        <h1>My Garage Sale</h1>
        {/* <div className="products">{displayProduct}</div> */}
        <Cart />
        <Checkout />
      </div>
    );
  }
}

export default App;
