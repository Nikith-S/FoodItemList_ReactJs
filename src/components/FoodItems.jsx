
import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ items }) => {
let[activeItems, setActiveItems]=useState([]);

const onBuyButton =(item ,event)=>{
  let newItems=[...activeItems, item]
  setActiveItems(newItems);
  
}

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item} foodItem={item} handleBuyButton={(event)=>onBuyButton(item, event)}
          bought={activeItems.includes(item)}>

        </Item>
      ))}
    </ul>
  );
};

export default FoodItems;