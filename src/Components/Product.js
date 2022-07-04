import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="card">
      <div className="card1">
      <h3>{product.itemname}</h3>
      <h4>{product.availabletime}</h4>

      <h3>Rs:{product.price}</h3></div>
      
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      
    </div>
  );
}
