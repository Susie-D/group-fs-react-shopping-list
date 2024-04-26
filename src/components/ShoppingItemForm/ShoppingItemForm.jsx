import axios from "axios";
import {useState } from "react";

function ShoppingListForm () {
    let [shoppingFormItem, setShoppingFormItem] = useState(" ");
    
    const addItem = () => {
        axios
          .post("/api/shoppingList", { item: shoppingFormItem })
          .then((response) => {
            setShoppingFormItem("");
            fetchShoppingList();
          })
          .catch((err) => {
            alert("Error Adding Item");
            console.log(err);
          });
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        //! We need to add more input variables below
        if (shoppingFormItem) {
          addItem();
        } else {
          alert("We Need an Item");
        }
      };
return (
    <form onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Item"
      value={shoppingFormItem}
      onChange={(evt) => setShoppingFormItem(evt.target.value)}
    ></input>
    <button type="submit">Add Item</button>
  </form> )
}

export default ShoppingListForm;