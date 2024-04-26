function ShoppingList({shoppingList}) {
    return (

        <ul>
        {shoppingList.map((item) => {
          return (
            <li key={item.id}>
              {item.item} {item.quantity} {item.unit}
            </li>
          );
        })}
      </ul>
    )
}

export default ShoppingList;
