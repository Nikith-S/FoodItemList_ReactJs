import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
function App() { 
  
  let [textToShow, setTextState] = useState()
 
 
  let [foodItems,setFoodItems]=useState(
    []);
 
  
  
  const handleKeyDown = (event) => {
    console.log(event);
    if(event.key==='Enter'){
      let newFoodItem= event.target.value;
      console.log(newFoodItem)
    let newItems=[...foodItems,newFoodItem];
    setFoodItems(newItems);
    }
   
    setTextState(event.target.value); 
  };
  
 
  return (
 <>
    <Container>
      <h1 className="food-heading">Healthy food</h1>
      <ErrorMessage items={foodItems}/>
      <FoodInput handleKeyDown={handleKeyDown}/>
      <p>{textToShow}</p>
     <FoodItems items={foodItems}/>
   
    </Container>
    </>

  );
}


export default App;




