import axios from 'axios';
import { useState } from 'react';

function ShoppingListForm() {
  const [shoppingFormItem, setShoppingFormItem] = useState('');
  const [shoppingFormQuantity, setShoppingFormQuantity] = useState('');
  const [shoppingFormUnit, setShoppingFormUnit] = useState('');

  const addItem = () => {
    axios
      .post('/api/shoppingList', {
        item: shoppingFormItem,
        quantity: shoppingFormQuantity,
        unit: shoppingFormUnit,
      })
      .then((response) => {
        setShoppingFormItem('');
        setShoppingFormQuantity('');
        setShoppingFormUnit('');
        fetchShoppingList();
      })
      .catch((err) => {
        alert('Error Adding Item');
        console.log(err);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if ((shoppingFormItem, shoppingFormQuantity, shoppingFormUnit)) {
      addItem();
    } else {
      alert('We need all inputs filled out');
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
  );
}

export default ShoppingListForm;
