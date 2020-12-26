import React from 'react';
import PropTypes from "prop-types";

function Product({ url, name, price }) { 
  return (
    <div>
      <img
        src={ url }
        alt={ name }
        width="640" 
      />
      <h2>{ name }</h2>
      <p>Price: { price}$ with taxes</p>
      <button type="button">Add to cart</button>
    </div>
  );
}

Product.defaultProps = {
    url: 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder'
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    url: PropTypes.string,
}

export default Product;