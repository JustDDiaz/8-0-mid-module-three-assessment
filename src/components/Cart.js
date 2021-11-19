// const Cart = () => {
//   return (
//     <div>
//       <h1>Cart</h1>
//       <ul></ul>
//       <p>Subtotal: $ sample</p>
//       <p>Tax: $ sample</p>
//       <p>Total: $ sample</p>
//     </div>
//   );
// };

import { Component } from "react";
import data from "../data/productData";
import ProductCard from "./ProductCard";

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      products: data,
      total: "",
      list: [],
    };
  }

  productClick = (event) => {
    const { list } = this.state;
    this.setState({
      list: [...list, event.target.name],
      total:
        Number(this.state.total) + Number(event.target.value.split(",")[1]),
    });
  };

  render() {
    const { list, total } = this.state;
    const displayProduct = this.state.products.map((product) => {
      return (
        <ProductCard
          className="products"
          key={product.id}
          product={product}
          handleClick={this.productClick}
        />
      );
    });

    return (
      <div>
        <div className="products">{displayProduct}</div>
        <h1>Cart</h1>
        <ul>{list}</ul>
        <p>Subtotal: ${total}</p>
        <p>Tax: $ sample</p>
        <p>Total: $ sample</p>
      </div>
    );
  }
}

export default Cart;
