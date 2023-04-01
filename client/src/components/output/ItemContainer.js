import React from "react";
import Item from "./Item";

const dummyItems = [
  {
    id: 1,
    title: "Phone",
    price: 450,
    image: "",
  },
  {
    id: 2,
    title: "Keyboard",
    price: 150,
    image: "",
  },
  {
    id: 3,
    title: "Mouse",
    price: 250,
    image: "",
  },
];
const ItemContainer = () => {
  return (
    <div>
      {dummyItems.map((item) => {
        return (
          <Item
            key={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
          />
        );
      })}
    </div>
  );
};

export default ItemContainer;
