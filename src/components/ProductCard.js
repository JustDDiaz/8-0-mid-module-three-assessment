// import { Component } from "react";
// import productData from "../data/productData";
import format from "../helpers/formatPrice";

const ProductCard = (props) => {
  const { id, name, price, description, img } = props.product;
  return (
    <div>
      <h2>{name}</h2>
      <p>Price {format(price)}</p>
      <button onClick="handleClick" name={name} price={format(price)}>
        Add To Cart
      </button>
      <img src={img} alt={name} />
      <p>{description}</p>
    </div>
  );
};

// class ProductCard extends Component {
//   constructor() {
//     super();
//     this.state = {
//       productData: productData,
//     };
//   }

//   render() {
//     const productData = this.state.productData.forEach((product) => {
//       return (
//         <div>
//           <h2>name</h2>
//           <p>price</p>
//           <button onClick={this.handleClick}>Add To Cart</button>
//           {/* <img src=img alt=name /> */}
//           <p>description</p>
//         </div>
//       );
//     });
//   }
// }

export default ProductCard;
