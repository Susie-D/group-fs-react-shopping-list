import React from 'react';
import Header from '../Header/Header.jsx';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';
import ShoppingListForm from '../ShoppingItemForm/ShoppingItemForm.jsx';

function App() {
  const [shoppingList, setShoppingList] = useState([]);
  // const [shoppingFormBuy, setShoppingFormBuy] = useState(""); //! un-used so far

  // useEffect runs after page renders, then calls function/ReactHook
  // shoppingList houses default values, in order to update the state we need setShoppingList (useState functionality)
  useEffect(() => {
    fetchShoppingList();
  }, []);
  const fetchShoppingList = () => {
    axios({
      method: 'GET',
      url: '/api/shoppingList',
    })
      .then((response) => {
        console.log('WE HAVE THE LIST:', response.data);
        setShoppingList(response.data);
      })
      .catch((error) => {
        console.log('We have an error', error);
      });
  };

  return (
    <div className="App">
      <Header />
      <main>
        <ShoppingListForm fetchShoppingList={fetchShoppingList} />
        <h2>Shopping List</h2>
        <div>
          <ShoppingList
            fetchShoppingList={fetchShoppingList}
            shoppingList={shoppingList}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
