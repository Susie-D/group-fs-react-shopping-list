import React from 'react';
import Header from '../Header/Header.jsx';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';



function App() {
const [shoppingList, setShoppingList] = useState([]);
// useEffect runs after page renders, then calls function/ReactHook
// shoppingList houses default values, in order to update the state we need setShoppingList (useState functionality)
useEffect(() => {
    fetchShoppingList();
}, [])
const fetchShoppingList = () => {
    axios({
        method: 'GET',
        url: '/api/shoppingList'
    })
    .then((response) => {
        console.log("WE HAVE THE LIST:", response.data);
        setShoppingList(response.data);
    })
    .catch((error) => {
        console.log("We have an error", error);
    })
};
    return (
        <div className="App">
            <Header />
            <main>
            <ul>
                {shoppingList.map((item) => {
                    return (
                    <li key={item.id}> {item.item} {item.quantity} {item.unit}</li> )
                })}
                
            </ul>
            </main>
        </div>
    );
}

export default App;
