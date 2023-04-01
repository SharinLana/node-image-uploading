import React from "react";

const Item = ({ title, price, image }) => {
  return (
    <div className="item-container">
      <img src={image} alt={title} />
      <div className="info-container">
        <p className="title">{title}</p>
        <p className="price">$ {price}</p>
      </div>
    </div>
  );
};

export default Item;
