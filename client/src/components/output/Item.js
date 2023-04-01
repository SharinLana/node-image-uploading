import React from "react";

const Item = ({ title, price, image }) => {
  return (
    <div>
      <img src={image} alt={title} />
      <div>
        <p>{title}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Item;
