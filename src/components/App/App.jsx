import React from "react";
import Header from "../Header/Header.jsx";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [shoppingList, setShoppingList] = useState([]);

  let [shoppingFormItem, setShoppingFormItem] = useState("");
  let[shoppingFormQuantity, setShoppingFormQuantity] = useState("");
  let[shoppingFormUnit, setShoppingFormUnit] = useState("");
  // let[shoppingFormBuy, setShoppingFormBuy] = useState(""); //! un-used so far

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

  const addItem = () => {
    axios
      .post("/api/shoppingList", { item: shoppingFormItem, quantity: shoppingFormQuantity, unit: shoppingFormUnit})
      .then((response) => {
        setShoppingFormItem("");
        setShoppingFormQuantity("");
        setShoppingFormUnit("");
        fetchShoppingList();
      })
      .catch((err) => {
        alert("Error Adding Item");
        console.log(err);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (shoppingFormItem, shoppingFormQuantity, shoppingFormUnit) {
      addItem();
    } else {
      alert("We need all inputs filled out");
    }
  };

  return (
    <div className="App">
      <Header />
      <main>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Item"
            value={shoppingFormItem}
            onChange={(evt) => setShoppingFormItem(evt.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Quantity"
            value={shoppingFormQuantity}
            onChange={(evt) => setShoppingFormQuantity(evt.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Unit"
            value={shoppingFormUnit}
            onChange={(evt) => setShoppingFormUnit(evt.target.value)}
          ></input>
          <button type="submit">Add Item</button>
        </form>
        <ul>
          {shoppingList.map((item) => {
            return (
              <li key={item.id}>
                {item.item} {item.quantity} {item.unit}
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
