import { Component } from "react";

class Checkout extends Component {
  render() {
    return (
      <div>
        <h1>Checkout</h1>
        <form id="checkout">
          <label for="frist">First Name</label>
          <input type="text" id="first" />
          <label for="last">Last Name</label>
          <input type="text" id="last"></input>
          <label for="email">Email</label>
          <input type="text" id="email"></input>
          <label for="card">Credit Card</label>
          <input type="text" id="card"></input>
          <label for="zip">Zip Code</label>
          <input type="text" id="zip"></input>
          <button type="submit">Buy Now</button>
        </form>
      </div>
    );
  }
}

export default Checkout;
