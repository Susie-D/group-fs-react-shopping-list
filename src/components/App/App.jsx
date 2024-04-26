import React from "react";
import Header from "../Header/Header.jsx";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ShoppingList from "../ShoppingList/ShoppingList.jsx";
import ShoppingListForm from "../ShoppingItemForm/ShoppingItemForm.jsx";

function App() {
  const [shoppingList, setShoppingList] = useState([]);
  // let[shoppingFormQuantity, setShoppingFormQuantity] = useState("");
  // let[shoppingFormUnit, setShoppingFormUnit] = useState("");
  // let[shoppingFormBuy, setShoppingFormBuy] = useState("");

  // useEffect runs after page renders, then calls function/ReactHook
  // shoppingList houses default values, in order to update the state we need setShoppingList (useState functionality)
  useEffect(() => {
    fetchShoppingList();
  }, []);
  const fetchShoppingList = () => {
    axios({
      method: "GET",
      url: "/api/shoppingList",
    })
      .then((response) => {
        console.log("WE HAVE THE LIST:", response.data);
        setShoppingList(response.data);
      })
      .catch((error) => {
        console.log("We have an error", error);
      });
  };

  //! POST FUNCTION


  return (
    <div className="App">
      <Header />
      <main>
        <ShoppingListForm />
        <ShoppingList shoppingList={shoppingList} />
      </main>
    </div>
  );
}

export default App;
