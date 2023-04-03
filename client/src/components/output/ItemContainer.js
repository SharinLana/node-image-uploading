import React, { useEffect } from "react";
import { useAppContext } from "../../context/appContext";
import Item from "./Item";

const ItemContainer = () => {
  const { getAllProducts, products } = useAppContext();

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="output-container">
      {products.map((item) => {
        return (
          <Item
            key={item._id}
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
