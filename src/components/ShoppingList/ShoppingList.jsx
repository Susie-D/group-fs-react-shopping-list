import axios from 'axios';

function ShoppingList({ shoppingList, fetchShoppingList }) {
  const purchaseItem = (itemId) => {
    axios({
      method: 'PUT',
      url: `/api/shoppingList/${itemId}`,
    })
      .then((response) => {
        fetchShoppingList();
      })
      .catch((error) => {
        console.log('Error in purchase item', error);
      });
  };

  return (
    <div>
      {shoppingList.map((item) => {
        return (
          <>
            <li key={item.id}>
              {item.item} {item.quantity} {item.unit}
              {item.buy === false ? (
                <button onClick={() => purchaseItem(item.id)}>Buy</button>
              ) : (
                <p className="purchase">Purchased</p>
              )}
            </li>
          </>
        );
      })}
    </div>
  );
}

export default ShoppingList;
